addEventListener('message', messageReceived)

function messageReceived(event) {
    let numberToReach = event.data.numberToReach;
    let factorialTo = factorialize(numberToReach)
    postMessage(factorialTo);
}

function factorialize(num) {
    if (num === 0 || num === 1)
      return 1;
    for (let i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }
