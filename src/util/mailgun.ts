import * as mg from 'mailgun-js';
const mailgun = mg({ apiKey: process.env.MAILGUN_KEY, domain: process.env.MAILGUN_DOMAIN})


export const sendMessage = async (data: {from: string, to: string, subject: string, text: string }) =>{
    return await mailgun.messages().send(data);
}