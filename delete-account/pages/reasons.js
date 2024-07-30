const deleteBtn = document.getElementById("deleteBtn");
const other = document.getElementById("other");


        // change button color when a reason is selected

const changeBtnColor = () => {
  deleteBtn.style.backgroundColor = "var(--secondary-red)";
  deleteBtn.style.color = "#fff";
};

const reasonsArray = Array.from(
  document.querySelectorAll(".reasons--wrapper input")
);
for (i = 0; i < reasonsArray.length; i++) {
  reasonsArray[i].addEventListener("click", changeBtnColor);
}


          // display text erea for other reasons

other.addEventListener("click", () => {
    const otherReason = document.getElementById("otherReasons");
    otherReason.style.display = "block";
  });



  deleteBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    window.location.href = "success.html"
  })
