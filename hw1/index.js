// Задача 1

const minNum2 = Math.min.apply(null, arr)
console.log(minNum2);

//  Задача 2
function createCounter() {
    let count = 0
    return obj = {
        increment: function (){
            count++
            console.log(count);
        },
        decrement: function(){
            count--
            console.log(count);
        }
    }
}
const someVar = createCounter()
someVar.increment()
someVar.decrement()

// Задача 3
const factorial2 = (n) => {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial2(n - 1);
    }
}

const getAnswer = factorial2(5);
console.log(getAnswer);