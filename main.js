// const inputElement = document.querySelector(".input")
// const button = document.querySelector(".btn")

// inputElement.addEventListener("keyup", event => {
//     console.log(event);
// })


// window.addEventListener("online", event => {

// })

// window.addEventListener("offline", event => {
//     console.log(event);
// })

// inputElement.addEventListener("select", event => {
//     console.log(event);
// })

const formElement = document.querySelector("form")
const focuseElement = document.querySelector("#focuse")


formElement.addEventListener("submit", event => {
    console.log(event);
    event.preventDefault();
    document.body.style.background = "red"
})

focuseElement.addEventListener('focus', event =>{
    console.log(event);
})



addEventListener("beforeunload", event => {
    event.preventDefault();
    return event.returnValue = "Iltimos chiqib ketmang"
})