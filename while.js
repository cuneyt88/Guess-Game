let num = +prompt("0-100 arası bir sayı giriniz:");

while (num<0 || num>100){
    console.log("sayı 1-100 arası olmalıdır.");
    num=prompt("0-100 arası bir sayı giriniz:");
}

console.log("girdiğiniz not:",num);