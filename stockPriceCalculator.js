const data = require('./stockPriceData.json');
const brain = require('brain.js');

network = new brain.recurrent.LSTMTimeStep({
    inputSize: 4,
    hiddenLayers: [8, 8],
    outputSize: 4
})

scaledDown = (step) => {
    return {
        open: step.open / 138,
        high: step.high / 138,
        low: step.low / 138,
        close: step.close / 138
    };
}


scaledUp = (step) => {
    return {
        open: step.open * 138,
        high: step.high *138,
        low: step.low * 138,
        close: step.close * 138
    };
}

const scaledData = data.map(scaledDown)

const trainingData = [
    scaledData.slice(0,5),
    scaledData.slice(5,10),
    scaledData.slice(10,15),
    scaledData.slice(15,20)
]

network.train(trainingData, {learningRate: 0.005, errorThresh: 0.02});

console.log(scaledUp(network.run(trainingData[0]))) // for the single step

console.log(network.forecast([
    trainingData[0][0],
    trainingData[0][1],
    trainingData[0][2]
], 3).map(scaledUp)) // for the multiple steps