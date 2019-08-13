function checkPrime(valNum) {
    let check = false;
    if (valNum < 2) {
        return false;
    } else {
        for (let i = 3; i <= Math.sqrt(valNum); i+=2) {
            if (valNum % i == 0) {
                return false;
            }
        }
        return true;
    }
}
let number = Number(prompt("Enter the number to check"));
if (checkPrime(number)){
    alert(number + "is Prime");
} else {
    alert(number + " not Prime");
}