import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

export async function getLandingContents() {
  try {
    const data = await prisma.landing_contents.findMany({
      orderBy: {
        id: 'asc',
      },
    });
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch data from the database');
  } finally {
    await prisma.$disconnect();
  }
}

export async function getImageByLandingContentId(id: number) {
  try {
    const data = await prisma.landing_images.findMany({
      where: { landing_content_id: id },
      select: { image_url: true, content: true },
    });

    return data.map((item) => ({imageUrl: `${process.env.STATIC_URL}${item.image_url}`, content: item.content}));
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch data from the database');
  } finally {
    await prisma.$disconnect();
  }
}
