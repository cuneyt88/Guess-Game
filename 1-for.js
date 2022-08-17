//**LOOPS */

// console.log("*********FOR*********");

// let n = +prompt("Enter a number:");
// let sum = 0;
// for ( let i = 1 ; i <= n ; i++){
//     sum += i;
// }
// console.log(sum);

// for (let i =1; i<=10; i++){
//     const rastgele = Math.floor(Math.random() * 100);
//     console.log(rastgele);
// }

//**FOR */

const num = +prompt("Pozitif bir sayı giriniz:");
let asal = true;
if (num<=1){
    alert("sayı 1'den büyük olmalıdır.")
}else{
    for(let i=2; i<num;i++){
        if(num%i===0){
            asal= false;
            break;
        }
    }
    const sonuc = asal === true? "ASALDIR":"ASAL DEĞİLDİR";
    console.log(`${num} ${sonuc}`);
}




