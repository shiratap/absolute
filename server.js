'use strict';

//App depends
const express = require('express');
// const pg = require('pg');
const PORT = process.env.PORT || 3000;
require('dotenv').config();
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('./public'));

//Route handlers
app.get('/', setupGame);
app.post('/fight/:floor', fightScene);
app.get('*', (request,response) => response.send('Routing to the wrong place brother'))



//Constructor functions
function Character(data){
  this.name = data.name;
  this.health = 15;
  this.attack = data.attack? data.attack + 2: 2;
  this.def = data.def? data.def + 0: 0;
  this.speed = data.speed? data.speed + 2: 15;
  this.dodge = this.speed * 2;
  this.accuracy = data.accuracy? data.accuracy + 75: 75;
  this.res = data.res? data.res + 0: 0;
  this.luck = 0;
  this.movement = 5;
  // this.weapon;
  // this.armor;
}

function Equipment(object){
  this.type = object.type;
  this.attack = 10;
  this.speed = 5;
  this.accuracy = 10;
  // this.def;
  // this.res;
}


//Page load gameplay
function setupGame(request,response){
  let weapon = new Equipment({type:'sword'})
  console.log({name:'Spencer', object:weapon})
  let player = new Character({name:'Spencer', attack:weapon.attack,speed:weapon.speed, accuracy:weapon.accuracy})
  let opponent = new Character({name:'Swordsman'})
  response.render('index', {char:player, char2:opponent});
}

function fightScene(request, response){
  combat()
}


function combat(char1, char2){

}


app.listen(PORT, () => console.log(`Listening on ${PORT}`));
