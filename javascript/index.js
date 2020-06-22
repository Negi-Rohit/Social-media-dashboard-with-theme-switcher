const toggleSwitch = document.querySelector(".checkbox");
const bg = document.querySelector("body");
const topHeading = document.querySelector(".top-headings h3");
const darkModeText = document.querySelector("#theme-switching");
const mainCards = document.querySelectorAll(".profile-info");
const bottomCards = document.querySelectorAll(".daily-overview");
const overviewHeading = document.querySelector(".overview-heading");
const noOfFollowers = document.querySelectorAll("h1");
const noOfLikes = document.querySelectorAll(".total-no-of-likes");



toggleSwitch.addEventListener("click", () => {
   //Dark Mode
   if(toggleSwitch.checked) {
      bg.style.backgroundColor = "#171924";
      bg.style.color="#8D9AC7";
      topHeading.style.color = "#fff";
      darkModeText.style.color = "#fff";
      overviewHeading.style.color = "#fff";
      for (let i = 0; i < 4; i++) {
         mainCards[i].style.backgroundColor = '#202640';
         noOfFollowers[i].style.color = "#fff";
         // Main Cards Hover Effect
         mainCards[i].addEventListener("mouseover", function() {
            mainCards[i].style.backgroundColor = "#2F3755";
         });
         mainCards[i].addEventListener("mouseout", function() {
            mainCards[i].style.backgroundColor = "#202640";
         });
       }

        for (let i = 0; i < 8; i++){
          bottomCards[i].style.backgroundColor = "#202640";
          noOfLikes[i].style.color = "#fff";
          // Bottom Cards Hover Effect
          bottomCards[i].addEventListener("mouseover", function() {
             bottomCards[i].style.backgroundColor = "#2F3755";
          });
          bottomCards[i].addEventListener("mouseout", function() {
             bottomCards[i].style.backgroundColor = "#202640";
          });
        }



   //Light Mode
   } else {
      bg.style.backgroundColor = "#fff";
      bg.style.color = "#63687E";
      topHeading.style.color = "#171924";
      darkModeText.style.color = "#63687E";
      overviewHeading.style.color = "#63687E";
      for (let i = 0; i < 4; i++) {
         mainCards[i].style.backgroundColor = "#F2F4FA";
          noOfFollowers[i].style.color = "#171924";
         // Main Cards Hover Effect
         mainCards[i].addEventListener("mouseover", function() {
            mainCards[i].style.backgroundColor = "#E2E5F0";
         });
         mainCards[i].addEventListener("mouseout", function() {
            mainCards[i].style.backgroundColor = "#F2F4FA";
         });
       }
       for (let i = 0; i < 8; i++){
         bottomCards[i].style.backgroundColor = "#F2F4FA";
           noOfLikes[i].style.color = "#171924";
         // Bottom Cards Hover Effect
         bottomCards[i].addEventListener("mouseover", function() {
            bottomCards[i].style.backgroundColor = "#E2E5F0";
         });
         bottomCards[i].addEventListener("mouseout", function() {
            bottomCards[i].style.backgroundColor = "#F2F4FA";
         });
       }
   }
});
