const addBtn = document.getElementById("addBtn");
const eventList = document.getElementById("eventList");

addBtn.addEventListener("click", function(){

let title = document.getElementById("title").value;
let date = document.getElementById("date").value;
let category = document.getElementById("category").value;
let desc = document.getElementById("desc").value;

if(title === ""){
alert("Enter Event Title");
return;
}

let card = document.createElement("div");
card.classList.add("event-card");

card.innerHTML = `
<span class="delete">❌</span>
<h3>${title}</h3>
<p>${date}</p>
<p>${category}</p>
<p>${desc}</p>
`;

eventList.appendChild(card);

document.getElementById("title").value="";
document.getElementById("date").value="";
document.getElementById("desc").value="";
});

eventList.addEventListener("click", function(e){

if(e.target.classList.contains("delete")){
e.target.parentElement.remove();
}

});