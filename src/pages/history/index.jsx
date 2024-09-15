import { Status } from '../../components/status'
import './history.css'
import { useCycle } from '../../context/cycle'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
export function HistoryPage() {
    const { cycles } = useCycle()
    return (
        <div className="container--history">
            <h1>Meu histórico</h1>

            <table>
                <thead>
                    <tr>
                        <th>Tarefa</th>
                        <th>Duração</th>
                        <th>Início</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        cycles.map((cycles) => (
                            <tr key={cycles.id}>
                                <td>{cycles.task}</td>
                                <td>{`${cycles.minutesAmount} minuto(s)`}</td>
                                <td>{formatDistanceToNow(new Date(cycles.startDate), {
                                    addSuffix: true,
                                    locale: ptBR
                                })}</td>
                                <td>
                                    {
                                        cycles.finishedDate && (
                                            <Status>Concluído</Status>
                                        )

                                    }
                                      {
                                        cycles.interruptedDate && (
                                            <Status variant='pink'>Interrompido</Status>
                                        )

                                    }
                                       {
                                        !cycles.finishedDate && !cycles.interruptedDate && (
                                            <Status variant='orange'>Em andamento</Status>
                                        )

                                    }

                                </td>
                            </tr>
                        ))
                    }
                    {/* <tr>
                        <td>Conserto de débitos técnicos</td>
                        <td>25 anos</td>
                        <td>Há cerca de 2 éons</td>
                        <td>
                            <Status variant={'pink'}>Concluído</Status>
                        </td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}

//export default HomePage;


//export default HomePage; //exportação padrão

