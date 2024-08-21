import { useState } from 'react'
import './timer.css'
import PropTypes from 'prop-types'

export function Timer({activeCycle}) {


//activeCycle.startDate
const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)
//npm i date-fns
    return (
        <div className='container--timer'>
            {/* Minutos */}
            <span>0</span>
            <span>0</span>
            {/* Separador */}
            <div className='separator--timer'>:</div>
            {/* Segundos */}
            <span>0</span>
            <span>0</span>
        </div>
    )
}

Timer.PropTypes = {
    activeCycle: PropTypes.object,
}