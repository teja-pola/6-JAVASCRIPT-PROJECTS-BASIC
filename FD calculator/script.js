function calculateResult(){
    const principle = parseFloat(document.getElementById('principle').value);
    const interest = parseFloat(document.getElementById('interest').value);
    const time = parseFloat(document.getElementById('time').value);

    const maturityAmount = (principle*time*interest)/100;
    document.getElementById('result').innerText = `Maturity amount : ${maturityAmount.toFixed(2)}`;

}

document.getElementById('calbutton').addEventListener('click',calculateResult);
