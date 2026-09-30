import { Mail, MessageCircle, Send } from 'lucide-react'
import { type FormEvent, useState } from 'react'

const contactTypes = [
  'Quero realizar o projeto',
  'Quero participar de um evento',
  'Sou cantor/musico',
  'Quero apoiar',
  'Outros',
]

function parseApiResponse(text: string) {
  if (!text) return {}

  try {
    return JSON.parse(text) as { message?: string }
  } catch {
    return {}
  }
}

export default function FaleConosco() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [feedback, setFeedback] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    setStatus('sending')
    setFeedback('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: formData.get('nome'),
          email: formData.get('email'),
          whatsapp: formData.get('whatsapp'),
          cidade: formData.get('cidade'),
          igreja: formData.get('igreja'),
          assunto: formData.get('assunto'),
          mensagem: formData.get('mensagem'),
          privacidade: formData.get('privacidade') === 'on',
        }),
      })

      const responseText = await response.text()
      const result = parseApiResponse(responseText)

      if (!response.ok) {
        throw new Error(result.message || 'Não foi possível enviar a mensagem.')
      }

      form.reset()
      setStatus('success')
      setFeedback(result.message || 'Mensagem enviada com sucesso.')
    } catch (error) {
      setStatus('error')
      setFeedback(error instanceof Error ? error.message : 'Não foi possível enviar a mensagem.')
    }
  }

  return (
    <main className="page contact-page">
      <section className="page-hero contact-hero" id="inicio">
        <div className="container">
          <span className="eyebrow">Fale conosco</span>
          <h1>Entre em contato</h1>
          <p>
            Envie sua mensagem para falar sobre o Almoço com Deus, A Igreja nas Ruas,
            apoio ao projeto, musicas ou participação em eventos.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          <article className="contact-card">
            <span className="eyebrow">Mensagem</span>
            <h2>Como podemos ajudar?</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <label>
                  Nome
                  <input type="text" name="nome" autoComplete="name" required />
                </label>
                <label>
                  E-mail
                  <input type="email" name="email" autoComplete="email" required />
                </label>
                <label>
                  WhatsApp
                  <input type="tel" name="whatsapp" autoComplete="tel" />
                </label>
                <label>
                  Cidade
                  <input type="text" name="cidade" autoComplete="address-level2" />
                </label>
                <label>
                  Igreja
                  <input type="text" name="igreja" />
                </label>
                <label>
                  Assunto
                  <select name="assunto" defaultValue="" required>
                    <option value="" disabled>Selecione uma opção</option>
                    {contactTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </label>
              </div>

              <label>
                Mensagem
                <textarea name="mensagem" rows={6} required />
              </label>

              <label className="privacy-check">
                <input type="checkbox" name="privacidade" required />
                <span>Autorizo o uso dos meus dados exclusivamente para retorno sobre esta mensagem e atividades relacionadas ao projeto.</span>
              </label>

              <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                <Send size={18} /> {status === 'sending' ? 'Enviando...' : 'Enviar mensagem'}
              </button>
            </form>
            {feedback ? <p className={`form-feedback ${status}`}>{feedback}</p> : null}
            <p className="form-note">Os dados enviados serão usados apenas para retorno sobre esta mensagem.</p>
          </article>

          <aside className="contact-aside">
            <div>
              <Mail size={30} />
              <h2>Contato direto</h2>
              <p>Para retorno por e-mail, utilize o contato oficial informado no projeto.</p>
              <a href="mailto:Almococomdeus10@gmail.com">Almococomdeus10@gmail.com</a>
            </div>
            <div>
              <MessageCircle size={30} />
              <h2>WhatsApp</h2>
              <p>O botão de WhatsApp será ativado quando o número oficial estiver configurado no projeto.</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
