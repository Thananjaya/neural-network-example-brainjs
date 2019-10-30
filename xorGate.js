const brain = require('brainjs');
const network = new brain.NeuralNetwork({ hiddenLayers: [3] });

//tarining data in the form of array of hashes and also needed to have input - output
const trainingData = [
    { input: [0, 0], output: [0] },
    { input: [0, 1], output: [1] },
    { input: [1, 0], output: [1] },
    { input: [1, 1], output: [0] }
];

network.train(trainingData, {
    log: true, // console.log() progress periodically
    logPeriod: 100 // number of iterations between logging
})

console.log(network.run([1, 0]));