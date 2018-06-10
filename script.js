const burger = document.querySelector(".burgercontainer");
const nav1 = document.querySelector("div#navmobile");
// const nav2 = document.querySelector("a.navmobile2");
// const nav3 = document.querySelector("a.navmobile3");


burger.addEventListener("click", burgerchange);

function burgerchange(){
    burger.classList.toggle("change");

      if (nav1.style.display === "block") {
          nav1.style.display = "none";
      } else {
          nav1.style.display = "block";
      };

}


// function burgerremove() {
//   let burgerback = document.querySelector("a.navmobile1");
//
//     if (burgerback.style.display === "none") {
//         burgerback.style.display = "block";
//     } else {
//         burgerback.style.display = "none";
//     }
// }
