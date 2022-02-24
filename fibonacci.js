addEventListener('message', messageReceived)

function messageReceived(event) {
    let numberToReach = event.data.numberToReach;
    let fibonacciTo = fibonacci(numberToReach)
    postMessage(fibonacciTo);
}

function fibonacci(nums) {
    let fib = [0, 1];
    let data = [];
    for (let i = 2; i <= nums; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
        data.push(fib[i]);
    }
    return data;
}