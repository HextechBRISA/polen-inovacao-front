import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    const { email, userType } = await req.json();

    let messageText = '';
    let googleFormLink = '';

    switch (userType) {
        case 'option1':
            messageText = 'Bem-vindo, parceiro!';
            googleFormLink = 'https://docs.google.com/forms/d/e/1FAIpQLSdElW7qHd4iy_DsOGOTQHCrGeSeQFek86rh_S2cfiVlJQfz4w/formResponse';
            break;
        case 'option2':
            messageText = 'Bem-vindo, aluno!';
            googleFormLink = 'https://docs.google.com/forms/d/e/1FAIpQLSdElW7qHd4iy_DsOGOTQHCrGeSeQFek86rh_S2cfiVlJQfz4w/formResponse';
            break;
        case 'option3':
            messageText = 'Bem-vindo, professor!';
            googleFormLink = 'https://docs.google.com/forms/d/e/1FAIpQLSdElW7qHd4iy_DsOGOTQHCrGeSeQFek86rh_S2cfiVlJQfz4w/formResponse';
            break;
        case 'option4':
            messageText = 'Bem-vindo, aspirante a residente!';
            googleFormLink = 'https://docs.google.com/forms/d/e/1FAIpQLSdElW7qHd4iy_DsOGOTQHCrGeSeQFek86rh_S2cfiVlJQfz4w/formResponse';
            break;
        default:
            messageText = 'Bem-vindo!';
            googleFormLink = 'https://docs.google.com/forms/d/e/1FAIpQLSdElW7qHd4iy_DsOGOTQHCrGeSeQFek86rh_S2cfiVlJQfz4w/formResponse';
            break;
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'danieldesousalimacursos@gmail.com',
                pass: 'tjmp rrky zkcu oflu',
            },
        });

        const mailOptions = {
            from: 'danieldesousalimacursos@gmail.com',
            to: email,
            subject: 'Google Form Link',
            text: `${messageText} Por favor, preencha o seguinte formulário: ${googleFormLink}`,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email enviado com sucesso' }, { status: 200 });
    } catch (error) {
        console.error('Erro ao enviar email:', error);
        return NextResponse.json({ message: 'Erro ao enviar email', error }, { status: 500 });
    }
}
