// Smart script placement
//by wsuits6
//============================================



//selecting  button

const button = document.getElementById("btn");
const para  = document.getElementById("paragraph");

//Creating Event listener Funtion
button.addEventListener("click", () => {
    para.innerText = "Javascript is running";
})
