import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    const { email, userType } = await req.json();

    let messageText = '';
    let googleFormLink = '';

    switch (userType) {
        case 'option1':
            messageText = 'Olá, Parceiro! Seja bem-vindo a newsletter Pólen. Agora você ficará por dentro de todas as nossas novidades.';
            googleFormLink = 'https://docs.google.com/forms/d/e/1FAIpQLSeV4pUi2S4rwz8zoIWcvOfMrLLFnGv1YH0gxKhFyBDgF2dpCQ/viewform?usp=sf_link';
            break;
        case 'option2':
            messageText = 'Olá, Aluno! Seja bem-vindo a newsletter Pólen. Agora você ficará por dentro de todas as nossas novidades.';
            googleFormLink = 'https://docs.google.com/forms/d/e/1FAIpQLSeV4pUi2S4rwz8zoIWcvOfMrLLFnGv1YH0gxKhFyBDgF2dpCQ/viewform?usp=sf_link';
            break;
        case 'option3':
            messageText = 'Olá, Professor! Seja bem-vindo a newsletter Pólen. Agora você ficará por dentro de todas as nossas novidades.';
            googleFormLink = 'https://docs.google.com/forms/d/e/1FAIpQLSeV4pUi2S4rwz8zoIWcvOfMrLLFnGv1YH0gxKhFyBDgF2dpCQ/viewform?usp=sf_link';
            break;
        case 'option4':
            messageText = 'Olá, Aspirante à Residente! Seja bem-vindo a newsletter Pólen. Agora você ficará por dentro de todas as nossas novidades.';
            googleFormLink = 'https://docs.google.com/forms/d/e/1FAIpQLSeV4pUi2S4rwz8zoIWcvOfMrLLFnGv1YH0gxKhFyBDgF2dpCQ/viewform?usp=sf_link';
            break;
        default:
            messageText = 'Olá! Seja bem-vindo a newsletter Pólen. Agora você ficará por dentro de todas as nossas novidades.';
            googleFormLink = 'https://docs.google.com/forms/d/e/1FAIpQLSeV4pUi2S4rwz8zoIWcvOfMrLLFnGv1YH0gxKhFyBDgF2dpCQ/viewform?usp=sf_link';
            break;
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'poleninovacao.news@gmail.com',
                pass: 'h d r q b p p b x q f o e h r p',
            },
        });

        const mailOptions = {
            from: 'poleninovacao.news@gmail.com',
            to: email,
            subject: 'Boas vindas à newsletter Pólen',
            text: `${messageText} Por favor, preencha o seguinte formulário: ${googleFormLink}`,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'E-mail enviado com sucesso' }, { status: 200 });
    } catch (error) {
        console.error('Erro ao enviar e-mail:', error);
        return NextResponse.json({ message: 'Erro ao enviar e-mail', error }, { status: 500 });
    }
}
