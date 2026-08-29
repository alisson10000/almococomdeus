import { CalendarDays } from 'lucide-react'

export default function EventCard() {
  return (
    <div className="empty-event">
      <CalendarDays size={36}/>
      <h3>Próximos eventos</h3>
      <p>Nenhum evento com data, igreja e endereço foi fornecido ainda. Assim que houver informações oficiais, elas poderão aparecer aqui.</p>
    </div>
  )
}
