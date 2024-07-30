


document.addEventListener("DOMContentLoaded", () => {
    const counterTimer = document.getElementById("counterTimer");
    const verResend = document.querySelector(".verification__resend");
    const resendCode = document.querySelector(".resend-code");
    const verifyBtn = document.getElementById("verifyBtn")
    counterTimer.innerText = "10"
  
    let timer = 10;

                   // set timer for resend code

    const countDown = setInterval(() => {
      if (timer > 0) {
        timer--;
        counterTimer.innerText = timer;
      } else {
        clearInterval(countDown);
        verResend.style.display = "none";
        resendCode.style.display = "flex";
      }
    }, 1000);

               //reset timer and resend verification code

    resendCode.addEventListener("click", (e) => {
      e.preventDefault();
      resendCode.style.display = "none";
      verResend.style.display = "block";
      counterTimer.innerText = "10"
      timer=10
      setInterval(() => {
        if (timer > 0) {
          timer--;
          counterTimer.innerText = timer;
        } else {
          clearInterval(countDown);
          verResend.style.display = "none";
          resendCode.style.display = "flex";
        }
      }, 1000);
    });
  
  
  
          // jump to next input


}
)

const inputs = document.querySelectorAll('input[maxlength="1"]');
console.log(inputs)
inputs.forEach((input, index) => {
   input.addEventListener("input", () => {
       if (input.value) {
           const nextInput = inputs[index + 1];
           if (nextInput) {
               nextInput.focus();
           }
       }

});
    // input[input.value.length-1].addEventListener("keyup",()=>{
    //     verifyBtn.style.backgroundColor = "var(--text-primary)"
    // })
});


const verifyBtn = document.getElementById("verifyBtn");

verifyBtn.addEventListener("click",(e)=>{
      e.preventDefault()
      window.location.href = "reasons.html"
    })



          
  
