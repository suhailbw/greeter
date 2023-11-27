/**
 * Create a function that generates 10 random greet messages
 * and prints them to the console with a line break between each message.
 */
function randomGreetMessageGenerator() {
    const greetMessages = [
        'Hello',
        'Hi',
        'Hey',
        'Howdy',
        'Hola',
        'Bonjour',
        'Ciao',
        'Guten Tag',
        'Namaste',
        'Salaam'
    ];

    for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * greetMessages.length);
        console.log(greetMessages[randomIndex]);
    }
}

randomGreetMessageGenerator();