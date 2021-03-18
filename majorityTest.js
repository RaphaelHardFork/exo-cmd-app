// Importation des packages
const readline = require('./node_modules/readline-sync')


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
if (age >= 18) {
  console.log(`${nom} ${prenom}, vous êtes majeur, vous pouvez voter.`)
} else {
  console.log(`Désolé ${nom} ${prenom}, vous êtes mineur, vous ne pouvez pas voter.`)
}
