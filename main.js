
// GLOBAL VARIABLES
var title = document.querySelector(".website-title");

var url = document.querySelector(".website-url");

var deleteBut = document.querySelector(".delete-button");

var cardBookMark = document.querySelector(".right-side");

var enterButton = document.querySelector(".enter-button");

var numCards = 0;

var errMessage = document.querySelector(".error-icon");


// EVENT LISTENERS

enterButton.addEventListener("click", addCard);
cardBookMark.addEventListener("click", deleteCard);
cardBookMark.addEventListener("click", readCard);


// FUNCTIONS

    // creates card 
function makeCard(title, url) {
numCards++;
cardBookMark.innerHTML +=

`<article class="card">
            <div class="card-bar-width">
              <h2 class="bookmark-name">${title}</h2>
            </div>
            <div class="card-bar-width">
              <h3 class="url-border">${url}</h3>
            </div>
            <div class="card-buttons">
              <button class="but-style" id="read-button-${numCards}">Read</button>
              <h4><input type="submit" name="deletebutton" value="Delete" class="delete-button"></h4>
            </div>
          </article>`
}

    // adds error symobol if no input entered + adds the title and value input onto the card if fields have input
function addCard(e) {
  e.preventDefault();
  if (title.value.length === 0 || url.value.length === 0) {
    errMessage.style.display = "inline";
  }else {
    errMessage.style.display = "none"
  makeCard(title.value, url.value);
  }
}
     
   // changes class to .read once envoked
function readCard(e) {
    var element = document.getElementById(e.target.id);
  element.classList.toggle("read");
  }


      // deletes the card
function deleteCard(e) {
  if (e.target.className === "delete-button") {
    e.target.parentElement.parentElement.parentElement.remove()
  }
}
