type Props = {
    label: string
    name: string
    options: { min: number; max: number; score: number }[]
    step: number
    value: number
    setValue: (value: number) => void
}

const CategoryInput = ({
    label,
    name,
    options,
    step,
    value,
    setValue,
}: Props) => {
    const min = options[0].min
    const max = options[options.length - 1].max

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = parseFloat(e.target.value)

        setValue(inputValue)
    }
    return (
        <div className="form__input-container">
            <div className="form__label-container">
                <label className="form__label" htmlFor={name}>
                    {label}
                </label>
                <output className="form__output" htmlFor={name}>
                    {value}
                </output>
            </div>

            <input
                type="range"
                name={name}
                id={name}
                onChange={handleInputChange}
                min={min}
                max={max}
                step={step}
                value={value}
                className="form__input-range"
            />
        </div>
    )
}

export default CategoryInput
