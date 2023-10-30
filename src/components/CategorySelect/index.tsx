import { useState } from 'react'

type Props = {
    label: string
    name: string
    options: { type: string; rate: number }[]
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
        <div>
            <label htmlFor={name}>{label}</label>
            <select
                id={name}
                value={selectedOption}
                onChange={handleSelectChange}
            >
                {options.map((option, index) => (
                    <option key={index} value={option.rate}>
                        {option.type}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default CategorySelector
