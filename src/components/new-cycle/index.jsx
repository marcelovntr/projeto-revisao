//import {useState} from 'react'
import { useFormContext } from 'react-hook-form'
import './new-cycle.css'
//import { useRef } from 'react'
export function NewCycle() {

    //const [state, setState] = useState(0)
    //const ref = useRef(null)

    //console.log(ref.current?.value)

    const { register } = useFormContext()

    return (
        <div className='container--new-cycle'>
            <label htmlFor="task">Vou trabalhar em</label>
            <input type="text" id="task" placeholder='Criar timer365...' {...register('task')} />
            {/*<input ref={ref} type="text" id="task" placeholder='Criar timer365...' />*/}

            <label htmlFor="minutesAmount">durante</label>
            <input type="number" id="minutesAmount" {...register('minutesAmount', { valueAsNumber: true })} />

            <span>minutos.</span>
        </div>
    )
}