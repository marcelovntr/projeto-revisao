//import { useState } from "react";
import { Button } from "../../components/button";
import { NewCycle } from "../../components/new-cycle";
import { Timer } from "../../components/timer";
import { useForm, FormProvider } from 'react-hook-form'
import './home.css'
import { useCycle } from "../../context/cycle";


export function HomePage() {
    // const {register, handleSubmit} = useForm()
    const methods = useForm()
    //const { activeCycle, createNewCycle } = useCycle()
    const { createNewCycle } = useCycle()
    const { handleSubmit } = methods
    // const [cycles, setCycles] = useState([])
    // const [activeCycleId, setActiveCycleId] = useState(null) //saber qual ciclo está ativo

    /**
     * @param {Object} data dados para criação de um novo ciclo
     * @param {String} data.task
     * @param {Number} data.minutesAmount
     * */

    //function createNewCycle({ task, minutesAmount }) { //createNewCycle(data){
    function onSubmit({ task, minutesAmount }) {
        createNewCycle({ task, minutesAmount })
        // //id : String; task: String; minutesAmount: string; 
        // //startDate: Date
        // //interruptedDates?: Date | undefined
        // //finishedDate?: Date | undefined
        // const id = String(new Date().getTime())
        // const newCycle = {
        //     id,
        //     task,
        //     minutesAmount,
        //     startDate: new Date()

        // }
        // console.log(newCycle)
        // //setCycles(newCycle)
        // setCycles((previous)=>[...previous, newCycle])
        // setActiveCycleId(id)
    }

    // const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)
    return (
        // era div apenas
        //<form className="container--home" onSubmit={handleSubmit(createNewCycle)}>
        <form className="container--home" onSubmit={handleSubmit(onSubmit)}>
            {/* <input type="text" {...register('name', { required: true})} /> */}
            <FormProvider {...methods}>
                <NewCycle />
            </FormProvider>
            {/* <Timer activeCycle={activeCycle} /> passamento de prop pro 'arquivo' Timer processar */}
            <Timer /> 
            <Button>Começar</Button>
            {/*ou: <Button variant= "secondary">Começar</Button>    */}
        </form>
    )
}

export default HomePage;


//export default HomePage; //exportação padrão

