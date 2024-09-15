import { useEffect, useState } from 'react'
import { differenceInSeconds } from 'date-fns'
import './timer.css'
import PropTypes from 'prop-types'
import { useCycle } from '../../context/cycle'

//export function Timer({ activeCycle }) { como receber o useCycle() --> não precisa mais receber a prop activeCycle
export function Timer() {
    const { activeCycle, markCurrentCycleAsFinished } = useCycle()
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

    // function tocarAudio() {
    //     const audio = new Audio('')
    //     audio.play
    // }

    useEffect(() => {
        let intervalId
        if (activeCycle) {
            //WEB API -- setInterval
            intervalId = setInterval(() => {
                const secondsDifference = differenceInSeconds(new Date(), new Date(activeCycle.startDate))

                if (secondsDifference >= totalSeconds) {
                    markCurrentCycleAsFinished()
                    setAmountSecondsPassed(totalSeconds)
                    clearInterval(intervalId)
                } else {
                    setAmountSecondsPassed(secondsDifference)
                }
            }, 1000);
        }
        return () => {
            clearInterval(intervalId)
        }
    }, [activeCycle, totalSeconds, markCurrentCycleAsFinished])

    // useEffect(() => {
    //     if (minutesAmount === 0 && secondsAmount === 0) { tocarAudio() }
    // }, [minutesAmount, secondsAmount])

    useEffect(() => {
        if(activeCycle) {
            document.title = `${minutes} : ${seconds} - ${activeCycle.task}`}
    }, [minutes, seconds, activeCycle])

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