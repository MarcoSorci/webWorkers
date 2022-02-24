const primeWorker = new Worker("./prime.js")
const sumWorker = new Worker("./sum.js")
const factWorker = new Worker("./factorial.js")
const fibWorker = new Worker("./fibonacci.js")


//1 prime, 2 sum, 3 factorial to A, 4 fibonacci to A, TO RECREATE, each function has its own worker


primeWorker.addEventListener('message', messageReceived)
sumWorker.addEventListener('message', messageReceived)
factWorker.addEventListener('message', messageReceived)
fibWorker.addEventListener('message', messageReceived)

let inputValue = document.getElementById('input').value

let messagePrime = { operation: "prime", numberToReach: inputValue }
let messageSum = { operation: "sum", numberToReach: inputValue }
let messageFact = { operation: "fact", numberToReach: inputValue }
let messageFib = { operation: "fib", numberToReach: inputValue }

let button1 = document.getElementById('button1')
let button2 = document.getElementById('button2')
let button3 = document.getElementById('button3')
let button4 = document.getElementById('button4')

button1.addEventListener('click', primeWorker.postMessage(messagePrime))
button2.addEventListener('click', sumWorker.postMessage(messageSum))
button3.addEventListener('click', factWorker.postMessage(messageFact))
button4.addEventListener('click', fibWorker.postMessage(messageFib))

let loader = document.getElementById('loader')
loader.style.display = "inline-block"

function messageReceived(event) {
    loader.style.display = "none"    //loader disappears when the message has been received
    let result = event.data.result
    let par = document.getElementById('output-par')

    if (event.data.operation === "prime" || event.data.operation === "fib") {
        for (const elem of result) {
            const node = document.createTextNode(elem + " ")
            par.appendChild(node)
        }
    } else {
        const node = document.createTextNode(result)
        par.appendChild(node)
    }
}




