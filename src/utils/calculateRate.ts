import { rates } from '../constants'

const calculateRate = (totalScore: number, passengerRate: number) => {
    for (const rate of rates) {
        if (totalScore >= rate.scoreMin && totalScore <= rate.scoreMax) {
            return rate.rate + passengerRate
        }
    }
}

export default calculateRate
