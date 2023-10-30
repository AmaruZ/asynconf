const calculateRate = (
    value: number,
    options: { min: number; max: number; rate: number }[]
) => {
    for (const range of options) {
        if (value >= range.min && value < range.max) {
            return range.rate
        }
    }
    return 0
}

export default calculateRate
