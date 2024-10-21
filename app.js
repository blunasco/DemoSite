/*explain this
element.addEventListener("click", myFunction);
element.addEventListener(event, function, useCapture);
es6 anonymous function
() => {
  statements
}

*/

const wrapper = document.querySelector(".sliderWrapper")
const menuItem =document.querySelectorAll(".menuItem")

menuItem.forEach((item, index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
    });
});

//Buttons from Nav
function redirectToHome() {
  window.location.href = "index.html"; // Redirect to the new page
}
function redirectToAboutMe() {
  window.location.href = "aboutme.html"; // Redirect to the new page
}

