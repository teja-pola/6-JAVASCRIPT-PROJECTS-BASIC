

function tipCal(){
    
    const tipPercetage = parseFloat(document.getElementById("tip").value);
    const billAmount = parseFloat(document.getElementById("bill").value);
    
    
    const tip = (tipPercetage/100)*billAmount;
    const totalAmount= tip + billAmount;
    
    document.getElementById("totala").innerHTML = `Tip amount : $ ${tip} `;
    document.getElementById("tipa").innerHTML = `Total amount : $ ${totalAmount} `;
}
document.getElementById("calbutton").addEventListener('click',tipCal);