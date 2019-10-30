const brain = require('brainjs');
const network = new brain.NeuralNetwork({ hiddenLayers: [3] })

const colors = [
    { green: 0.2, blue: 0.4 },
    { green: 0.4, blue: 0.6 },
    { red: 0.2, green: 0.8, blue: 0.8 },
    { green: 1, blue: 1 },
    { red: 0.8, green: 1, blue: 1 },
    { red: 1, green: 1, blue: 1 },
    { red: 1, green: 0.8, blue: 0.8 },
    { red: 1, green: 0.6, blue: 0.6 },
    { red: 1, green: 0.4, blue: 0.4 },
    { red: 1, green: 0.31, blue: 0.31 },
    { red: 0.8 },
    { red: 0.6, green: 0.2, blue: 0.2 }
];

const brightnesses = [
    { dark: 0.8 },
    { neutral: 0.8 },
    { light: 0.7 },
    { light: 0.8 },
    { light: 0.9 },
    { light: 1 },
    { light: 0.8 },
    { neutral: 0.7, light: 0.5 },
    { dark: 0.5, neutral: 0.5 },
    { dark: 0.6, neutral: 0.3 },
    { dark: 0.85 },
    { dark: 0.9 }
];

trainingData = []

for(let i = 0; i < colors.length; i++){
    trainingData.push({
        input: colors[i],
        output: brightnesses[i]
    });
}

network.train(trainingData)

console.log(network.run({red: 1}))

reversedTrainingData = []

for (let i = 0; i < brightnesses.length; i++){
    reversedTrainingData.push({
        input: brightnesses[i],
        output: colors[i]
    });
}

const reversedNetwork = new brain.NeuralNetwork({ hiddenLayers: [3] })

reversedNetwork.train(reversedTrainingData)

console.log(reversedNetwork.run({dark: 0.9}))
