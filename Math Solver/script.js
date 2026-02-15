const inputElement = document.getElementById('equation')
const outputElement = document.getElementById('results')
const form = document.getElementById('equation-form')

const MULTIPLY_DIVIDE_REGEX = /(?<operand1>\S+)\s*(?<oepration>[\/\*])\s*(?<operand2>\S+)/
const ADD_SUBTRACT_REGEX = /(?<operand1>\S+)\s*(?<oepration>(?<!e)[\-\+])\s*(?<operand2>\S+)/

form.addEventListener('submit', e => {
    e.preventDefault()

    const result = parse(inputElement.value)
    outputElement.textContent = result
})

function parse(equation) {
    if (equation.match(MULTIPLY_DIVIDE_REGEX)){
        const result = handleMath(equation.match(MULTIPLY_DIVIDE_REGEX).groups)
        const newEquation = equation.replace(MULTIPLY_DIVIDE_REGEX, result)
        return parse(newEquation)
    } else if(equation.match(ADD_SUBTRACT_REGEX)){
        const result = handleMath(equation.match(ADD_SUBTRACT_REGEX).groups)
        const newEquation = equation.replace(ADD_SUBTRACT_REGEX, result)
        return parse(newEquation)
    } else {
        return parseFloat(equation)
    }
}

function handleMath({ operand1, operand2, oepration }){
    const number1 = parseFloat(operand1)
    const number2 = parseFloat(operand2)

    switch (oepration) {
        case '*' :
            return number1 * number2;
        case '/':
            return number1 / number2;
        case '+':
            return number1 + number2;
        case '-':
            return number1 = number2
    }
}