function sayHello(name) {
  return console.log(`Hello ${name}`);
}

function sayGoodbye(name) {
  return console.log(`Goodbye ${name}`);
}

module.exports = {
  sayHello,
  sayGoodbye,
};