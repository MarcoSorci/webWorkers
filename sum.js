addEventListener('message', messageReceived)

function messageReceived(event) {
    let numberToReach = event.data.numberToReach;
    let sumTo = sumNumbersTo(numberToReach)
    postMessage(sumTo);
}

function sumNumbersTo(number) {
    let result = 0
    for (let i = 0; i <= number; i++) {
        result += i;
    }
    return result
}

