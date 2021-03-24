// Importation des packages
const readline = require('./node_modules/readline-sync')
const chalk = require('chalk')


// Début du quiz
let goodAnswer = 0

console.log(chalk.bold('Bienvenue dans le quiz.'))

// Question 1
let earthAge = ['4500 ans', '45 000 ans', '450 000 ans', '4,5 millions d\'années', '450 millions d\'années', '4,5 milliard d\'années']
let answer = readline.keyInSelect(earthAge, 'Quel est l\'age de la Terre ?')
answer === 6 ? goodAnswer++ : goodAnswer += 0

// Question 2
let biggestOrganism = ['Un champignon', 'Une bactérie', 'Un arbre', 'Un corail', 'Une balaine à bosse', 'Koji le chien de Lady Gaga']
answer = readline.keyInSelect(biggestOrganism, 'Quel est l\'organisme le plus grand sur Terre ?')
answer === 1 ? goodAnswer++ : goodAnswer += 0

// Question 3
let element = ['L\'oxygène', 'L\'azote', 'Le soufre', 'L\'hydrogène', 'Le gaz à effet de serre']
answer = readline.keyInSelect(element, 'Quel est l\'élément le plus abondant dans l\'atmosphère ?')
answer === 2 ? goodAnswer++ : goodAnswer += 0

// Question 4
let imago = ['Ce qui reste de la gousse de vanille après extraction de l\'arôme', 'La vision qu\'ont les insects', 'Le stade final de développement d\'un individu', 'La protéine qui permet la fixation et/ou l\'inhibition de l\'adrénaline', 'Un livre imagé']
answer = readline.keyInSelect(imago, 'Qu\'est ce que l\'imago ?')
answer === 3 ? goodAnswer++ : goodAnswer += 0

// Question 5
let trueNflase = ['Vrai', 'Faux']
answer = readline.keyInSelect(trueNflase, 'Les crevettes mantes sont capable de frapper leur proie en envoyant leur pinces à plus de 100km/h ?')
answer === 1 ? goodAnswer++ : goodAnswer += 0

// Question 6 
answer = readline.keyInSelect(trueNflase, 'Ces mêmes crevettes peuvent, avec une seul oeil, connaitre la distance et la profondeur précise d\'un objet par triangularisation ?')
answer === 1 ? goodAnswer++ : goodAnswer += 0

// Question 7
answer = readline.keyInSelect(trueNflase, 'Ces mêmes crevettes sont capables de comprendre et parler le russe ?')
console.log('C\'est faux mais c\'était pour zéro point')

// Résultat
console.log(`Ton score est de ${goodAnswer}/6`)


