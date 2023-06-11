const characterRoster = [ //create an array
    ['Ralsei', 'Kris', 'Susie'],
    ['Ralph', 'Felix', 'Candy'],
    ['Misty', 'Surge', 'Brock', 'Giovanni']
]

for (let i = 0; i < characterRoster.length; i++) {
    const game = characterRoster[i];
    console.log(`GAME #${i + 1}`)  //we add 1 here since our index starts at 0 and we want to refer to the first section as game #1
    for (let j = 0; j < game.length; j++) {
        console.log(game[j]) //this will print out each character within the row separately vs altogether.  This is one way nesting is applicable as it allows us to iterate the inner loop over and over again depending on the iterations of the outer loops. 
    }
}
