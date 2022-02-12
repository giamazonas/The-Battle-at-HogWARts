// //**  */  Declare deck variables
let wizard1, wizard2
let winner, battlefield, wand, endGame,  cardsPicked, cardPicked1, cardPicked2
// tieWandClick  ??

//** */ Cached element references


let keyValues = {
  dA: 1, dQ: 12, dK: 13, dJ: 11, d10: 10, d09: 9, d08: 8, d07: 7, d06: 6, d05: 5, d04: 4, d03: 3, d02: 2, hA: 1, hQ: 12, hK: 13, hJ: 11, h10: 10, h09: 9, h08: 8, h07: 7, h06: 6, h05: 5, h04: 4, h03: 3, h02: 2, cA: 1, cQ:12, cK: 13, cJ: 11, c10: 10, c09: 9, c08: 8, c07: 7, c06: 6, c05: 5, c04: 4, c03: 3,c02: 2, sA: 1, sQ: 12, sK: 13, sJ: 11, s10: 10, s09: 9, s08: 8, s07: 7, s06: 6, s05: 5, s04: 4, s03: 3, s02: 2,
}
const deck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]


let wiz1Cards = []
let wiz2Cards = []
let cardToRemove = []
let battleCard1 = []
let battleCard2 = []

let battleCard1Dom = document.getElementById('deckBF1')
let battleCard2Dom = document.getElementById('deckBF2')

let wiz1CardsDom = document.getElementById('deck-start1')
let wiz2CardsDom = document.getElementById('deck-start2')
let wandW1 = document.getElementById(btnW1)
let wandW2 = document.getElementById(btnW2)
const tieBtn = document.querySelector('#tieBtn')
const gameStatus = document.querySelector('#message')
gameStatus.textContent = message


//** */  Event listeners
document.getElementById('btnW1').addEventListener('click', handleClick1)
document.getElementById('btnW2').addEventListener('click', handleClick2)
tieBtn.addEventListener('click', tiePlay)

// handleClickWand (play card to battlefield), 
// handleClickReplay(reset button)
// handleClickCollect
// handleclickStart (choose wizard?)

//** */ Functions


init()
function init(){
  let wiz1CardsDom = wiz1Cards
  let wiz2CardsDom = wiz2Cards
  let battleCard1Dom = battleCard1 
  let battleCard2Dom = battleCard2

  if (deck.length > 0){
    let randomIndex = Math.floor(Math.random() * (deck.length))
    deck.sort(function(){
      return 0.5 - Math.random()})
    let cardsPicked = deck.splice(0, 26)

    wiz1Cards.push(cardsPicked)
    wiz2Cards.push(deck)
    message.textContent = `Wands at the ready!`

    handleClick1()
    handleClick2()
  }
}

console.log(cardsPicked)
console.log('OG DECK', deck)
console.log('FIRST DECK', wiz1Cards)
console.log('SECOND DECK', wiz2Cards)


// function render(){
//   // console.log(cardPicked)
//   if (wiz1Cards.length > 1){
//     battleCard1.classList.remove(cardToRemove)
//   }
//   battleCard1.classList.add(cardPicked)
//   if (wiz1Cards.length >= 26) {
//     battleCard1.classList.add('shadow')
//     battleCard2.remove('shadow')
//   }
//   if (wiz2Cards.length >= 26) {
//     battleCard2.classList.add('shadow')
//     battleCard1.remove('shadow')
//   }
//   if (wiz2Cards.length === 0){
//     wiz2Cards.classList.add('outline')

//   }
// }
// turn function???
// specify sedond deck is 26 in length
// let deck two equal (change name )
// let b = deck.splice(0,26);
// console.log(b)

function handleClick1(event){
// to prevent error on click when no cards are left
// when wand is clicked, pick card from wiz_Cards
// play card to battleCard_ 
if (wiz1Cards.length > 0){
  let randomIndex = Math.floor(Math.random() * (wiz1Cards.length))
  let cardPicked1 = wiz1Cards.splice(randomIndex, 1)
  battleCard1.push(cardPicked1)
}  else if(
  wiz2Cards.length === 0){
    return victory()
  }
  // render()
  renderCompare()
}
console.log(`card picked 1`, cardPicked1)

function handleClick2() { 
  if (wiz2Cards.length > 0){
  let randomIndex = Math.floor(Math.random()* (wiz2Cards.length))
    let cardPicked2 = wiz2Cards.splice(randomIndex, 1)
    battleCard2.push(cardPicked2)
  // render(cardPicked2)
  }
  else if(
    wiz2Cards.length === 0){
      return victory()
    }
  // render()
  renderCompare()
}
console.log(`card picked 2`, cardPicked2)



function renderCompare() {
  const cardValue1 = keyValues[cardPicked1]
  const cardValue2 = keyValues[cardPicked2]
  if (cardValue2 > cardValue1){
    console.log
    let (cardToRemove = cardPicked1 && cardPicked2)
    return wiz2Cards.push(cardToRemove)
    return message.textContent = `${wizard2} takes the advantage`
    tieBtn.setAttribute("hidden", true)
  }
  else if (cardValue1 > cardValue2){
    let (cardToRemove = cardPicked1 && cardPicked2)
    return wiz1Cards.push(cardToRemove)
    message.textContent = `${wizard1} takes the advantage`
    tieBtn.setAttribute("hidden", true)
  }else if (cardValue1 === cardValue2) {
    message.textContent = `They parried your spell! Strike again!`
    return tiePlay()
  }
  render()
}
// comment to add and check push functionality

function tiePlay(){
  // hidden button appears?  
  // plays three cards, two face down, one up
  // renderCompare()
  battleCard1.push(cardPicked1)
  battleCard2.push(cardPicked2)
  
  tieBtn.removeAttribute("hidden")
  // tie button appears, message Book of Spells (property of the half-blood prince)
  // tie button plays three cards???  
  
  // message.textContent = `Get up, dust yourself off. It's not over yet.`
  // render()
}

function victory(){
// if (wiz1cards === 0 && battleCard1 ===0) {
//   message.textContent `${wizard2} is the victor! ${wizard1} died bravely in battle.`
// }else if (wiz2cards === 0 && battleCard2 ===0 {
//   message.textContent = `${wizard1} has defeated the Dementors! ${wizard2} died bravely in battle.`
//   }
}


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
