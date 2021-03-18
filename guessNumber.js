// Importation des packages
const readline = require('./node_modules/readline-sync')
const chalk = require('chalk')

// Gestion des erreurs
if (process.argv.length !== 3) {
  console.log(`usage: node sayMyName.js numberToGuess`)
  console.log('Add a number you want to guess')
  process.exit(1)
}

if (isNaN(process.argv[2])) {
  console.log(`The numberToGuess must be a number. Your input: ${process.argv[2]}`)
  process.exit(1)
}

let isRunning = true
let numberToGuess = Number(process.argv[2])
// How close?
let veryfar = numberToGuess * 0.9
let far = numberToGuess * 0.5
let close = numberToGuess * 0.2
let veryclose = numberToGuess * 0.05

// First input
console.log('Press X to give up')
let guessedNumber = readline.question('Guess my number: ')

while (isRunning) {

  // Give up choice
  if (guessedNumber === 'x' || guessedNumber === 'X') {
    isRunning = false
    console.log(chalk.bold('Try again later!\nSee you soon!'))
    continue
  }
  // Not a number
  if (isNaN(guessedNumber)) {
    console.log(chalk.bold(`${guessedNumber} is not a number...`))
  }

  // Convert to number
  guessedNumber = Number(guessedNumber)

  // Is right?
  if (guessedNumber === numberToGuess) {
    console.log(chalk.green(`Bravo ! You guess the number ${chalk.bold(numberToGuess)}\nSee you soon!`))
    isRunning = false
    continue

    // How close is it?
  } else if (guessedNumber > numberToGuess - veryclose && guessedNumber < numberToGuess + veryclose) {
    console.log(chalk.green(`Your number is just ${guessedNumber > numberToGuess ? 'bigger' : 'smaller'}`))
  } else if (guessedNumber > numberToGuess - close && guessedNumber < numberToGuess + close) {
    console.log(chalk.yellow(`Your number is a little ${guessedNumber > numberToGuess ? 'bigger' : 'smaller'}`))
  } else if (guessedNumber > numberToGuess - far && guessedNumber < numberToGuess + far) {
    console.log(chalk.magenta(`Your number is ${guessedNumber > numberToGuess ? 'bigger' : 'smaller'}`))
  } else if (guessedNumber > numberToGuess - veryfar && guessedNumber < numberToGuess + veryfar) {
    console.log(chalk.red(`Your number is very ${guessedNumber > numberToGuess ? 'bigger' : 'smaller'}`))
  } else {
    console.log(chalk.bold.red(`Your number is so much ${guessedNumber > numberToGuess ? 'bigger' : 'smaller'}`))
  }


  // Another chance
  guessedNumber = readline.question('\nTry again: ')
}