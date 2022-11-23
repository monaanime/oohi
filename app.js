const clock = document.querySelector(".clock")
const form = document.querySelector(".form")
const inp_text = document.querySelector(".inp_text")
const content = document.querySelector(".content")

// time
setInterval(()=>{
    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds() 
    
    clock.innerHTML = `${hour}:${minute}:${second}`
}, 1000)

form.addEventListener("submit", createBlog)

function createBlog(e){
    e.preventDefault()
    let value = inp_text.value

    // create element
    let box = document.createElement("div")
    let circle = document.createElement("div")
    let desc = document.createElement("p")
    let edit = document.createElement("i")
    let trash = document.createElement("i")
    let time = document.createElement("p")

    // className
    box.className = "box"
    circle.className = "circle"
    desc.className = "desc"
    edit.className = "fa-solid fa-pen-to-square"
    trash.className = "fa-solid fa-trash-can"
    time.className = "time"

    // innerHTML
    circle.innerHTML = value.slice(0,1).toUpperCase()
    desc.textContent = value
    time.innerHTML = "15:43"

    // appendChild
    box.appendChild(circle)
    box.appendChild(desc)
    box.appendChild(edit)
    box.appendChild(trash)
    box.appendChild(time)

    content.appendChild(box)

    // input ni ichidagi qiymatni boshatish
    inp_text.value = ""
}



