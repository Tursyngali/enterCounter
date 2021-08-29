// document.getElementById("count-el").innerText=5

let count=0
let saveEl=document.getElementById('save-el')
let countEl=document.getElementById("count-el")

function increment(){
	console.log("clicked")
	count++
	countEl.textContent=count


}

function save(){
	let countString=count+" - "
	saveEl.textContent+=countString
	countEl.textContent=0
	count=0
}

