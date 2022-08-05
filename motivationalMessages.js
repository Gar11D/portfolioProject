//motivational messages
const message = ["If your dreams don't scare you, they are not big enough", 
'When life gives you lemons, make lemonade',
"You can't have a rainbow without the rain",
"If it doesn't challenge you, it won't change you",
"You are confined only by the walls you build yourself",
"Discipline is doing what needs to be done, even if you don't want to",
"Work while they sleep. Learn while they party. Save while they spend. Live like they dream",
"You become who you spend your time with",
"Be stubborn about your goals and flexible about your methods",
"Hard work beats talent when talent doesn't work hard",
"Work until your idols become your rivals"
]

// Pick words
//const randomMessage = message[ Math.floor(Math.random() * message.length) ]

// Function to generate a random sentence
function generateRandomMessage () {
    let randomMessage = message[ Math.floor(Math.random() * message.length) ];
    let randomSentence = `${randomMessage}.`;
    document.getElementById('demo').innerHTML = randomSentence;
}

console.log(generateRandomMessage())