function shout(string) {
    let saludo = "hello";
    return saludo.toUpperCase();
}

function whisper(string) {
    let saludo = "HELLO";
    return saludo.toLowerCase();
}

function logShout(string) {
    let saludo = "hello";
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    let saludo = "HELLO";
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
if (string === 'hello')
    return "I can't hear you!"

else if (string === 'HELLO')
    return "YES INDEED!"

else if (string === "Let's have dinner together!")
    return "I would love to!"
}