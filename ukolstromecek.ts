const maxColors: number = 5;
const treeSize: number = 10;
let duplicate: number = 1;



for (let dioda = 0; dioda <= treeSize ; dioda++ ) {
    
    let color: number = (dioda % maxColors) + 1;

    for(let y: number = 1; y <= duplicate; y++ ) {
       console.log(color)
    }

duplicate += 1
    
}





