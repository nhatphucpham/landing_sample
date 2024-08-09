
export const getGoogleCredentials = () => {
    const projectId = process.env.GOOGLE_SERVICE_PROJECT_ID;
    const privateKeyId = process.env.GOOGLE_SERVICE_PRIVATE_KEY_ID;
    const privateKey = process.env.GOOGLE_SERVICE_PRIVATE_KEY;
    const clientEmail = process.env.GOOGLE_SERVICE_CLIENT_EMAIL;
    const clientId = process.env.GOOGLE_SERVICE_CLIENT_ID;
    const clientX509CertUrl = process.env.GOOGLE_SERVICE_CLIENT_X509_CERT_URL;

    return {
        "type": "service_account",
        "project_id": projectId,
        "private_key_id": privateKeyId,
        "private_key": privateKey,
        "client_email": clientEmail,
        "client_id": clientId,
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": clientX509CertUrl
    }
}

export default function getCredentials(type: string) {
    switch (type) {
        case 'google-api':
            return getGoogleCredentials();
        default:
            return null;
    }
}