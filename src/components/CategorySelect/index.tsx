import { useState } from 'react'

type Option = {
    type?: string
    rate?: number
    number?: number
    score?: number
}

type Props = {
    label: string
    name: string
    options: Option[]
    setValue: (value: number) => void
}

const CategorySelector = ({ label, name, options, setValue }: Props) => {
    const [selectedOption, setSelectedOption] = useState(0)

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = parseFloat(e.target.value)
        setSelectedOption(selectedValue)
        setValue(selectedValue)
    }
    return (
        <div className="form__input-container">
            <label className="form__label" htmlFor={name}>
                {label}
            </label>
            <select
                id={name}
                value={selectedOption}
                onChange={handleSelectChange}
                className="form__select"
            >
                {options.map((option, index) => (
                    <option key={index} value={option.score || option.rate}>
                        {option.type || option.number}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default CategorySelector
