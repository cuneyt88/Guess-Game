//* 1- hak =5
//* 2- Let take a number from mind (0-100)
//* 3- Want a guess from user (guess)
//* 4- hak=hak-1
//* 5- if (gue =?randomn)
//*        print(YESS)
//*    değilse (gue < random)
//*        print(decrease)
//*    değilse(gue > random)
//*        print(decrease)
//* 6- if (hak > 0 )
//*       goto stage-3
//*   if not
//*       print( sorry:( )

let hak = 5;
const random= Math.round(Math.random() * 100);
console.log(random);
let gue;

do{
    gue = +prompt("Please enter a number between 0-100:")
    hak-=1;
    if(gue === random){
        console.log(`yess, you found it ${5 - hak}. time!`);
        break;
    }else if(gue<random){
        console.log("INCREASE⬆");
    }else{
        console.log("DECREASE⬇");
    }
}while(hak>0);
if(gue !== random){
    console.log("sorry, you lose the game😢");
}

