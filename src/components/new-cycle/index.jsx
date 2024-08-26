//import {useState} from 'react'
import { useFormContext } from 'react-hook-form'
import './new-cycle.css'
//import { useRef } from 'react'
export function NewCycle() {

    //const [state, setState] = useState(0)
    //const ref = useRef(null)

    //console.log(ref.current?.value)

    const { register, formState } = useFormContext()

    return (
        <div className='container--new-cycle'>
            <label htmlFor="task">Vou trabalhar em</label>
            <input type="text" id="task" placeholder='Criar timer365...'
                {...register('task',
                    {
                        required: { value: true, message: 'campo obrigatório!' },
                        minLength: { value: 3, message: 'mínimo de 3 caracteres para a tarefa!' }

                    })}
            />
            {formState.errors.task && (<p className='text--error'>
                {formState.errors.task.message}
            </p>)}
           
            {/*<input ref={ref} type="text" id="task" placeholder='Criar timer365...' />*/}

            <label htmlFor="minutesAmount">durante</label>
            <input type="number" id="minutesAmount" {...register('minutesAmount', { valueAsNumber: true })} />

            <span>minutos.</span>
        </div>
    )
}