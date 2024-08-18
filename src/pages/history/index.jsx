import {Status} from '../../components/status'
import './history.css'

export function HistoryPage() {
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
                    <tr>
                        <td>Conserto de débitos técnicos</td>
                        <td>25 anos</td>
                        <td>Há cerca de 2 éons</td>
                        <td>
                            <Status>Concluído</Status>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

//export default HomePage;


//export default HomePage; //exportação padrão

