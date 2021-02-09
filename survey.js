const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let name;
let activity;
let music;
let food;
let meal;
let sport;
let superPower;

rl.question('What\'s your name? ', (answer) => {
  
  name = answer;
  console.log(`Thank you, ${name}.`);
  rl.question('What is an activity you like doing? ', (answer) => {
    activity = answer;

    rl.question('What do you listen to while doing that? ', (answer) => {
      music = answer;

      rl.question('Which meal is your favourite? ', (answer) => {
        meal = answer;

        rl.question('What is your favourite thing to eat for that meal? ', (answer) => {
          food = answer;

          rl.question('Which sport is your favourite? ', (answer) => {
            sport = answer;

            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              superPower = answer;

              process.stdout.write(`${name} loves listening to ${music} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superPower}.\n`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
