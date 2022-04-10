const body = document.body
const p = document.createElement("p")
p.innerHTML = "Hey I'm red"
const h3 = document.createElement("h3")
h3.innerHTML = "I’m a blue h3!"
const div = document.createElement("div")
div.innerHTML = ""
const h1 = document.createElement("h1")
h1.innerHTML = "I’m in a div"
const p1 = document.createElement("p1")
p1.innerHTML = "ME TOO!"
body.append(p)
body.append(h3)
body.append(div)
body.append(h1)
body.append(p1)
