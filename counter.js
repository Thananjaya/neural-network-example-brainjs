const brain = require('brain.js');
const network = new brain.recurrent.LSTMTimeStep();

network.train(
    [
        [1,2,3,4,5],
        [5,4,3,2,1]
    ]
)

console.log(network.run([1,2,3])); // output will be 4
console.log(network.run([5,4,3])); // output will be 2