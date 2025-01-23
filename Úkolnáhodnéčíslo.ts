type RandIntType = (min: number, max: number) => number;

const randint:RandIntType = (min: number, max: number) => {
    return min + Math.round((Math.random() * max - min));
}

const mysecret: number = randint(1, 10);

let int: number = 0

let pokus: number = 0

while(int !== mysecret){
    int = Number(prompt("Napiš číslo od 1 do 10."))
    pokus += 1
    if(Number.isNaN(int)){
       console.log("Nezadal si číslo!")
    }
    if(int === mysecret){
        console.log("Správně! Uhodl jsi číslo " + mysecret)
        console.log("Trefil jsi ho na " + pokus + " pokus")
    } else {
        if(int > mysecret){
            console.log("Míň")
    } 
    else { console.log("Více") }
 }

}