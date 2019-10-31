// how to pass other data types, apart from numbers, to the neurons.
// We can give string or booleans along with the bit 1 or 0
// we can give bits 1 or 0 as per on - off strategy

const brain = require('brain.js');
const network = new brain.NeuralNetwork({ hiddenLayers: [3] });

const restaurants = {
    "Brilliant Yellow Corral": "Monday",
    "Penny’s": "Tuesday",
    "Right Coast Wings": "Wednesday",
    "The Delusion Last Railway Car": "Thursday",
    "Fun Day Inn": "Friday",
    "JHOP": "Saturday",
    "Owls": "Sunday"
};

const trainingData = Object.keys(restaurants).map((data) => ({
    input: { [restaurants[data]]: 1}, 
    output: { [data]: 1}
}));

network.train(trainingData)

getRestaurant = (day) => {
    const result = network.run({ [day]: 1})
    let restaurantName = '';
    let thresholdValue = 0;
    for (let restaurant in result) {
        if (result[restaurant] > thresholdValue) {
            restaurantName = restaurant
            thresholdValue = result[restaurantName]
        }
    }
    return restaurantName
}

console.log(getRestaurant('Monday'))
console.log(getRestaurant('Wednesday'))
console.log(getRestaurant('Friday'))
