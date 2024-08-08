import { google } from 'googleapis';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(request: Request) {
  const requestBody = await request.json();
  const { name, email, course, phoneNumber, dateOfBirth } = requestBody;

  const keyFilePath = path.join(process.cwd(), 'secret/course-online-431610-83503c7bba43.json');
  const keys = JSON.parse(await fs.readFile(keyFilePath, 'utf8'));

  const auth = new google.auth.GoogleAuth({
    credentials: keys,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });

  const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
  const range = 'FormDangKy!A:H'; // Adjust the range as needed

  try {
    const payload = {
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      resource: {
        values: [[(new Date()).toTimeString(), email, name, '', course, '', phoneNumber, dateOfBirth]],
      },
    }

    await sheets.spreadsheets.values.append(payload);
    return Response.json({ message: 'Success' });
  } catch (error) {
    console.error(error);
    return new Response('Failed to submit form', { status: 500 });
  }
}