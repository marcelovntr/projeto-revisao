import { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

export const CycleContext = createContext({
    cycles: [],
    activeCycleId: null,
    createNewCycle: () => { },
    activeCycle: undefined,
    markCurrentCycleAsFinished: () => { },
    interruptedCurrentCycle: () => { },

})
const CYCLE_KEY_LOCAL_STORAGE = '@lab-timer365:cycles-1.0.0'
const ACTIVE_CYCLE_KEY_LOCAL_STORAGE = '@lab-timer365:active-cycles-1.0.0'

export function CycleProvider({ children }) {
    const [cycles, setCycles] = useState(() => {
        const cycleStorage = localStorage.getItem(CYCLE_KEY_LOCAL_STORAGE)

        if (cycleStorage) {
            return JSON.parse(cycleStorage)
        }
        return []
    })
    const [activeCycleId, setActiveCycleId] = useState(() => {
        const activeCycleStorage = localStorage.getItem(ACTIVE_CYCLE_KEY_LOCAL_STORAGE)
        return activeCycleStorage
    }) //saber qual ciclo está ativo

    /**
     * @param {Object} data dados para criação de um novo ciclo
     * @param {String} data.task
     * @param {Number} data.minutesAmount
     * */

    function createNewCycle({ task, minutesAmount }) { //createNewCycle(data){
        //id : String; task: String; minutesAmount: string; 
        //startDate: Date   //interruptedDates?: Date | undefined  //finishedDate?: Date | undefined
        const id = String(new Date().getTime())
        const newCycle = {
            id,
            task,
            minutesAmount,
            startDate: new Date()
        }
        console.log(newCycle)
        //setCycles(newCycle) --> // setCycles((previous) => [...previous, newCycle])
        setCycles((previous) => {
            let newCycleState = [...previous, newCycle]
            localStorage.setItem(CYCLE_KEY_LOCAL_STORAGE, JSON.stringify(newCycleState)) //'@lab-timer365:cycles-1.0.0'
            return newCycleState
        })
        setActiveCycleId(id)
        localStorage.setItem(ACTIVE_CYCLE_KEY_LOCAL_STORAGE, id)
    }

    function markCurrentCycleAsFinished() {
        const newStateCycle = cycles.map(cycle => {
            if (cycle.id === activeCycleId) {
                return {
                    ...cycle, finishedDate: new Date()
                }
            }
            return cycle
        })
        /*atualizando estados */
        setCycles(newStateCycle) //<-- não necessita previous pq contem o array completo de cycles
        setActiveCycleId(null)
        /*atualizando localStorage */
        localStorage.setItem(CYCLE_KEY_LOCAL_STORAGE, JSON.stringify(newStateCycle))
        localStorage.removeItem(ACTIVE_CYCLE_KEY_LOCAL_STORAGE)
    }

    function interruptedCurrentCycle() {
        const newStateCycle = cycles.map(cycle => {
            if (cycle.id === activeCycleId) {
                return {
                    ...cycle, interruptedDate: new Date()
                }
            }
            document.title = '' //eu que coloquei essa cousa, feio!
            return cycle
            
        })
        /*atualizando estados */
        setCycles(newStateCycle) //<-- não necessita previous pq contem o array completo de cycles
        setActiveCycleId(null)
        /*atualizando localStorage */
        localStorage.setItem(CYCLE_KEY_LOCAL_STORAGE, JSON.stringify(newStateCycle))
        localStorage.removeItem(ACTIVE_CYCLE_KEY_LOCAL_STORAGE)
    }
    const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

    return <CycleContext.Provider
        value={{
            cycles, activeCycleId, createNewCycle, activeCycle,
            markCurrentCycleAsFinished, interruptedCurrentCycle
        }}>
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