const calculateScore = (
    value: number,
    options: { min: number; max: number; score: number }[]
) => {
    for (const range of options) {
        if (value >= range.min && value < range.max) {
            return range.score
        }
    }
    return 0
}

export default calculateScore
