import { useState } from 'react'

type Props = {
    label: string
    name: string
    options: { min: number; max: number; rate: number }[]
    setValue: (value: number) => void
}

const CategoryInput = ({ label, name, options, setValue }: Props) => {
    const [error, setError] = useState('')
    const min = options[0].min
    const max = options[options.length - 1].max

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = parseFloat(e.target.value)
        if (inputValue < min || inputValue > max) {
            setError(
                `La valeur du champ doit être comprise entre ${min} et ${max}`
            )
        } else {
            setError('')
            setValue(inputValue)
        }
    }
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input
                type="number"
                name={name}
                id={name}
                onChange={handleInputChange}
                min={min}
                max={max}
            />
            {error && <p>{error}</p>}
        </div>
    )
}

export default CategoryInput
