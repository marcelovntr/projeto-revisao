import { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

export const CycleContext = createContext({
    cycles: [],
    activeCycleId: null,
    createNewCycle: () => { },
    activeCycle: undefined

})

export function CycleProvider({ children }) {
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
        setCycles((previous) => [...previous, newCycle])
        setActiveCycleId(id)
    }

    const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

    return <CycleContext.Provider value={{ cycles, activeCycleId, createNewCycle, activeCycle }}>
        {children}
    </CycleContext.Provider>
}

CycleProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export function useCycle() {
    const context = useContext(CycleContext)
    return context
}