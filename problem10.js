// Problem 10: PingPong Challenge
// Write a function that prints numbers from 1 to 20.

const pingPong = (number = 20) => {
    for(let n = 1; n <= number; n++){
        if(n % 3 === 0 && n % 5 === 0){
            console.log('pingPong')
        }
        else if(n % 3 === 0){
            console.log('ping')
        }
        else if(n % 5 === 0){
            console.log('pong')
        }
        else{
            console.log(n);
        }
    }
}

pingPong()