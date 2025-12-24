let ageInput = document.getElementById("age")
let nameInput = document.getElementById("name")
let btn = document.getElementById("btn")

btn.addEventListener("click", handleSubmit)

function handleSubmit(e) {
	// e.preventDefault()
	let age = ageInput.value
	let name = nameInput.value
	let promise = new Promise((resolve,reject) => {
	setTimeout(() => {
		if(age>18){
			resolve(`Welcome, ${name}. You can vote.`)
		}else{
			reject(`Oh sorry ${name}. You aren't old enough.`)
		}
	},4000)
    })
	promise.then(res => alert(res)).catch(err => alert(err))
}


