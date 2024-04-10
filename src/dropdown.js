function dropdown() {
    document.addEventListener("DOMContentLoaded",function() {

        const dropdown = document.querySelector(".dropdown");
        console.log(dropdown);
        
        dropdown.addEventListener("mouseover", function () {
          this.querySelector(".dropdown-content").style.display = "block";
        });
      
        dropdown.addEventListener("mouseout", function () {
          this.querySelector(".dropdown-content").style.display = "none";
        });
      });
}

export {
    dropdown
}