export const vehiculeTypes = [
    { type: 'Citadine', rate: 8 },
    { type: 'Cabriolet', rate: 6 },
    { type: 'Berline', rate: 6.5 },
    { type: 'SUV / 4x4', rate: 4 },
]

export const fuelTypes = [
    { type: 'Essence', rate: 5 },
    { type: 'Electrique', rate: 9 },
    { type: 'Gaz', rate: 6 },
    { type: 'Diesel', rate: 4 },
    { type: 'Hybride', rate: 7 },
]

export const mileageOptions = [
    { min: 5, max: 10, rate: 9 },
    { min: 10, max: 15, rate: 7 },
    { min: 15, max: 20, rate: 5 },
    { min: 20, max: 25, rate: 3 },
    { min: 25, max: 30, rate: 1 },
]

export const yearOptions = [
    { min: 1960, max: 1970, rate: 1 },
    { min: 1970, max: 1980, rate: 2 },
    { min: 1980, max: 1990, rate: 3 },
    { min: 1990, max: 2000, rate: 4 },
    { min: 2000, max: 2010, rate: 5 },
    { min: 2010, max: new Date().getFullYear(), rate: 7 },
]
