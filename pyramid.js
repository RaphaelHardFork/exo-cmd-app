// Gestion des erreurs
if (process.argv.length < 4 || process.argv.length > 5) {
  console.log(`usage: node pyramid.js pyramidBaseNumber displayedCharacter option`)
  console.log('You can add the option -r after the displayedCharacter to draw a reversed pyramid.')
  process.exit(1)
}

if (isNaN(process.argv[2])) {
  console.log(`pyramidBaseNumber (${process.argv[2]}) must be a number`)
}
if (process.argv[3].length !== 1) {
  console.log(`displayedCharacter (${process.argv[3]}) must be one character\n`)
  process.exit(1)
}
if (process.argv.length === 5) {
  if (process.argv[4] !== '-r') {
    console.log('To reverse the pyramid, input a -r after the displayedCharacter argument')
    process.exit(1)
  }
}


let baseNumber = Number(process.argv[2])

if (process.argv.length === 4) {
  for (let i = 1; i <= process.argv[2]; i++) {
    console.log(`${process.argv[3]}`.repeat(i))
  }
} else {
  for (let i = process.argv[2]; i >= 0; i--) {
    console.log(`${process.argv[3]}`.repeat(i))
  }
}