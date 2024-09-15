//import { useState } from "react";
import { Button } from "../../components/button";
import { NewCycle } from "../../components/new-cycle";
import { Timer } from "../../components/timer";
import { useForm, FormProvider } from 'react-hook-form'
import './home.css'
import { useCycle } from "../../context/cycle";
import { SquarePlay, CirclePause } from 'lucide-react'


export function HomePage() {
    // const {register, handleSubmit} = useForm()
    const methods = useForm({
        defaultValues: {
            task: '',
            minutesAmount: 0,
        }
    })
    //const { activeCycle, createNewCycle } = useCycle()
    const { createNewCycle, activeCycle, interruptedCurrentCycle } = useCycle()
    const { handleSubmit, reset, watch } = methods
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
        reset()
    }

    // const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

    const task = watch('task')
    const isSubmittedDisabled = !task
    return (
        // era div apenas
        //<form className="container--home" onSubmit={handleSubmit(createNewCycle)}>
        <form className="container--home" onSubmit={handleSubmit(onSubmit)}>
            {/* <input type="text" {...register('name', { required: true})} /> */}
            <FormProvider {...methods}>
                <NewCycle />
            </FormProvider>
            {/* <Timer activeCycle={activeCycle} /> passamento de prop pro 'arquivo' Timer processar */}
            <Timer /> {/*activeCycle que tava dentro foi pro próprio arquivo do Timer! */}
            {
                activeCycle ? (<Button type='button' variant="secondary" onClick={interruptedCurrentCycle}>
                    <CirclePause size={24} />Interromper</Button>)
                    : (<Button type='submit' disabled={isSubmittedDisabled}> <SquarePlay />Começar</Button>)
            }

            {/*ou: <Button variant= "secondary">Começar</Button>    */}
        </form>
    )
}

export default HomePage;


//export default HomePage; //exportação padrão

