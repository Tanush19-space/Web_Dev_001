// console.log(document)
// const para = document.querySelector('p')
// para.innerText = "this is updated end"

// const para=document.getElememtByClassName("para")
// para[0].innerText="This is updated paragraph text"
// para[1].style.color="red"
// console.log(para)

// const para=document.querySelectorAll(".para")
// para[0].innerText="This is updated paragraph text"
// para[1].style.color="red"
// console.log(para);

// let arr= [1,2,3,4,5]
// const newarr= arr.forEach((ele)=>console.log(ele))

// const container=document.querySelector(".container")
// container.innerHTML="<h1>This is a heading<h1>"
// console.log(container)

// const btn=document.querySelector("button");
// btn.classList.add("btn")


// function print(){
//     console.log("Button clicked");
// }
// btn.addEventListener('click',print)
// btn.removeEventListener('click',print)


// function  startTimer(){
//     console.log("Timer Started");
// }

// const btn = document.querySelector(".click");
// btn.addEventListener("click", startTimer);


// function stopTimer(){
//     console.log("Timer Stopped");
//     btn.removeEventListener("click", startTimer);
// }
// const stopBtn = document.querySelector(".stop");
// stopBtn.addEventListener("click", stopTimer);




// const click=document.querySelector(".click")
// const stop=document.querySelector(".stop")

// function message(){
//     console.log("Button Clicked")
    
// }

// click.addEventListener('click',message)
// stop.addEventListener('click',()=>{
//     console.log("stop button clicked!!")
//     click.removeEventListener('click',message)
// })



// const click=document.querySelector(".click")

// function message(event){
//     console.log(event.key)
//     console.log("Button Clicked")
// }

// click.addEventListener('keyup',message)

// const form=document.querySelector("form")
// form.addEventListener('submit',(event)=>{
//     event.preventDefault()
//     console.log("Form Submitted")
// })

// const div=document.querySelector(".container")
// const div2=document.querySelector(".outer")
// const btn=document.querySelector(".button")

// div.addEventListener('click',()=>{ console.log("clicked the div")},false)
// div.addEventListener('click',()=>{ console.log("clicked the outer div")},false)
// div.addEventListener('click',()=>{ console.log("clicked the button")},false)

// js execution context


// console.log(a);
// console.log(b);

// var a = 678;
// let b = 567;

// console.log(a);
// console.log(b);

// function print(){
//     let c=63
//     console.log(c)
//     console.log("inside fn")
// }

// print()


// function greet(){
//     var message="hello"
//     console.log(message)
// }

// greet()
// console.log(message)

// debugger;

// function first(){
//     second()
// }

// function second(){
//     third()
// }

// function third(){
//     console.trace()
// }

// first()

// function infinite(){
//     Infinity()
// }

// infinite()

// console.log(a)
// let a = 10

// console.log("first line")
// setTimeout(()=>{console.log("line after 2 sec")},2000)
// console.log("second line")
// console.log("second line")
// console.log("second line")
// console.log("second line")
// console.log("second line")
// console.log("second line")
// console.log("second line")



// setTimeout(() => {
//     alert("after 3 sec")
// },3*1000);

// const timerId=setInterval(() => {
//     console.log(" after 3 sec")
// },1000);
// console.log(timerId)
// clearInterval()
// setTimeout(() => {
//     clearInterval(timerId)
// },10*1000);

// let count=0;
// const timerid=setInterval(() => {
//     count++;
//     console.log("1 second passed",count);
//     if(count===10){
//         clearInterval(timerid);
//         console.log("interval cleared");
//     }
// }, 1000);

// var hello=1
// const timerId=setInterval(()=>{
//     hello+=1
//     console.log(hello)
// },1000)

// console.log(timerId)
// setTimeout(()=>{
//     clearInterval(timerId)
// },10*1000)


// let count=1

// const timerId=setInterval(()=>{
//     if(count===10)clearInterval(timerId)
//     console.log(count)
//     count+=1
// },1000)

// const name=document.querySelector("#name")
// const btn=document.querySelector(".btn")
// const list=document.querySelector(".list")

