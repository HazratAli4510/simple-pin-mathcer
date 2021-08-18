// Generating 4 Digit Number
function generatePin() {
    const randomPin = Math.round(Math.random() * 10000)
    const random = randomPin + ''
    if (random.length == 4) {
        return randomPin
    } else {
        return generatePin()
    }
}

// handle Generate Pin Button
document.getElementById('pin-generator').addEventListener('click', function () {
    document.getElementById('generated-pin').value = generatePin()
})

// Handle keypad
document.getElementById('keyPad').addEventListener('click', function (event) {
    const CurrentValue = document.getElementById('keyReader').value
    const newValue = CurrentValue + event.target.innerText
    if (!isNaN(newValue)) {
        document.getElementById('keyReader').value = newValue
    }
    else if (event.target.innerText == 'C') {
        document.getElementById('keyReader').value = ''
    }
})

// handle Submit button

function verifying() {
    const generatedPin = document.getElementById('generated-pin').value
    const typedPin = document.getElementById('keyReader').value
    const theMsg = document.getElementById('verified')
    const theWrongMsg = document.getElementById('wrong-pin')
    if (typedPin.length ==4) {
        if (generatedPin == typedPin) {
            theWrongMsg.style.display = 'none'
            theMsg.style.display = 'block'
        } else {
            theMsg.style.display = 'none'
            theWrongMsg.style.display = 'block'
        }
    }
}