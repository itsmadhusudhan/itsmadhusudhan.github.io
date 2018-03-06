const menuBtn = document.querySelector(".ms-menu__btn");
const menu = document.querySelector(".ms-navigation");
const menuLink = document.querySelectorAll(".ms-menu__link");
const menuIcon=document.querySelectorAll(".ms-fa");

//function to handle menu opening anf closing
function handleClick(e) {
  menuBtn.classList.toggle("ms-open__menu--btn");
  menu.classList.toggle("ms-open__menu");
}

//function to toggle the color of active link
function handleLink(e) {
  menuLink.forEach(link => {
    if (link.classList.contains("ms-active")) {
      link.classList.remove("ms-active");
    }
    if (link === e.target) {
      link.classList.add("ms-active");
      handleClick(e);
    }
  });
  console.log(e.currentTarget);
}

//add event listener on menu button
menuBtn.addEventListener("click", handleClick);

//add event listener on menu links
menuLink.forEach(link => {
  link.addEventListener("click", handleLink);
});
