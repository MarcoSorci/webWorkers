addEventListener('message', messageReceived)

function messageReceived(event) {
    let numberToReach = event.data.numberToReach;
    let primeto = calculatePrimeNumbersTo(numberToReach)
    postMessage(primeto);
}

function calculatePrimeNumbersTo(number) {
    let array = Array.from({length: number - 1}, (v, i) => i + 2);
    return array.reduce((p, c) => p.some(e => c % e === 0) ? p : [...p, c],[]);
}

