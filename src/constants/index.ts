export const vehiculeTypes = [
    { type: 'Citadine', score: 8 },
    { type: 'Cabriolet', score: 6 },
    { type: 'Berline', score: 6.5 },
    { type: 'SUV / 4x4', score: 4 },
]

export const fuelTypes = [
    { type: 'Essence', score: 5 },
    { type: 'Electrique', score: 9 },
    { type: 'Gaz', score: 6 },
    { type: 'Diesel', score: 4 },
    { type: 'Hybride', score: 7 },
]

export const mileageOptions = [
    { min: 5000, max: 10000, score: 9 },
    { min: 10000, max: 15000, score: 7 },
    { min: 15000, max: 20000, score: 5 },
    { min: 20000, max: 25000, score: 3 },
    { min: 25000, max: 30000, score: 1 },
]

export const yearOptions = [
    { min: 1960, max: 1970, score: 1 },
    { min: 1970, max: 1980, score: 2 },
    { min: 1980, max: 1990, score: 3 },
    { min: 1990, max: 2000, score: 4 },
    { min: 2000, max: 2010, score: 5 },
    { min: 2010, max: new Date().getFullYear(), score: 7 },
]

export const passengerOptions = [
    { number: 1, rate: 0.11 },
    { number: 2, rate: -0.17 },
    { number: 3, rate: -0.29 },
    { number: 4, rate: -0.53 },
]

export const rates = [
    { scoreMin: 0, scoreMax: 10, rate: 3 },
    { scoreMin: 11, scoreMax: 15, rate: 2.74 },
    { scoreMin: 16, scoreMax: 25, rate: 2.52 },
    { scoreMin: 26, scoreMax: 33, rate: 2.1 },
    { scoreMin: 34, scoreMax: 40, rate: 1.85 },
]
