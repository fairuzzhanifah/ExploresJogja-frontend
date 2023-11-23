let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active');
}

document.querySelector('#nav-close').onclick = () =>{
    navbar.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.add('active');
    }
};

window.onload = () =>{
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.add('active');
    }
};

// var counter = 1;
// setInterval(function(){
//   document.getElementById('radio' + counter).checked = true;
//   counter++;
//   if(counter > 4){
//     counter = 1;
//   }
// }, 5000);

function startSlider(startCounter, endCounter) {
    var counter = startCounter;
  
    setInterval(function () {
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if (counter > endCounter) {
        counter = startCounter;
      }
    }, 5000);
  }
  
  // Slider 1
  startSlider(1, 4);
  
  // Slider 2
  startSlider(5, 8);
  
