import { google } from 'googleapis';
import { promises as fs } from 'fs';
import path from 'path';
import getCredentials from './getCredentials';



export async function POST(request: Request) {

  const requestBody = await request.json();
  const { name, email, course, phoneNumber, dateOfBirth } = requestBody;

  const bucketName = process.env.AWS_GOOGLE_CREDENTIALS_BUCKET_NAME;
  const objectKey = process.env.AWS_GOOGLE_CREDENTIALS_OBJECT_KEY;

  const params = {
    Bucket: bucketName,
    Key: objectKey,
  };

  let keys = getCredentials('google-api');

  if (!keys) {
    const keyFilePath = path.join(process.cwd(), 'secret/course-online-431610-83503c7bba43.json');
    keys = JSON.parse(await fs.readFile(keyFilePath, 'utf8'));
  }

  if(!keys) { 
    return new Response('Failed to get Google credentials', { status: 500 });
  }

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