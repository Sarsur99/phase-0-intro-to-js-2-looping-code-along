const names = []

function writeCards(names, event) {
    let newArr = []
    for(let i = 0; i < names.length; i++){
    let newEnt = (`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    newArr.push(newEnt)
    }

    return newArr;
}

const countDown = (number) =>{
    while(number >= 0){
        console.log(number--)
    }
}