import dotenv from 'dotenv'
import nodemailer from 'nodemailer'

dotenv.config()

console.log('Configuração carregada:')
console.log({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  user: process.env.SMTP_USER,
  senhaCarregada: Boolean(process.env.SMTP_PASS),
  tamanhoSenha: process.env.SMTP_PASS?.replace(/\s/g, '').length,
})

const port = Number(process.env.SMTP_PORT)

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port,
  secure: port === 465,

  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS?.replace(/\s/g, ''),
  },
})

try {
  console.log('Testando conexão com Gmail...')

  await transporter.verify()

  console.log('SMTP autenticado com sucesso!')

  const info = await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: process.env.CONTACT_TO_EMAIL,
    subject: 'Teste Node.js + Gmail',
    text: 'Se você recebeu este e-mail, o Nodemailer está funcionando.',
  })

  console.log('E-mail enviado!')
  console.log('Message ID:', info.messageId)
} catch (error) {
  console.error('FALHA:')
  console.error('message:', error.message)
  console.error('code:', error.code)
  console.error('command:', error.command)
  console.error('response:', error.response)
  console.error('responseCode:', error.responseCode)
}