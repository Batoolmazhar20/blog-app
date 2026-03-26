var currentUser = ""

function login() {
        var userName = document.getElementById("usernameInput").value.trim();

    var email = document.getElementById("emailInput").value.trim();
    var password = document.getElementById("passwordInput").value.trim();

    if (!email || !password) {
        alert("Please fill Email and Password!");

        return;
    }

    if (password.length < 6 ) {
        alert("Password must be at least 6 characters!");
        return;
    }

    currentUser = userName;
    //login hide hogi
        document.getElementById("loginForm").style.display = "none";
//postApp show hogi
document.getElementById("container").style.display = "block";




   Swal.fire({
  icon: "success",
  title: "Login Successful",
  text: "Welcome! " + userName
});


}



var cardBg 

function deletePost(){
  var card = event.target.parentNode.parentNode
  card.remove()
}
// function editPost(){
//     var card = event.target.parentNode.parentNode
//     var title =card.children
//   console.log(title);


var editCard = null;

function editPost(){
  var card = event.target.parentNode.parentNode;

  // Title nikaalna
  var title = card.children[1].children[0].children[0].children[0].innerText;

  // Description nikaalna
  var description = card.children[1].children[0].children[1].innerText;

  // Input me daalna
  document.getElementById("title").value = title;
  document.getElementById("description").value = description;

  // Save for update
  editCard = card;

  console.log(title, description);
}



function post(){
    var title = document.getElementById("title")
    var description = document.getElementById("description")
    console.log(title.value , description.value);
    var posts = document.getElementById("posts")
   if(title.value.trim() && description.value.trim()){



    if(editCard){

      editCard.children[1].children[0].children[0].children[0].innerText = title.value;

      editCard.children[1].children[0].children[1].innerText = description.value;
     editCard.children[1].style.backgroundImage = `url(${cardBg})`;

      editCard = null;

      alert("Post Updated");

    } else {

     posts.innerHTML += `
     <div class="card mb-2">
              <div class="card-header">~${currentUser}</div>
              <div style="background-image:url(${cardBg})" class="card-body">
                <figure>
                  <blockquote class="blockquote">
                    <p>
                      ${title.value}
                    </p>
                  </blockquote>
                  <figcaption class="blockquote-footer">
                    ${description.value}
                  </figcaption>
                </figure>
              </div>
              <div class="ms-auto m-2">
              <button onclick="editPost()" class="btn btn-success">Edit</button>
              <button onclick="deletePost()" class="btn btn-danger">Delete</button>
              </div>
            </div>

   `

    }
   }else{
    Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Title & description can't be empty!",
});
   }
    title.value = ""
    description.value = ""
}
function selectImg(src){
    cardBg = src
    console.log(src, event.target.classList);
    // event.target.className += " selectedImg"
    var bgImg = document.getElementsByClassName("bg-img")
    for(var i = 0; i<bgImg.length; i++){
        console.log(bgImg[i].className);
        bgImg[i].className = "bgImg"
    }
    event.target.classList.add("selectedImg")
}