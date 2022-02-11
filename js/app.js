console.log(`sanity check`)

// //**  */  Declare deck variables
let wizard1, wizard2
let winner, battlefield, cardStack, wand, tieBattle, endGame, deck, cardsPicked, cardPicked1, cardPicked2
// tieWandClick  ??


//** */ Cached element references
let wiz1Cards = []
let wiz2Cards = []

// let deck-start1 = []
// let deck-start2 = []


let battleCard1 = document.getElementById('deckBF1')
let battleCard2 = document.getElementById('deckBF2')


let wiz1CardsDom = document.getElementById('deck-start1')
let wiz2CardsDom = document.getElementById('deck-start2')
let wandW1 = document.getElementById(btnW1)
let wandW2 = document.getElementById(btnW2)



//** */  Event listeners


document.getElementById('btnW1').addEventListener('click', handleClick1)

document.getElementById('btnW2').addEventListener('click', handleClick2)
// ()=> console.log('clicked')

// handleClickWand (play card to battlefield), 
// handleClickReplay(reset button)
// handleClickCollect
// handleclickStart (choose wizard?)

//** */ Functions

// shuffle 
// split card array into two arrays
// random assortment - half deck - into each
init()
function init() {
  const deck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
  if (deck.length > 0){
    let randIdx = Math.floor(Math.random()*deck.length)
    deck.sort(function(){
      return 0.5 - Math.random()})
    let cardsPicked = deck.splice(0, 26)

    wiz1Cards.push(cardsPicked)
    wiz2Cards.push(deck)
}}

console.log(cardsPicked)
console.log('OG DECK', deck)
console.log('FIRST DECK', wiz1Cards)
console.log('SECOND DECK', wiz2Cards)



// specify sedond deck is 26 in length
// let deck two equal (change name )

// let b = deck.splice(0,26);
// console.log(b)

function handleClick1(){
// to prevent error on click when no cards are left
// when wand is clicked, pick card from wiz_Cards
// play card to battleCard_ 
if (wiz1Cards.length > 0){
      let randIdx = Math.floor(Math.random()*wiz1Cards.length)
      let cardPicked1 = wiz1Cards.splice(randIdx, 1)
      battleCard1.push(cardPicked1)
      render(cardPicked1)
  
}}
console.log(`wz hand 1`, cardPicked1)

function handleClick2() {
// to prevent error on click when no cards are left
// when wand is clicked, pick card from wiz_Cards
// play card to battleCard_ 
if (wiz2Cards.length > 0){
  let randIdx = Math.floor(Math.random()*wiz2Cards.length)
  let cardPicked2 = wiz2Cards.splice(randIdx, 1)
  battleCard2.push(cardPicked2)
  render(cardPicked2)
}}
console.log(`wz hand 2`, cardPicked2)

// function cardPicked1(){
//   // randomly select from card in their own pile
//   renderCompare() 
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


// function renderCompare() {
//   //cards picked by 1 & 2 compaired
//   if (cardPicked2 > cardPicked1){
//     let (cardToRemove = cardPicked1 && cardPicked2)
//     render wiz2Cards.push(cardToRemove)
//   }else if (cardPicked1 > cardPicked2){
//     let (cardToRemove = cardPicked1 && cardPicked2)
//     render wiz2Cards.push(cardToRemove)
//   }else if (cardPicked1 === cardPicked2) {
//     render tiePlay()
//   }
  // if > wins, return message, pull cards to winners pile
  // else if tie, return tie message, render tiePlay function
  // lose(,,,? probably cue victory function)
  // render (init) OR gameState ? might be card picked...
// }


function tiePlay(){
// render tie message
// wiz play 3 cards each, render compare last card
// 
}

function victory(){
// if (wiz1cards === 0 && battleCard1 ===0) {
//   console.log(`${wizard2} is the victor! ${wizard1} died bravely in battle.`)
// }else if (wiz2cards === 0 && battleCard2 ===0 {
//   console.log(`${wizard1} has defeated Voldemort! ${wizard2} died bravely in battleCard1.`)
//   }
}

// function cardToRemove()

//// function init()
// function gameState
// function checkCardsValue()
// function render()
// function winner()
//// function compare()
// //function Tie
// //function Victory
