import { useState } from 'react'
import CategorySelector from '../../components/CategorySelect'
import {
    fuelTypes,
    mileageOptions,
    vehiculeTypes,
    yearOptions,
} from '../../constants'
import CategoryInput from '../../components/CategoryInput'
import calculateRate from '../../utils/calculateRate'

const Home = () => {
    const [vehiculeRate, setVehiculeRate] = useState(vehiculeTypes[0].rate)
    const [fuelRate, setFuelRate] = useState(fuelTypes[0].rate)
    const [mileageValue, setMileageValue] = useState(0)
    const [yearValue, setYearValue] = useState(0)

    const handleClick = (e: React.FormEvent<SubmitEvent>) => {
        e.preventDefault()
        console.log(
            vehiculeRate +
                fuelRate +
                calculateRate(mileageValue, mileageOptions) +
                calculateRate(yearValue, yearOptions)
        )
    }

    return (
        <form>
            <CategorySelector
                label={'Type de véhicule'}
                name="vehicule"
                options={vehiculeTypes}
                setValue={setVehiculeRate}
            />
            <CategorySelector
                label={'Energie'}
                name="fuel"
                options={fuelTypes}
                setValue={setFuelRate}
            />
            <CategoryInput
                label={'Kilometrage par an'}
                name="mileage"
                options={mileageOptions}
                setValue={setMileageValue}
            />
            <CategoryInput
                label={'Année'}
                name="year"
                options={yearOptions}
                setValue={setYearValue}
            />
            <button type="submit" onClick={handleClick}>
                Calculer
            </button>
        </form>
    )
}

export default Home
