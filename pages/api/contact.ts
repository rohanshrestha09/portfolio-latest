import type { NextApiRequest, NextApiResponse } from 'next';

import nodemailer from 'nodemailer';

type Data = {
   message: string;
};

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse<Data>
) {
   if (req.method === 'POST') {
      const { name, subject, email, message } = JSON.parse(req.body);

      const transporter = nodemailer.createTransport({
         // eslint-disable-next-line @typescript-eslint/ban-ts-comment
         // @ts-ignore
         service: 'gmail',
         host: 'smtp.gmail.com',
         auth: {
            user: process.env.MAILING_EMAIL,
            pass: process.env.MAILING_PASSWORD,
         },
         port: '465',
      });

      await transporter.sendMail({
         from: `${name} ${email}`,
         to: process.env.RECEIVER_MAIL,
         subject,
         html: `
            <p>Email: ${String(email)}</p>
            <p>Name: ${name}</p> 
            <p>${message}</p>
         `,
      });

      res.status(200).json({ message: 'Successful' });
   }
}
