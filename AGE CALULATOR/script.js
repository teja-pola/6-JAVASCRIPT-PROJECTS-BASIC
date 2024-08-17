const dobIn = document.getElementById("dob");

function ageCalculator(){
    const dob = new Date(dobIn.value);
    const ageInMs = Date.now() - dob.getTime();
    const ageDate = new Date(ageInMs);
    const age = Math.abs(ageDate.getUTCFullYear()- 1970);
    document.getElementById("result").innerHTML = `Your age is  ${age} years.`;

}

document.getElementById("cbutton").addEventListener('click',ageCalculator);