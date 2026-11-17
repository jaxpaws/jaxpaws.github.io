const listOfRoles = [
    'software engineer',
    'automation specialist',
    'full-stack developer',
    'web developer'
];

const makeCounter = (startingIndex) => {
    return () => {
        console.log('another');
        if (startingIndex === -1) {
            startingIndex = 3;
        }
        document.getElementById('role').innerText = listOfRoles[startingIndex];
        startingIndex--;
    }
}

setInterval(makeCounter(3), 1000 * 2);