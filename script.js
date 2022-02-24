const primeWorker = new Worker("./worker.js")

//1 prime, 2 sum, 3 factorial to A, 4 fibonacci to A, TO RECREATE, each function has its own worker


primeWorker.addEventListener('message', messageReceived)

let message = {operation: "prime", numberToReach: 100000}
let message2 = {operation: "sum", numberToReach: 100}

primeWorker.postMessage(message)
let loader = document.getElementById('loader')
loader.style.display = "inline-block"

function messageReceived(event) {
    loader.style.display = "none"              //loader disappears when the message has been received
    if (event.data.operation === "prime") {
        let primeToNumber = event.data.result
    let par = document.getElementById('prime-numbers')

    for (const prime of primeToNumber) {
        const node = document.createTextNode(prime + " ")
        par.appendChild(node)
    }
    } else {
        let par = document.getElementById('prime-numbers')
        let sum = event.data.result
        const node = document.createTextNode(sum)
        par.appendChild(node)
    }
    
}

function sumNumbersTo(number) {
    let result = 0
    for (let i = 0; i <= number; i++) {
        result += i;
    }
    return result
}


