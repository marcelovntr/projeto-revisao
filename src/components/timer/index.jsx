import { useEffect, useState } from 'react'
import { differenceInSeconds} from 'date-fns'
import './timer.css'
import PropTypes from 'prop-types'

export function Timer({ activeCycle }) {


    //activeCycle.startDate
    const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
        if (activeCycle) {
            return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
        }

        return 0
    })
    //npm i date-fns

    const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
    const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0
    //separando de dados e formatados
    const minutesAmount = Math.floor(currentSeconds / 60)
    const secondsAmount = currentSeconds % 60

    const minutes = String(minutesAmount).padStart(2, '0')
    const seconds = String(secondsAmount).padStart(2, '0')

    useEffect(() => {     
        let intervalId
        if (activeCycle) {
            //WEB API -- setInterval
            intervalId = setInterval(() => {
                const secondsDifference = differenceInSeconds(new Date(), new Date(activeCycle.startDate))

                if (secondsDifference >= totalSeconds) {
                    setAmountSecondsPassed(totalSeconds)
                    clearInterval(intervalId)
                } else {
                    setAmountSecondsPassed(secondsDifference)
                }
            }, 1000);
        }
        return () => {
            clearInterval(intervalId)}
    }, [activeCycle, totalSeconds])

    return (
        <div className='container--timer'>
            {/* Minutos */}
            <span>{minutes[0]}</span>
            <span>{minutes[1]}</span>
            {/* Separador */}
            <div className='separator--timer'>:</div>
            {/* Segundos */}
            <span>{seconds[0]}</span>
            <span>{seconds[1]}</span>
        </div>
    )
}

Timer.propTypes = {
    activeCycle: PropTypes.object,
}