// btn.addEventListener('click',()=>{
//     const li=document.createElement('li')
//     li.innerText=name.value
// list.appendChild(li)
// name.value=""
// })


// const name=document.querySelector("#name")
// const btn=document.querySelector(".btn")
// const list=document.querySelector(".list")

// btn.addEventListener("click",()=>{
//     if(name.value==="")return;
//     const li=document.createElement("li")
//     const dlt=document.createElement("button")


//     dlt.innerText="Delete"
//     li.innerText=name.value;
//     dlt.addEventListener("click",()=>{
//         list.removeChild(li)
//     })


//     list.appendChild(li)
//     li.appendChild(dlt)

    
//     name.value=""
// })

// function greet(){
//     console.log("Hello World")
// }

// function print(sample, num){
//     sample()
//     console.log("total students are", num)
// }
// greet()
// print(greet, 45)


// function greet(xyz){
//     setTimeout(()=>{
//     console.log("Hello World")
// },2000)
// xyz(45)
// }

// function print(num){
//     console.log("total students are", num)
// }
// greet(print)



// console.log("starting homework....");
// setTimeout(() => {
//     console.log("Homework done!");
//     console.log("starting dinner...");

//     setTimeout(() => {
//         console.log("dinner done!");
//         console.log("getting ready to go out....");

//         setTimeout(() => {
//             console.log("going to the playground!");
//         }, 1000);             
//     }, 1500);
// }, 2000);




// function finishhomework(callback){
//     console.log("starting homework....");
//     setTimeout(() => {
//         console.log("Homework done!");
//         callback();
//     }, 2000);
// }



// function finishHomework(callback){
//     console.log("starting homework....");
//     setTimeout(() => {
//         console.log("Homework done!");
//         callback();
//     }, 2000);
// }
// function eatDinner(callback){
//     console.log("starting dinner....");
//     setTimeout(() => {
//         console.log("Dinner done!");
//         callback();
//     }, 1500);
// }

// function goToPlayground(){
//     console.log("going to the playground....");
// }
// finishHomework(()=>{
//     eatDinner(()=>{
//         goToPlayground()
//     }); 
// });





// const p=new Promise((res, rej)=>{
//     let done=true
//     setTimeout(()=>{
//         if(done){
//             res("work is done!!")
//         }else{
//             rej("work is not done")
//         }
//     }, 5000);
// })
// // console.log(p)
// p.then((msg)=>{
//     console.log(msg)
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("finally blocked")
// })


// event loop


// function orderFood(){
//     return new Promise((res, rej)=>{
//         setTimeout(()=>{
//             console.log("food ordered")
//             res("food is ready")
//         }, 2000)
//     })
// }

// function prepareFood(){
//     return new Promise((res, rej)=>{
//         setTimeout(()=>{
//             console.log("food prepared")
//             res()
//         }, 2000)
//     })
// }


// function orderDeliver(){
//     return new Promise((res, rej)=>{
//         setTimeout(()=>{
//             console.log("food delivered")
//             res()
//         }, 2000)
//     })
// }


// async function order(){
//     await orderFood()
//     await prepareFood()
//     await orderDeliver()
    
// }

// order()

// async function order(){
//     const data=await orderFood()
//     console.log(data)
//     await prepareFood()
//     await orderDeliver()
    
// }

// order()

// orderFood().then((data)=>{
//     return prepareFood()
// }).then((data)=>{
//     return orderDeliver()
// }).then((data)=>{

// }).catch((err)=>{
//     console.log("something went wrong")
// })

// console.log("first line")
// try{
//     console.log(sample)
//     console.log("line after sample")
// }catch(e){
//     console.log(e)
// }
// console.log("last line")


// console.log("first line")
// console.log(sample)
// console.log("last line")




// console.log("first line")
// try{
    // console.log(sample)
    // console.log("line after sample")
//     let age=16
//     if (age<18){
//         throw new Error("age must be greater than 18")
//     }
// }catch(e){
//     console.warn(e)
// }
// console.log("last line")



