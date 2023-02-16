/** @format */

function character(name, strength, health) {
  this.name = name;
  this.strength = strength;
  this.health = health;
  this.attackBtn = document.getElementById(`${this.name}Attack`);
  this.healthBtn = document.getElementById(`${this.name}Health`);
  this.healthBar = document.getElementById(`${this.name}HealthBar`);

}
character.prototype.heal = function () {
  if (this.health < 100) {
    this.health += 10;
    this.healthBar.style.width =`${ this.health}%`
  }
  if (this.health >= 100) {
    this.health = 100;
  }
};
character.prototype.attack = function (opponent) {
  if (opponent.health > 0) {
    opponent.health -= this.strength;
    opponent.healthBar.style.width = `${opponent.health}%`;
  }
  if (opponent.health <= 0) {
    opponent.health = 0;
    opponent.healthBar.style.width = `${opponent.health}%`;
    console.log(`${opponent.name} lost`);
  }
};
character.prototype.status = function () {
  console.log(`Name = ${this.name}
  Health =${this.health}
  Strength =${this.strength}`);
};


let sasaki = new character("sasaki", 10, 80);
let naroko = new character("naroko", 5, 100);

naroko.attack(sasaki);
sasaki.heal();
sasaki.status();


naroko.attackBtn.addEventListener('click',function () {
  console.log('attaaaaaak');
  naroko.attack(sasaki);
  sasaki.status();
})

naroko.healthBtn.addEventListener('click',function () {
  console.log('heaaaal');
  naroko.heal();
  naroko.status();
})

sasaki.attackBtn.addEventListener('click',function () {
  console.log('attaaaaaak');
  sasaki.attack(naroko);
  naroko.status();
})

sasaki.healthBtn.addEventListener('click',function () {
  console.log('heaaaal');
  sasaki.heal();
  sasaki.status();
})
