const countries = ['Finland','Sweden','Denmark','Norway','Iceland']
const names = ['Asebeneh','Mathias','Elias','Brook',]
const numbers = [1,2,3,4,5,6,7,8,9,10]
const products = [
   {product:'banana',price:3},
   {product:'mango',price:6},
   {product:'potato',price:' '},
   {product:'avocado',price:8},
   {product:'coffee',price:10},
   {product:'tea',price:''},
]

// let olke = countries.forEach(function(country){
//    console.log(country);
// })

// let ad = names.forEach(function(name){
//    console.log(name);
// })

// let reqem = numbers.forEach(function(number){
//    console.log(number);
// })

// const olke = countries.map(function(country){
//    console.log(country.toUpperCase());
// })

// countries.map(function(country){
//   console.log(country.length);
// })

// numbers.map(function(square){
//    console.log(square**2);
// })

// names.map(function(name){
//    console.log(name.toUpperCase());
// })

// let price = products.map(function(mehsul){
//     return `${mehsul.product} ${mehsul.price}`
// })
// console.log(price);

// let x = countries.filter(function(soz){
//     return soz.includes('land')
// })
// console.log(x);

// let x = countries.filter(function(country){

//      return `${country.length == 6} && ${country.length == 7}`
// })
// console.log(x);

// let y = names.filter(function(name){
//     return name.startsWith('E')
// })
// console.log(y);


// let z = products.filter(function(product){
//     return product.price
// })
// console.log(z);

// let k = numbers.reduce(function(sum,number){
//     return sum+number 
// })
// console.log(k);

let k = countries.reduce(function(a,b){
    return a+" "+b," "
})
console.log(k);


// 19 yazilmir 


// 20 let a = names.some(function(name){
//     return name.length>7
// })
// console.log(a);

// 21 alinmadi   let b = countries.every(function(country){
//    return country.includes('land')
// })
// console.log(b);


