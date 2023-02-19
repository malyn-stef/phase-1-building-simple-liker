// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// add listener to empty hear to envoke servercall
function invokeCode() {
  getButton = document.querySelector("span.like-glyph");
  getButton.addEventListener("click", randomServerRes)

}

function makeButtonChange() {
  if (getButton.textContent != FULL_HEART) {
    getButton.className = 'activated-heart'
    getButton.textContent = FULL_HEART
  }
  else {
    getButton.classList.remove('activated-heart')
    getButton.className = 'like-glyph'
    getButton.textContent = EMPTY_HEART
  }
}

function randomServerRes() {
  mimicServerCall()
    .then(() => makeButtonChange())
    .catch(function () {
      getHiddenID = document.querySelector('#modal')
      getHiddenID.classList.remove('hidden')
      getHiddenID.textContent = 'Random server error. Try again.'
      setTimeout(function () {
        getHiddenID.className = 'hidden'

      }, 3000)
    })
}
invokeCode()

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
