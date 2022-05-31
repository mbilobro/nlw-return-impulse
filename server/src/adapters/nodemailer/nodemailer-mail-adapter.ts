import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "261e0cf6f786b0",
      pass: "238b032777544a"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: "Equipe SIVECPS <sivecps@gmail.com>",
            to: "Equipe Bilo <matheusbilobrovec@gmail.com>",
            subject: subject,
            html: body
        });
    };
}