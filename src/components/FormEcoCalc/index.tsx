import { useState } from 'react'
import {
    fuelTypes,
    mileageOptions,
    passengerOptions,
    vehiculeTypes,
    yearOptions,
} from '../../constants'
import CategoryInput from '../CategoryInput'
import CategorySelector from '../CategorySelect'
import calculateRate from '../../utils/calculateRate'
import calculateScore from '../../utils/calculateScore'

const FormEcoCalc = ({
    setRate,
}: {
    setRate: React.Dispatch<React.SetStateAction<number>>
}) => {
    const [vehiculeScore, setVehiculeScore] = useState(vehiculeTypes[0].score)
    const [fuelScore, setFuelScore] = useState(fuelTypes[0].score)
    const [mileageValue, setMileageValue] = useState(mileageOptions[0].min)
    const [yearValue, setYearValue] = useState(yearOptions[0].min)
    const [passengerRate, setPassengerRate] = useState(passengerOptions[0].rate)
    const handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setRate(
            parseFloat(
                calculateRate(
                    vehiculeScore +
                        fuelScore +
                        calculateScore(mileageValue, mileageOptions) +
                        calculateScore(yearValue, yearOptions),
                    passengerRate
                ).toFixed(2)
            )
        )
    }
    return (
        <form className="form">
            <CategorySelector
                label={'Type de véhicule 🚗'}
                name="vehicule"
                options={vehiculeTypes}
                setValue={setVehiculeScore}
            />
            <CategorySelector
                label={'Energie 🍃'}
                name="fuel"
                options={fuelTypes}
                setValue={setFuelScore}
            />
            <CategoryInput
                label={'Kilometrage (par an) ⛽'}
                name="mileage"
                options={mileageOptions}
                setValue={setMileageValue}
                value={mileageValue}
                step={100}
            />
            <CategoryInput
                label={'Année de fabrication 📅'}
                name="year"
                options={yearOptions}
                setValue={setYearValue}
                value={yearValue}
                step={1}
            />
            <CategorySelector
                label={'Nombre de passager 🙍‍♂️🙍‍♀️'}
                name="passenger"
                options={passengerOptions}
                setValue={setPassengerRate}
            />
            <button
                className="form__button"
                type="submit"
                onClick={handleClick}
            >
                Calculer
            </button>
        </form>
    )
}

export default FormEcoCalc
