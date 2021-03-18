// Gestion des erreurs
if (process.argv.length !== 3) {
  console.log(`usage: node sayMyName.js yourName`)
  console.log(`if your name includes a space use that way: node sayMyName.js "your Name"\n`)
  process.exit(1)
}

console.log(`My name is ${process.argv[2]}`)