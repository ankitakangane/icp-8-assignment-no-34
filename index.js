//largest number
let result = [99 , 56 , 70 , 95 ];

let largest = result[0];

for(const num of result){
    if(num>largest){
        largest=num;
    }
}
console.log(`Largest Result:${largest}`);

//sum of odd number
let numbers = [99 , 56 , 70 , 95 ];

let sum = 0;

for(let i=0;i<numbers.length;i++){

    if(numbers[i]%2==1){
        sum += numbers[i];
    }
}
console.log(`SUM:${sum}`)

//say hello to all element

const name = [
    "Ankita",
    "Sachin",
    "Yash",
    "Nikita",
    "Sejal",
    "Pooja"
]

for(let i = 0;i<name.length;i++){
    console.log(`Hello ${name[i]}`)
}







