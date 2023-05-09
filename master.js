const links= Array.from(document.querySelectorAll(".header .links ul li"));
let gmail= document.querySelector("#email");
let gmailRegex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;
// console.log(gmail);

links.forEach((link) =>{
    link.addEventListener("click",function(e){
      /*console.log(e.target.textContent);*/
      document.querySelector(`.${e.target.textContent}`).scrollIntoView({
        behavior : "smooth",
        block :"start",
      });
    });
});

function reset() {
    formInputs= Array.from(document.getElementById("contactme").children);
    formInputs.forEach((input) => {
    input.classList.contains("submit")? false: input.value= "";
    });
}
document.getElementById("contactme").onsubmit=function (e) {
    e.preventDefault();
    // check for email is validat or not
    if(gmailRegex.test(gmail.value) ){
       sendEmail();
       reset();
       return false;
     }else{
        promptFunction();
        reset();
     }
    
  }
/*prompt*/
// add function sen email
function sendEmail() {
    Email.send({
      SecureToken : "c233cd42-3268-4cb3-9200-062dd0abc73c",
      To : 'ayoubimejad7@gmail.com',
      From : "ayoubimejad7@gmail.com",
      Subject : "This is the subject",
      Body : "name: "+ document.querySelector(".name").value
      +"<br> Email: "+ document.getElementById("email").value
      +"<br> message: "+ document.querySelector(".message").value
   }).then(
   message => alert("message send succesfully ")
  );
  }

  function promptFunction(){
   let promptDiv= document.createElement("div");
   promptDiv.className = "prompt";

   let contentDiv = document.createElement("div");
   contentDiv.className = "content";

   let heading = document.createElement("h1");
   let headingText = document.createTextNode("your email is not valid");
   heading.appendChild(headingText);

   let paragraph = document.createElement("p");
   let paragraphText = document.createTextNode("Please print a valid email!");
   paragraph.appendChild(paragraphText);

   let button= document.createElement("button");
   let buttonText = document.createTextNode("ok");
   button.className= "ok";
   button.appendChild(buttonText);

   contentDiv.appendChild(heading);
   contentDiv.appendChild(paragraph);
   contentDiv.appendChild(button);
   promptDiv.appendChild(contentDiv);
   document.body.appendChild(promptDiv);

   document.querySelector(".ok").addEventListener("click",() => {
    document.querySelector(".prompt").remove();
   });
  }
// -------start accessing portfolio------
  let portfolioButtons = document.querySelectorAll(".portfolio .buttons button");
  let imageBox = document.querySelectorAll(".portfolio .images .box");

  portfolioButtons.forEach((button) => {
    button.addEventListener("click", (butt) => {
      portfolioButtons.forEach((buttn) => buttn.classList.remove("active"));
      butt.target.classList.add("active");
        imageBox.forEach((box) => {
            button.textContent == box.dataset.type  ? box.style.display="block" :box.style.display="none" ;
            button.textContent == "all" ? imageBox.forEach((box) => box.style.display= "block") : false;
        });
    })
  });
// -------end accessing portfolio------
