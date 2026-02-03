// const para=document.querySelectorAll('.para')
// para.innerText="This is updated paragraph"
// para.style.color="red"
// console.log(para)

// const para=document.getElementsByClassName('para')
// console.log(para)

// const para2=document.querySelector('.para')
// console.log(para2)

// const para3=document.querySelectorAll('.para')
// console.log(para3)

// let arr=[23,45,54,55,2,333,4]
// arr.forEach((ele)=>console.log(ele))

// const para=document.querySelector('para')
// para.textcontent="This is a updated paragraph"
// para.style.color="red"
// console.log(para)

// const container=document.querySelector(".container")
// container.innerHTML="<h1>This is a heading"
// console.log(container)

// const btn=document.querySelector('.submit')
// btn.classList.add("btn")
// btn.classList.remove("btn")
// btn.classList.toggle('btn')

// function print(){
//     console.log("Hello you have clicked the button")
// }

// btn.addEventListener('click', print)
// btn.addEventListener('click', ()=>console.log("Hello you have clicked the btn"))
// btn.removeEventListener('click', print)

// const click=document.querySelector('#click')
// const stop=document.querySelector('#stop')

// function Message(event){
//     console.log(event.key)
//     console.log("Hello you have clicked the button")
// }

// click.addEventListener('keyup', Message)
// stop.addEventListener('click', ()=>{
//     console.log("You have stopped the button")
//     click.removeEventListener('keyup', Message)
// })

// const form=document.querySelector('form')
// form.addEventListener('submit', (event)=>{
//     event.preventDefault()
//     console.log("Form Submitted")
// })

// const div=document.querySelector('.container')
// const div2=document.querySelector('outer')
// const btn=document.querySelector('button')

// div.addEventListener('click', ()=>{console.log("Clicked the div")}, true)
// div2.addEventListener('click', ()=>{console.log("Clicked the outer div")}, true)
// btn.addEventListener('click', ()=>{console.log("Clicked the button")}, true)

// console.log("Hello Everyone")

// console.log(a)
// //console.log(b)

// var a=678
// let b=567

// console.log(a)
// console.log(b)

// function print(){
//     let c=63
//     console.log(c)
//     console.log("Inside fn")
// }

// print()

// greet()
//console.log(message)
//console.log(d)
//debugger


// function first(){
//     Second()
// }

// function second(){
//     third()
// }

// function third(){
//     console.trace()
// }

// first()


// setTimeout(()=>{
//     alert("After 3second")
// }, 3*1000)

// const timerID=setInterval(()=>{
//     console.log("After 3 sec")
// },1000)
// console.log(timerID)
// setTimeout(()=>{
//     clearInterval(timerID)
// }, 10*1000)

// let count=1
// const timerID=setInterval(()=>{
//     if(count===10)clearInterval(timerID)
//     console.log(count)
//     count+=1
// },1000)


// console.log("Before timeout")
// setTimeout(()=>{
//     console.log("Inside timeout")
// },0)
// console.log("After timeout")


// const name=document.querySelector("#name")
// const btn=document.querySelector(".btn")
// const list=document.querySelector(".list")


// btn.addEventListener('click', ()=>{
//     if(name.value==="")return

//     const li=document.createElement('li')
//     const dlt=document.createElement('button')
    
//     dlt.innerText="Delete"
//     li.innerText=name.value;

//     dlt.addEventListener('click', ()=>{
//         list.removeChild(li)
//     })

//     list.appendChild(li)
//     li.appendChild(dlt)
    
//     name.value=""
// })

// console.log("Before timeout")
// setTimeout(()=>{
//     console.log("Inside the timeout")
// },0)
// console.log("After the timeout")

// function greet(callback){         
//     setTimeout(()=>{
//         console.log("Hello Students")
//         callback(45)
//     }, 2000)
// }

// function print(num){      
//     console.log("Total students are",num)
// }

// greet(print)


// console.log("Starting homework.....")

// setTimeout(()=>{
//     console.log("Homework done!")
//     console.log("Starting dinner.....")

//     setTimeout(()=>{
//         console.log("Dinner done!")
//         console.log("Getting ready to go out.....")

//         setTimeout(()=>{
//             console.log("Going to the playground!")
//         }, 1000)
//     }, 1500)
// }, 2000)


function finishHomework(callback){
    console.log("Starting homework.....")
    setTimeout(()=>{
        console.log("Homework done!")
        callback()
    },2000)
}

function eatDinner(callback){
    console.log("Starting dinner.....")
    setTimeout(()=>{
        console.log("Dinner done!")
        callback()
    },1500)
}

function goToPlayground(){
    console.log("Going to the playground")
}

finishHomework(()=>{
    eatDinner(()=>{
        goToPlayground()
    })
})