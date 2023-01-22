//Задание 4


function Appliance(name, power){
  this.name = name,
  this.power = power,
  this.connected = false
  }

Appliance.prototype.plugIn = function() {
  console.log(this.name + " is connected!");
  this.connected = true
}

Appliance.prototype.getPowerInput = function() {
  return this.connected ? this.power : 0;
}

Appliance.prototype.plugOff = function() {
  console.log(this.name + "  is turned off!");
  this.connected = false;
}

const lamp = new Appliance('lamp', 40);
const hairdryer = new Appliance('hairdryer', 1200);

console.log(lamp.getPowerInput() + hairdryer.getPowerInput());

lamp.plugIn();
console.log(lamp.getPowerInput() + hairdryer.getPowerInput());

hairdryer.plugIn();
console.log(lamp.getPowerInput() + hairdryer.getPowerInput())

hairdryer.plugIn();
console.log(lamp.getPowerInput() + hairdryer.getPowerInput());
