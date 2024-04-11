

function carousel() {
    let slideIndex = 0;

    showSlide(slideIndex);
    document.body.addEventListener("click",(e)=>{
        
        const target = e.target;
    
        switch (target.classList[0]) {
            case "prev":
                prevSlide()
                break;
            case "next":
                nextSlide()
                break;
            case "dot":
                currentSlide(target.classList[1]);
                break;
            
            default:
                break;
        }
    })
    
    
    
    function nextSlide() {
      slideIndex++;
      showSlide(slideIndex);
    }
    
    function prevSlide() {
      slideIndex--;
      showSlide(slideIndex);
    }
    
    function currentSlide(index) {
        slideIndex = index;
        showSlide(slideIndex);
    }
    
    function showSlide(index) {
      const slides = document.querySelectorAll(".slide");
      const dots = document.querySelectorAll(".dot");
        if (slides.length <= 0 && dots.length <=0) {
            return;
        }
    
      if (index >= slides.length) {
        slideIndex = 0;
      } else if (index < 0) {
        slideIndex = slides.length-1;
      }
    
      for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("selected");
        dots[i].classList.remove("active");
      }
    
      slides[slideIndex].classList.add("selected");
      dots[slideIndex].classList.add("active");
    }
    
}

export {
    carousel
}