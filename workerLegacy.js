addEventListener('message', messageReceived)

function messageReceived(event) {
    // let numberToReach=event.data
    // let primeto100 = calculatePrimeNumbersTo(numberToReach)
    // // console.log("message received by the script: " + event.data);
    // postMessage(primeto100);
    if (event.data.operation === "prime") {
        let numberToReach= event.data.numberToReach;
        let primetoNumber = calculatePrimeNumbersTo(numberToReach)
        let message = {operation: "prime", result: primetoNumber}
        postMessage(message)
    } else {
        let numberToReach= event.data.numberToReach;
        let sumToNumber = sumNumbersTo(numberToReach);
        let message = {operation: "sum", result: sumToNumber}
        postMessage(message)
    }
}

function calculatePrimeNumbersTo(number) {
    let array = Array.from({length: number - 1}, (v, i) => i + 2);
    return array.reduce((p, c) => p.some(e => c % e === 0) ? p : [...p, c],[]);
}

function sumNumbersTo(number) {
    let result = 0
    for (let i = 0; i <= number; i++) {
        result += i;
    }
    return result
}

