
document.addEventListener("DOMContentLoaded", () => {
    const dropdownBtn = document.getElementById("selectBtn");
    const dropDown = document.getElementById("dropDown");
    const countrySearch = document.getElementById("countrySearch");
    const countryList = document.querySelector(".country-list");
    const phoneNumber = document.getElementById("phoneNumber");
    const submitBtn = document.getElementById("submitBtn");
    const dropDownInput = document.querySelector("#dropDown input")
  
    dropDown.style.display = "none";

    
   
    async function fetchCountries() {
        try {
          const response = await fetch("https://restcountries.com/v3.1/all");
          const countries = await response.json();

          return countries.reduce((agg,country) => {

            const countryCode = country.idd.suffixes ? country.idd.suffixes.map(suffixes =>({

              fullName: country.altSpellings[1],
              name: country.cca3,
              code:`${country.idd.root}${suffixes}`,
              flag: country.flags.svg,

            })) : [];

            return agg.concat(countryCode);
          },[]);
            
            
        
          
        } catch (error) {
          console.error("Error fetching countries:", error);
        }
        
      }
  
      //creating the drop down for countries code 
    async function populateCountryDropdown() {


      const countries = await fetchCountries();

      console.log(countries)

      // countries.reduce((agg,item)=>(item))

      countryList.innerHTML = countries
        .map(
          (country) => `
              
               <div  class="country-info" data-code="${country.code}" data-flag="${country.flag}">
                <div>
                  <div class="flag--cropper">
                    <img src="${country.flag}" alt="${country.name}" class="flag-icon-small">
                  </div>
                  <span class="country-code">${country.code}</span>
                </div>
                <p class="country-fullName">${country.fullName}</p>
                 <span class="country-name">${country.name}</span>
              </div>
          `
        )
        .join("");


  
      // add event listeners to country items
      Array.from(document.querySelectorAll(".country-info")).forEach((item) => {
        item.addEventListener("click", () => {
          // dropdownBtn.innerHTML = ``;
          dropdownBtn.innerHTML = `
          <div class="button__content-wrapper">
                    <div>
                      <div class="flag-icon--cropper">
                        <img src="${item.dataset.flag}" alt="flag" class="flag-icon">
                      </div>
                      <span id="countryCode">${item.dataset.code}</span>
                    </div>
                    <div>
                      <img src="./img/arrow-down.svg" alt="">
                    </div>
                  </div>
          `;
          dropDown.style.display = "none";
        });
      });
    }
    populateCountryDropdown()
  
    // toggle dropdown menu visibility
  
  dropdownBtn.addEventListener("click", (e) => {
      e.stopPropagation()
      e.preventDefault();
      dropDown.style.display =
        dropDown.style.display === "flex" ? "none" : "flex";


  });


  
  //filter search for countries 

  countrySearch.addEventListener("input",()=>{
    const searchTerm = countrySearch.value.toLowerCase();
    dropDown.querySelectorAll(".country-info").forEach((item) => {
        const countryName = item.textContent.toLowerCase();
        if (countryName.includes(searchTerm)) {
          item.style.display = "flex";
        } else {
          item.style.display = "none";
        }
      });
  });

  window.addEventListener("click",(e)=>{
    e.preventDefault()
    if (e.target !== dropdownBtn && e.target !== dropDownInput) {
      dropDown.style.display = 'none';
  }
  })


              // save phone number to JSON file
  
  //   submitBtn.addEventListener("click", () => {
  //     const selectedCountry = dropdownBtn.textContent.trim();
  //     const phone = phoneNumber.value.trim();
  
  //     if (selectedCountry && phone) {
  //       const data = {
  //         country: selectedCountry,
  //         phone: phone,
  //       };
  //       console.log("Saving data:", data);
  //     } else {
  //       alert("Please select a country and enter a valid phone number.");
  //     }
  //   });
  
  //   populateCountryDropdown();
  // });


                 // change the button background color an redirect

phoneNumber.addEventListener("keyup",()=>{
  const maxLength = phoneNumber.getAttribute("maxlength");
  if (maxLength==phoneNumber.value.length){
    submitBtn.style.backgroundColor = "var(--text-primary)"

  }
})
})
const submitBtn = document.getElementById("submitBtn");

    submitBtn.addEventListener("click",(e)=>{
      e.preventDefault()
      window.location.href = "pages/verification.html"
    })





  // fetch('https://restcountries.com/v2/all')
//   .then(response => response.json())
//   .then(data => {
//     data.forEach(country => {
//       const fullName = country.name;
//       const shortName = country.alpha2Code;
//       const phoneCode = country.callingCodes[0];
//       const flagIcon = country.flags.svg;

//       console.log(`Full Name: ${fullName}`);
//       console.log(`Short Name: ${shortName}`);
//       console.log(`Phone Code: ${phoneCode}`);
//       console.log(`Flag: ${flagIcon}`);
//       console.log('-------------------');
//     });
//   })
//   .catch(error => console.error('Error:', error));

  
