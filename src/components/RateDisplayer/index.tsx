const RateDisplayer = ({ rate }: { rate: number }) => {
    return (
        <div className="rate-displayer">
            <p className="rate-displayer__text">Vos frais s'élèveront à:</p>
            <p className="rate-displayer__text rate-displayer__text--big">
                {rate}%
            </p>
            <p className="rate-displayer__text">
                supplémentaire pour cet emprunt
            </p>
        </div>
    )
}

export default RateDisplayer
