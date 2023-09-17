import { NextRequest, NextResponse } from 'next/server';

import { smtpEmail, transporter } from '@/lib/utils/nodemailer-transport/transport';
import { MailOptions } from 'nodemailer/lib/json-transport';

// import { Email } from "@/components/email";

interface ExpectedFields {
  name: string;
  email: string;
  message: string;
  phoneNumber: string;
  title: string;
}

interface ExpectedFiles {
  file: File;
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const formdata: any = await req.formData();

    const name = formdata.get('name');

    const email = formdata.get('email');

    const message = formdata.get('message');

    let phoneNumber = formdata.get('phoneNumber');

    phoneNumber = phoneNumber.split('-').join('');

    const file = formdata.get('file') as unknown as File;

    const bytes = await file.arrayBuffer();

    const buffer = Buffer.from(bytes);

    const messageToCustomer = `Muchas gracias por contactar a Stylink Hn ${name} te escribimos para confirmar tu pedido de lo siguiente: `;

    const encodedMessage = encodeURIComponent(messageToCustomer);

    const whatsappLink = `<a href="https://wa.me/${phoneNumber}?text=${encodedMessage}" style="background: black; color: white; padding: 1rem; border-radius: 5rem; text-decoration: none; font-weight: bold;">Contactar por Whatsapp</a>`;

    const options: MailOptions = {
      from: smtpEmail,
      to: 'keven.bardales@gmail.com',
      subject: `Nuevo pedido de ${name}`,
      html: `<!DOCTYPE html>
      <html>
      <head>
        <title>Email Template</title>
      </head>
      <body>
      <table bgcolor="black" width="100%" cellspacing="0" cellpadding="20">
      <tr>
        <td align="center">
          <table bgcolor="white" width="600" cellspacing="0" cellpadding="10" style="border-radius: 2rem;">
            <tr>
              <td align="center" style="font-size: 1.5rem; font-family: sans-serif; font-weight: 200; padding-top: 20px; padding-bottom: 20px;">
                styl<span style="background: black"><span style="color: white; font-weight: 700;">ink</span><span style="color:white;">.</span></span>
              </td>
            </tr>
            <tr>
              <td align="center" style="font-family: sans-serif; padding-top: 10px; padding-bottom: 10px;">
                <h2>Un nuevo cliente ha pedido un diseño en tu sitio web</h2>
                <p>Ponte en contacto con él para completar su pedido.</p>
              </td>
            </tr>
            <tr>
              <td align="center" style="font-weight: 700; padding-top: 10px; padding-bottom: 10px;">
                <h3>Información del cliente</h3>
              </td>
            </tr>
            <tr>
              <td style="padding: 0 3rem; padding-top: 10px; padding-bottom: 10px;" align="left">
                <h3>Nombre: <span style="font-weight: 200">${name}</span></h3>
                <h3>Correo: <a href="mailto:${
                  email ? email : 'No ha proporcionado un correo'
                }?Subject=Aquí%20el%20asunto%20del%20mail" style="font-weight: 200; color: black">${
                  email ? email : 'No ha proporcionado un correo'
                }</a></h3>
                <h3>Teléfono: <a href="tel:${phoneNumber}" style="font-weight: 200; color:black">${phoneNumber}</a></h3>
              </td>
            </tr>
            <tr>
              <td align="left" style="padding: 0 3rem; padding-top: 10px; padding-bottom: 10px;">
                <p>${message}</p>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding-top: 10px; padding-bottom: 10px;">
                <p>En los archivos adjuntos de este email se encontrará cualquier idea de diseño proporcionada por el cliente</p>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding-top: 20px; padding-bottom: 40px;">
             ${whatsappLink}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
    
            </td>
          </tr>
        </table>
      </body>
      </html>
      
      `,
      attachments: [
        {
          content: buffer,
          filename: file.name,
          contentType: file.type,
        },
      ],
    };
    // Send email using the transporter
    await transporter.sendMail(options);
    return NextResponse.json(
      { message: 'Correo enviado con exito' },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Error al enviar el correo',
      },
      {
        status: 500,
      }
    );
  }
}
