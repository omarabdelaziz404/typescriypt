const carMakers = ['ford', 'tyota', 'chevy'];
const dates = [new Date(), new Date()];

// Two dimensional array
const carsByMake: string[] [] = [];

// OR   
const carsByMakeTwo= [
    ['f150'],
    ['corolla'],
    ['camaro']
];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Pervent incompatible values
carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
    return car.toUpperCase();
});

// Flexible types
const impotantDates: (Date | string) [] = [];
impotantDates.push('2030-10-10');
impotantDates.push(new Date());