// async function getData(){
//     const response=await fetch("https://dummyjson.com/products")
//     const data=await response.json()
//     // console.log(data.products[0].title)
//     data.product.forEach((product)=>{
//         console.log(product.title)
//     })
// }
// getData()


// async function getdata(){

// const response = await fetch("https://dummyjson.com/products")
// const data = await response.json()
// // console.log(data.products[0].title)
// data.products.forEach((product)=>{
//     console.log(product.title)
// })

// }

// getdata()


// async function getdata(){
//     try{
//         const response = await fetch("https://dummyjson.com/products")
//         if(response.ok===false){
//             throw new Error("something went wrong")
//         }
//         const data = await response.json()
//         console.log(data)
//         // console.log(data.products[0].title)
//         data.products.forEach((product)=>{
//             console.log(product.title)
//         })
//     }catch(e){
//         console.log(e)
//     }finally{
//         console.log("finally block")
//     }
// }

// getdata()




// async function getdata(){
//     try{
//         const response = await fetch("https://dummyjson.com/products", {
//             method:"GET",
//         }
//         )
//         if(response.ok===false){
//             throw new Error("something went wrong")
//         }
//         const data = await response.json()
//         console.log(data)
//         // console.log(data.products[0].title)
//         data.products.forEach((product)=>{
//             console.log(product.title)
//         })
//     }catch(e){
//         console.log(e)
//     }finally{
//         console.log("finally block")
//     }
// }

// getdata()









// async function sendData(){
//     const response=await fetch('https://dummyjson.com/products',{
//         method:"POST",
//         headers:{
//             "Content-Type":"application/json"
//     },
//         body:JSON.stringify({
//             title:"test product",
//             description:"this is a new product",
//             price:100,
//             discountPercentage:10,
//             rating:4.5,
//             stock:50,
//             brand:"ABC",
//             category:"Electronics",
//         })
//     })
//     const data=await response.json()
//     console.log(data)
// }
// sendData();





// localStorage.setItem("name","Alex")
// localStorage.setItem("age",45)

// console.log(localStorage.getItem("name"))
// console.log(localStorage.getItem("age"))    

// localStorage.removeItem("name")
// console.log(localStorage.getItem("name"))


// sessionStorage.setItem("name","Alex")
// sessionlStorage.setItem("age",45)

// console.log(sessionStorage.getItem("name"))
// console.log(sessionStorage.getItem("age"))    

// sessionStorage.removeItem("name")
// console.log(sessionStorage.getItem("name"))





// localStorage.setItem("name","Alex")
// localStorage.setItem("age",45)

// console.log(localStorage.getItem("name"))
// console.log(localStorage.getItem("age"))  

// localStorage.setItem("name","John")






// async function sendData() {
//     const response = await fetch("https://dummyjson.com/products", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"  },
//         body: JSON.stringify({
//             title: "new product ",
//             price: 549,
//             description: "this is some new product ", 
//             discountedPercentage: 10,
//             rating: 4.5,
//             stock: 100,
//             brand : "abc ",
//             category: "elecronics ",
            
//         })
//     })
//     const data = await response.json();
//     console.log(data);
// }
// localStorage.setItem ("Name ", "Alex ")
// localStorage.setItem("Age ", 23);

// console.log(localStorage.getItem("Name "));
// console.log(localStorage.getItem("Age "));

// localStorage.removeItem("Name ");
// console.log(localStorage.getItem("Name "));
 
// localStorage.setItem("Name ", "John");












// document.cookie="name=Alex; expires=Fri, 23 Dec 2026 23:59:59 GMT"
// document.cookie="age=45; expires=Fri, 25 Dec 2026 23:59:59 GMT"

// console.log(document.cookie)



// function* generator(){
    // yield 1;
    // yield 2;
    // yield 3;
//     let index=225017343
//     while(true){
//         yield index;
//         index++
//     }
// }
// const gen=generator()
// console.log(gen)
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())


// #important


// function add(x){
//     return function(y){
//         return function(z){
//             return x+y+z
//         }
//     }
// }

// const first = add(1)
// console.log(first)
// const second = first(2)
// console.log(second)
// console.log(second(3))

// console.log(add(1)(2)(3))

// console.log(add(1,2))