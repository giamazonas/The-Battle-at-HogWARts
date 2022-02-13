//**
let keyValues = {
  dA: 1, dQ: 12, dK: 13, dJ: 11, d10: 10, d09: 9, d08: 8, d07: 7, d06: 6, d05: 5, d04: 4, d03: 3, d02: 2, hA: 1, hQ: 12, hK: 13, hJ: 11, h10: 10, h09: 9, h08: 8, h07: 7, h06: 6, h05: 5, h04: 4, h03: 3, h02: 2, cA: 1, cQ:12, cK: 13, cJ: 11, c10: 10, c09: 9, c08: 8, c07: 7, c06: 6, c05: 5, c04: 4, c03: 3,c02: 2, sA: 1, sQ: 12, sK: 13, sJ: 11, s10: 10, s09: 9, s08: 8, s07: 7, s06: 6, s05: 5, s04: 4, s03: 3, s02: 2,
}
const deck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]

//**  */  Declare deck variables
let wizard1, wizard2
let winner, battlefield, wand, endGame, cardsPicked, cardPicked1, cardPicked2, card

//** */ Cached element references
let wiz1Cards = []
let wiz2Cards = []
let cardToRemove = []

let battleCard1 = document.getElementById('deckBF1')
let battleCard2 = document.getElementById('deckBF2')

let wiz1CardsDom = document.getElementById('deck-start1')
let wiz2CardsDom = document.getElementById('deck-start2')
// let wandW1 = document.getElementById('btnW1')
// let wandW2 = document.getElementById('btnW2')
const tieBtn = document.querySelector('#tieBtn')
const gameStatus = document.querySelector('#message')
const gameOverBtn = document.querySelector('#gameOverBtn')

//** */  Event listeners
document.getElementById('deck-start1').addEventListener('click', handleClick1)
document.getElementById('deck-start2').addEventListener('click', handleClick2)
tieBtn.addEventListener('click', tiePlay)
gameStatus.textContent = message
gameOverBtn.addEventListener('click', init)


// console.log(btnW1)
// console.log(btnW2)
// console.log(tieBtn)
// console.log(gameOverBtn)

//** */ Functions

init()
function init(){
  if (deck.length > 0){
    let randomIndex = Math.floor(Math.random() * (deck.length))
    deck.sort(function(){
      return 0.5 - Math.random()})
    let wiz1Cards = deck.slice(0, 26)
    let wiz2Cards = deck.slice(26, 52)
    console.log(wiz1Cards)
    console.log(wiz2Cards)
    message.textContent = `Wands at the ready!`
    gameOverBtn.setAttribute('hidden', true)

  // gamePlay()
  }
}
// console.log('OG DECK', deck)
// console.log('FIRST DECK', wiz1Cards)
// console.log('SECOND DECK', wiz2Cards)


function handleClick1(){
  let battleCard1 = []
  if (deck.length > 0){
  // let randomIndex = Math.floor(Math.random() * (wiz1Cards.length))
  // console.log(wiz1Cards)
  let cardPicked1 = deck.pop()
    battleCard1.push(cardPicked1)
    console.log(battleCard1)
    renderCompare()
  console.log(`CARDPICKED1`, cardPicked1)

  }  
}

function handleClick2(event) { 
  let battleCard2 = []
  if (wiz2Cards.length > 0){
  // let randomIndex = Math.floor(Math.random() * (wiz2Cards.length))
    let cardPicked2 = wiz2Cards.pop()
      console.log(`CARDPICKED2`, cardPicked2)
    // battleCard2.push(cardPicked2)
  // render(cardPicked2)
  }
  renderCompare()
}

function renderCompare() {
  const cardValue1 = keyValues[cardPicked1]
  const cardValue2 = keyValues[cardPicked2]
  if (cardValue2 > cardValue1){
    // console.log
    let (cardToRemove = cardPicked1 && cardPicked2)
    wiz2Cards.push(cardToRemove)
    message.textContent = `${wizard2} takes the advantage`
    tieBtn.setAttribute("hidden", true)
    gamePlay()
  }
  else if (cardValue1 > cardValue2){
    let (cardToRemove = cardPicked1 && cardPicked2)
    deck.push(cardToRemove)
    message.textContent = `${wizard1} takes the advantage`
    tieBtn.setAttribute("hidden", true)
    gamePlay()
  }else if (cardValue1 === cardValue2) {
    message.textContent = `They parried your spell! Strike again!`
    tiePlay()
  }
  // render()
}
// comment to add and check push functionality

function tiePlay(){
  //** play two cards face down 
  //** play one card face up aka card picked 1 & 2   */
}

function victory(){
if (deck.length === 0 && battleCard1.length === 0) {
  return message.textContent `${wizard2} is the victor! ${wizard1} died bravely in battle.`
  }else if (wiz2cards.length === 0 && battleCard2.length === 0) {
  return message.textContent = `${wizard1} is the victor! ${wizard2} died bravely in battle.`
  }
  // gameOverBtn.removeAttribute('hidden')
}

///** decide on language for victory message */


//***  TIE PLAY  */
//extra
  // renderCompare()
//   // hidden button appears?  
//   // plays three cards, two face down, one up
//   // renderCompare()
//   tieBtn.removeAttribute("hidden")

//   // tie button appears, message Book of Spells (property of the half-blood prince)
//   // tie button plays three cards???  
//   battleCard1.push(cardPicked1)
//   battleCard2.push(cardPicked2)

//   return message.textContent = `Get up, dust yourself off. It's not over yet.`
//   render()
// }






// function cardToRemove()

// function cardPicked1(){
//   // randomly select from card in their own pile
  // renderCompare() 
//   //assign card with random index to a variable
//   //add card picked to battleCard area
//   //pass card to renderCompare function to display
// }
// function cardPicked2(){
//   // randomly select from card in their own pile
//   renderCompare() 
//   //assign card with random index to a variable
//   //add card picked to battleCard area
//   //pass card to renderCompare function to display
// }

//// function init()
// function gameState
// function checkCardsValue()
// function render()
// function winner()
//// function compare()
// //function Tie
// //function Victory


// function gamePlay(){
  // message.textContent = `Wands at the ready!`
  // handleClick1()
  // handleClick2()
// }


// function render(){
  // console.log(cardPicked)
  // if (wiz1Cards.length > 1){
  //   battleCard1.classList.remove(cardToRemove)
  // }
  // battleCard1.classList.add(cardPicked)
  // if (wiz1Cards.length >= 26) {
  //   battleCard1.classList.add('shadow')
  //   battleCard2.remove('shadow')
  // }
  // if (wiz2Cards.length >= 26) {
  //   battleCard2.classList.add('shadow')
  //   battleCard1.remove('shadow')
  // }
  // if (wiz2Cards.length === 0){
  //   wiz2Cards.classList.add('outline')

  // }
// }