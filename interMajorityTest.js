// Importation des packages
const readline = require('./node_modules/readline-sync')

// Gestion des erreurs
if (process.argv.length !== 3) {
  console.log(`Vous devez ajouter un seul argument, l'age de la majorité dans votre pays\nExemple : node interMajorityTest.js 18`)
  process.exit(1)
}
if (isNaN(process.argv[2])) {
  console.log(`L'argument doit être un chiffre. Vous avez rentré : ${process.argv[2]}`)
  process.exit(1)
}


// Requête des inputs
prenom = readline.question('Veuillez insérer votre prénom : ')
nom = readline.question('Votre nom : ')
age = readline.question('Et votre age : ')


// Vérification des inputs
if (!(isNaN(prenom))) {
  console.log(`Votre prénom : "${prenom}" n'est pas un prénom`)
  process.exit(1)
}
if (!(isNaN(nom))) {
  console.log(`Votre nom : "${nom}" est un chiffre...`)
  process.exit(1)
}
if (isNaN(age)) {
  console.log(`Votre age (${age}) doit être écrit numériquement.`)
  process.exit(1)
}


// Programme
let majority = Number(process.argv[2])
if (age >= majority) {
  console.log(`${nom} ${prenom}, vous êtes majeur, vous pouvez voter.`)
} else {
  console.log(`Désolé ${nom} ${prenom}, vous êtes mineur, vous ne pouvez pas voter.`)
}