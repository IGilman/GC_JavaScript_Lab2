const randomDamage = _ => Math.floor(Math.random() * 10) + 1;
//local test
// console.log(randomDamage());

const chooseOption = (opt1, opt2) => {
    let randNum = Math.floor((Math.random() * 2));
    return (randNum === 0 ? opt1 : opt2);
}
// local test
// console.log(chooseOption("test", "idk"));

const attackPlayer = function (health) {
    return health - randomDamage();
}
const logHealth = (player, health) => {
    console.log(`${player} Health: ${health}`);
}
// local test
// logHealth("Isaac", 50);

const logDeath = (winner, loser) => {
    console.log(`${winner} defeated ${loser}`);
}
// local test
// logDeath("Isaac", "John");

const isDead = (health) => {
    return (health <= 0 ? true : false);
}
// local test
//console.log(isDead(0));

function fight(player1, player2, player1Health, player2Health) {
    while (true) {
        let attacker = chooseOption(player1, player2);
        if (attacker === player1) {
            player2Health = attackPlayer(player2Health);
            logHealth(player2, player2Health);
            if (isDead(player2Health)) {
                logDeath(player1, player2);
                break;
            }
        }
        else {
            player1Health = attackPlayer(player1Health);
            logHealth(player1, player1Health);
            if (isDead(player1Health)) {
                logDeath(player2, player1);
                break;
            }
        }
    }
}
fight("Isaac", "Phil", 100, 100);






