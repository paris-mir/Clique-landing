function makeMovingCircles() {
    const screenWidth = $(window).width();
    let top = "0px";
    let left = "47.5vw";
    let movingObjs = "";
    numberForimage = 1;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 5; j++) {
        style = `  
          position: absolute;
          top: ${top};
          left: ${left};
          width: 50px;
          height: 50px;
          border-radius : 50%;
          margin: auto;
          animation: circular-movement-${i + 1}-${j + 1} ${
          i == 0 ? "90s" : i == 1 ? "100s" : "110s"
        } infinite linear;
          animation-direction: ${i == 1 ? "reverse" : "normal"}; 
          background-image: url('./img/circle${
            numberForimage == 15 ? 5 : numberForimage
          }.png');
          background-repeat: no-repeat;
          background-position: center;`;
  
        movingObjs += `<div style="${style}"></div>`;
        numberForimage++;
      }
    }
    $("#circles-container").append(movingObjs);
  }
  
  makeMovingCircles();
  
  /*let animation;
  animation += `@keyframes circular-movement-${i + 1}-${j + 1} {
      0% {
          transform: rotate(${0 - 360 * (j / 5) + i * 25}deg) translateY(${
          30 + i * 7.5
        }vw) rotate(${-(0 - 360 * (j / 5) + i * 25)}deg);
      }
  
      100% {
          transform: rotate(${360 - 360 * (j / 5) + i * 25}deg) translateY(${
          30 + i * 7.5
        }vw) rotate(-${360 - 360 * (j / 5) + i * 25}deg);
      }
  } ---- `;  
  */
  
  $(document).ready(() => {
    setTimeout(() => {
      const mainHeight = document.getElementsByTagName("main")[0].offsetTop;
      const height1 = document.getElementById("fadeInOne").offsetHeight;
      const height2 = document.getElementById("fadeInTwo").offsetHeight;
      const height3 = document.getElementById("fadeInThr").offsetHeight;
  
      $(window).scroll(()=>{
        const scrollPosition = $(window).scrollTop();
        if(scrollPosition + 350 > mainHeight) {$("#fadeInOne").addClass("is-visible")}
        if(scrollPosition + 350 > height1+mainHeight) {$("#fadeInTwo").addClass("is-visible")}
        if(scrollPosition + 350 > height2+height1+mainHeight) {$("#fadeInThr").addClass("is-visible")}
        if(scrollPosition + 350 > height3+height2+height1+mainHeight) {$("#fadeInFou").addClass("is-visible")}
      })
    }, 1000);
  });