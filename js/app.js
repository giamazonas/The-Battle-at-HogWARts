//**
let keyValues = {
  dA: 1, dQ: 12, dK: 13, dJ: 11, d10: 10, d09: 9, d08: 8, d07: 7, d06: 6, d05: 5, d04: 4, d03: 3, d02: 2, hA: 1, hQ: 12, hK: 13, hJ: 11, h10: 10, h09: 9, h08: 8, h07: 7, h06: 6, h05: 5, h04: 4, h03: 3, h02: 2, cA: 1, cQ:12, cK: 13, cJ: 11, c10: 10, c09: 9, c08: 8, c07: 7, c06: 6, c05: 5, c04: 4, c03: 3,c02: 2, sA: 1, sQ: 12, sK: 13, sJ: 11, s10: 10, s09: 9, s08: 8, s07: 7, s06: 6, s05: 5, s04: 4, s03: 3, s02: 2,
}
const deck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]

//**  */  Declare deck variables

let  cardsPicked, cardPicked1, cardPicked2, card, turn
let wiz1Cards = []
let wiz2Cards = []
let cardToRemove = []
let battleCard1 = []
let battleCard2 = []

//** */ Cached element references

let battleCard1Dom = document.getElementById('deckBF1')
let battleCard2Dom = document.getElementById('deckBF2')
let battlefield = document.querySelectorAll('.battlefield')

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
// tieBtn.addEventListener('click', tiePlay)
gameStatus.textContent = message
gameOverBtn.addEventListener('click', init)

//** */ Functions

init()
function init(){
  message.textContent = `Wands at the ready!`
  gameOverBtn.setAttribute('hidden', true)
  // console.log('init invoked')   
  cardPicked1 = null
  cardPicked2 = null
  shuffle()
  render()
}

function shuffle(){
  if (deck.length > 0){
    let randomIndex = Math.floor(Math.random() * (deck.length))
    deck.sort(function(){
      return 0.5 - Math.random()})
    wiz1Cards = deck.slice(0, 26)
    wiz2Cards = deck.slice(26, 52)
  }
}
// console.log('OG DECK', deck)
console.log('FIRST DECK', wiz1Cards)
console.log('SECOND DECK', wiz2Cards)

function handleClick1() {
  // console.log(`handleClick1`)
  if (wiz1Cards.length > 0){
    // console.log('wiz1Cars', wiz1Cards)
    cardPicked1 = wiz1Cards.pop()
    console.log('cardpickd1', cardPicked1)
    battleCard1.push(cardPicked1)
    console.log(`battleCard1`, battleCard1)
    battleCard1Dom.classList.add(cardPicked1)
  }
  renderCompare()
  gameOverBtn.setAttribute("hidden", true)
}

function handleClick2() { 
  // console.log(`handleClick2`) 
  if (wiz2Cards.length > 0){
    // console.log('wiz2Cars', wiz2Cards)
    cardPicked2 = wiz2Cards.pop()
    console.log(`cardPicked2`, cardPicked2)
    battleCard2.push(cardPicked2)
    console.log(`battleCard2`, battleCard2)
    battleCard2Dom.classList.add(cardPicked2)
  }
  renderCompare()
  gameOverBtn.setAttribute("hidden", true)
}

function renderCompare() {
  if (cardPicked1 === null || cardPicked2 === null) return
  const cardValue1 = keyValues[cardPicked1]
  const cardValue2 = keyValues[cardPicked2]
  console.log(`first cardPicked1`, cardPicked1)
  console.log(`first cardPicked2`, cardPicked2)
  if (cardValue2 > cardValue1){
    let loseCard = battleCard1.pop()
    wiz2Cards.push(loseCard)    
    let winCard = battleCard2.pop()
    wiz2Cards.push(winCard)
    message.textContent = `Draco Malfoy takes the advantage`
    setTimeout(() => (battleCard2Dom.classList.remove(cardPicked2)), 2000)
    setTimeout(() => (battleCard1Dom.classList.remove(cardPicked1)), 2000)
  }
  else if (cardValue1 > cardValue2){
    let loseCard = battleCard2.pop()
    wiz1Cards.push(loseCard)    
    let winCard = battleCard1.pop()
    wiz1Cards.push(winCard)
    message.textContent = `Harry Potter takes the advantage` 
    setTimeout(() => (battleCard2Dom.classList.remove(cardPicked2)), 2000)
    setTimeout(() => (battleCard1Dom.classList.remove(cardPicked1)), 2000)
  }
  else if (cardValue1 === cardValue2) {
    console.log('TIE happens')
    message.textContent = `They parried your spell! Strike again!`
    tiePlay()
  }    
  gameOverBtn.setAttribute("hidden", true)
  // render()
  victory()
}

function tiePlay(){
  let tiePlayCards1 = wiz1Cards.slice(-2)
  battleCard1.push(tiePlayCards1)
  let cardsPicked1 = wiz1Cards.pop()
  battleCard1.push(cardsPicked1)
  console.log(`tieplaycards 1`, tiePlayCards1)
  // console.log(`cardPicked2`, cardPicked2)

  let tiePlayCards2 = wiz2Cards.slice(-2)
  battleCard2.push(tiePlayCards2)
  let cardPicked2 = wiz2Cards.pop()
  battleCard2.push(cardPicked2)
  console.log(`tieplaycards 1`, tiePlayCards2)
  console.log(`cardPicked2`, cardPicked2)
console.log(`compare should start again`)
  // renderCompare()
  }

  function render(){
    if (battleCard1.length > 0){
      battleCard1Dom.classList.remove('back-red')
    }if (battleCard2.length > 0){
      battleCard2Dom.classList.remove('back-red')
    }if (wiz1Cards.length >= 26) {
      wiz1CardsDom.classList.add('shadow')
    }if (wiz2Cards.length >= 26) {
      wiz2CardsDom.classList.add('shadow')
    }if (wiz1Cards.length < 26) {
      wiz1CardsDom.classList.remove('shadow')
    }if (wiz2Cards.length < 26) {
      wiz2CardsDom.classList.remove('shadow')
    }if (wiz1Cards.length === 0){
      wiz1Cards.classList.add('outline')
    }if (wiz2Cards.length === 0){
      wiz2Cards.classList.add('outline')
    }if (battleCard1.length === 0){
      battleCard1Dom.classList.add('outline')
    }if (battleCard2.length === 0){
      battleCard2Dom.classList.add('outline')
    }if (battleCard1.length > 1) {
      battleCard1Dom.classList.add('shadow')
    }if (battleCard2.length > 1) {
      battleCard2Dom.classList.add('shadow')
    }
  }

function victory(){
  if (wiz1Cards.length === 0 && battleCard1.length === 0) {
  return message.textContent `Draco Malfoy is the victor! Harry Potter died bravely in battle.`
  }
  else if (wiz2Cards.length === 0 && battleCard2.length === 0) {
  return message.textContent = `Harry Potter is the victor! Draco Malfoy died bravely in battle.`
  }
  gameOverBtn.removeAttribute('hidden')
}

