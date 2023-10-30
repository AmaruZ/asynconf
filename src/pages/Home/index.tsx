import { useState } from 'react'
import RateDisplayer from '../../components/RateDisplayer'
import FormEcoCalc from '../../components/FormEcoCalc'

const Home = () => {
    const [rate, setRate] = useState(0)

    return (
        <main className="main">
            <h1 className="title">
                Mesurez votre taux d'empreinte écologique avec{' '}
                <span className="green">Green Bank</span>
            </h1>
            <div className="wrapper">
                <FormEcoCalc setRate={setRate} />
                <RateDisplayer rate={rate} />
            </div>
        </main>
    )
}

export default Home
