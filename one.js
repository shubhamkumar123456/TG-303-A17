//  let x = 10;
//         let y = 5;
//         console.log(x+y)


// function xyz(a, b){
//     console.log("hello")
//     console.log(a)
//     console.log(b)
// }

// xyz(10, "hii")

// console.log(xyz)

// Callbak funct --functions that are passed into another function as an argument are known as Callback function

// HOF --> functions that take another function as an  argument are known as HOF

// function A(){
//     console.log("hello")
// }



// function B(d){
//     d()
// }

// B(A)



// console.log("one")
// console.log("two")
// console.log("three")


// console.log("one");

// setTimeout(()=>{
//     console.log("two")
// }, 3000)

// console.log("four")

// dukan pr jana hai   --> 4s
// coldrink  khareeda  --> 2s
// ghar aa gye  -->  3s
// coldrink pee liya  --> 1s

// setTimeout(()=>{
//     console.log("dukan pr jana hai")
// },4000)

// setTimeout(()=>{
//     console.log("coldrink  khareeda")
// },2000)

// setTimeout(()=>{
//     console.log("ghar aa gye")
// },3000)


// setTimeout(()=>{
//     console.log("coldrink pee liya")
// },1000)


//          0          1            2               3
// let arr = ["one" , "three" , {name:"abc",age:45}, [22, 23]]

// console.log(arr[0])
// console.log(arr[2])  //object
// console.log(arr[2].age)

// console.log(arr[3])   //[22, 23]
// console.log(arr[3][1])   // 23




// console.log("one");

// setTimeout(()=>{
//     console.log("two")
// },4000)

// setTimeout(()=>{
//     console.log("three")
// },2000)

// console.log("four")  // one four three two

// event loop --> checks if call stack is empty it pulls the stuff from callback queue and push into the call stack




// function A(two, third ,fourth){
//     console.log("one")
//     two(third, fourth)
// }

// function B(c,d){
//     setTimeout(()=>{
//     console.log("two")
//     c(d)
// },4000)
// }

// function C(d){
//     setTimeout(()=>{
//     console.log("three")
//     d()
// },2000)
// }

// function D(){
//     console.log("four")
// }


// A(B , C ,D)




// EventLoop --> 





// function abc(){
//     console.log("one")
// }


// function second(a , b){
//     b()
// }

// second(10, abc)



// let var const   --> 
// let can not be redeclare but can reassign
// var can be redeclare and reassign
// const can not be redeclare and can not be reassign


// let x = 10;
//     x = 10
//     console.log(x)

// var x = 10;
//  x = 5;
// console.log(x)

// const x = 10;
//     x = 5
//     console.log(x)

// let var and const all are functional scoped ( can not be accessed out side the function)

// let a = [10, 11, "hello"]

function xyz(){
    let x = 10;
    var y = 3;
    const z = 2

    return [x,y,z]
}

let ans = xyz();  //3  , [10, 3, 2]

console.log(ans) //undefined
console.log(ans[1]) // 3