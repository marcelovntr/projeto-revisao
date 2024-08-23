import { useState } from "react";
import { Button } from "../../components/button";
import { NewCycle } from "../../components/new-cycle";
import { Timer } from "../../components/timer";
import { useForm, FormProvider } from 'react-hook-form'
import './home.css'


export function HomePage() {

    // const {register, handleSubmit} = useForm()
    const methods = useForm()
    const { handleSubmit } = methods
    const [cycles, setCycles] = useState([])
    const [activeCycleId, setActiveCycleId] = useState(null) //saber qual ciclo está ativo

    /**
     * @param {Object} data dados para criação de um novo ciclo
     * @param {String} data.task
     * @param {Number} data.minutesAmount
     * */

    function createNewCycle({ task, minutesAmount }) { //createNewCycle(data){
        //id : String; task: String; minutesAmount: string; 
        //startDate: Date
        //interruptedDates?: Date | undefined
        //finishedDate?: Date | undefined
        const id = String(new Date().getTime())
        const newCycle = {
            id,
            task,
            minutesAmount,
            startDate: new Date()

        }
        console.log(newCycle)
        //setCycles(newCycle)
        setCycles((previous)=>[...previous, newCycle])
        setActiveCycleId(id)
    }

    const activeCycle = cycles.find(cycle => cycles.id === activeCycleId)
    return (
        // era div apenas
        <form className="container--home" onSubmit={handleSubmit(createNewCycle)}>
            {/* <input type="text" {...register('name', { required: true})} /> */}
            <FormProvider {...methods}>
                <NewCycle />
            </FormProvider>
            <Timer activeCycle={activeCycle}/> {/*passamento de prop pro 'arquivo' Timer processar*/}
            <Button>Começar</Button>
            {/*ou: <Button variant= "secondary">Começar</Button>    */}
        </form>
    )
}

export default HomePage;


//export default HomePage; //exportação padrão

