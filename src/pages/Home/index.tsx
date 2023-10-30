import { useState } from 'react'
import CategorySelector from '../../components/CategorySelect'
import {
    fuelTypes,
    mileageOptions,
    passengerOptions,
    vehiculeTypes,
    yearOptions,
} from '../../constants'
import CategoryInput from '../../components/CategoryInput'
import calculateScore from '../../utils/calculateScore'
import calculateRate from '../../utils/calculateRate'

const Home = () => {
    const [vehiculeScore, setVehiculeScore] = useState(vehiculeTypes[0].score)
    const [fuelScore, setFuelScore] = useState(fuelTypes[0].score)
    const [mileageValue, setMileageValue] = useState(mileageOptions[0].min)
    const [yearValue, setYearValue] = useState(yearOptions[0].min)
    const [passengerRate, setPassengerRate] = useState(passengerOptions[0].rate)

    const handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        console.log(
            vehiculeScore +
                fuelScore +
                calculateScore(mileageValue, mileageOptions) +
                calculateScore(yearValue, yearOptions),
            passengerRate,
            calculateRate(
                Math.round(
                    vehiculeScore +
                        fuelScore +
                        calculateScore(mileageValue, mileageOptions) +
                        calculateScore(yearValue, yearOptions)
                ),
                passengerRate
            )
        )
    }

    return (
        <main className="main">
            <h1 className="title">
                Mesurez votre taux d'empreinte écologique avec{' '}
                <span className="green">Green Bank</span>
            </h1>
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
                    step={1}
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
        </main>
    )
}

export default Home
