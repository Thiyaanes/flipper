document.getElementById('flipBtn').addEventListener('click', function() {
    const points = parseInt(document.getElementById('points').value);
    const choice = document.getElementById('choice').value;
    const walletElement = document.getElementById('wallet');
    let wallet = parseInt(walletElement.innerText);
    
    if (points > wallet) {
        alert("You don't have enough points!");
        return;
    }

    // Flip the coin
    const result = Math.random() < 0.5 ? 'heads' : 'tails';
    const coin = document.getElementById('coin');
    coin.style.transform = 'rotateY(9720deg)';
    
    setTimeout(() => {
        coin.style.transform = 'rotateY(0deg)';
        
        if (result === 'heads') {
            coin.src = "head.jpg"; 
        } else {
            coin.src = "tail.jpg"; 
        }
        let resultText = "";
        if (result === choice) {
            wallet += 10;
            resultText = `You won! ${result.toUpperCase()} 10 points for your wallet`;
        } else {
            wallet -= 10;
            resultText = `You lost! ${result.toUpperCase()} -10 points for your wallet`;
        }

        walletElement.innerText = wallet;
        document.getElementById('resultText').innerText = resultText;

    }, 1000);
});
