const calculateScore = (
    value: number,
    options: { min: number; max: number; score: number }[]
) => {
    let result = 0
    for (const range of options) {
        if (value >= range.min && value <= range.max) {
            result = range.score
        }
    }
    return result
}

export default calculateScore
