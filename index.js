/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputField = document.getElementById("num-input")
const convertBtn = document.getElementById("convert-btn")
const lengthContent = document.getElementById("length")
const volumeContent = document.getElementById("volume")
const massContent = document.getElementById("mass")
const nothing = inputField.value

let length = ["meter", "feet"]
let volume = ["liter", "gallon"]
let mass = ["kilo", "pound"]

let input = 0

convertBtn.addEventListener("click", function() {
    if (inputField.value === nothing) {
        input = 0
    } else {
        input = inputField.value
    }

    render()
})

function render() {
    lengthContent.textContent = `${input} meters = ${convert(input, 3.281)[0].toFixed(3)} feet | ${input} feet = ${convert(input, 3.281)[1].toFixed(3)} meters`

    volumeContent.textContent = `${input} liters = ${convert(input, 0.264)[0].toFixed(3)} gallons | ${input} gallons = ${convert(input, 0.264)[1].toFixed(3)} liters`

    massContent.textContent = `${input} kilos = ${convert(input, 2.204)[0].toFixed(3)} pounds | ${input} pounds = ${convert(input, 2.204)[1].toFixed(3)} kilos`
}

function convert(x, y) {
    return [x * y, x / y]
}