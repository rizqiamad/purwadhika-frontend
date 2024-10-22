function controller(value) {
  const operators = '+-*/' 
  if (expression.length === 0 && operators.includes(value)) return
  if (operators.includes(expression[expression.length - 1]) && operators.includes(value)) return
  expression += value
  input.value += value;
}

const input = document.querySelector('input')
let expression = '';

document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', () => {
    controller(btn.textContent)
  })
})

document.querySelector('.clear').addEventListener('click', () => {
  input.value = ''
  expression = ''
})

document.querySelector('.equal').addEventListener('click', () => {
  if (expression.length === 0) return
  input.value = eval(expression)
})

document.addEventListener('keydown', (e) => {
  const permission = '1234567890+-/*.'
  if (permission.includes(e.key)) {
    controller(e.key)
  }
  if (e.key === 'Enter') {
    if (expression.length === 0) return
    input.value = eval(expression)
  }
  if (e.key === 'Backspace') {
    input.value = ''
    expression = ''
  }
})