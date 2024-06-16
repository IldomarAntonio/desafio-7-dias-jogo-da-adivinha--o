let targetNumber = Math.floor(Math.random() * 11);
let attempts = 3;

function makeGuess() {
    let guess = parseInt(document.getElementById('guessInput').value);
    let messageElement = document.getElementById('message');

    if (isNaN(guess) || guess < 0 || guess > 10) {
        messageElement.textContent = 'Por favor, insira um número válido entre 0 e 10.';
        return;
    }

    attempts--;

    if (guess === targetNumber) {
        messageElement.textContent = 'Parabéns! Você acertou!';
        disableGame();
    } else if (attempts > 0) {
        messageElement.textContent = `Errado! Você tem mais ${attempts} tentativa(s).`;
    } else {
        messageElement.textContent = `Você não acertou. O número era ${targetNumber}.`;
        disableGame();
    }
}

function disableGame() {
    document.getElementById('guessInput').disabled = true;
    document.querySelector('button').disabled = true;
}
