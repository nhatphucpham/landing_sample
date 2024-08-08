// app/api/auth/[...nextauth]/route.ts

import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

async function linkAccounts(user: any, account: any) {
  if (account.provider === 'google') {
    // Check if the user already has an account
    const existingUser = await prisma.user.findUnique({
      where: { email: user.email },
    });

    if (existingUser && existingUser.id !== user.id) {
      // Link accounts if necessary
      await prisma.account.upsert({
        where: {
          provider_providerAccountId: {
            provider: account.provider,
            providerAccountId: account.providerAccountId,
          },
        },
        create: {
          userId: existingUser.id,
          provider: account.provider,
          providerAccountId:
            account.providerAccountId
        },
        update: { userId: existingUser.id },
      });
    }
  }
}

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      // The name to display on the sign-in form (e.g., 'Sign in with...')
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: { email: credentials?.username },
        });

        if (user && user.password === credentials?.password) {
          // Return the user object on successful authentication
          return user;
        } else {
          // Return null if user data could not be retrieved
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    })
    // Add more providers as needed (e.g., Google, Facebook, GitHub)
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      session.user.id = token.id;
      return session;
    },
    async signIn({ user, account, profile }) {
      if (account) {
        await linkAccounts(user, account);
      }
      return true;
    },
  },
});

export { handler as GET, handler as POST };
