$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:6,
    nav:true,
    rtl:true,
    loop:true,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverpavse:true,
  }
  ),
  $(".box").fadeOut(50,function(){
    $(".sec1,.sec").click(function(){
      $(".box").toggle(1000)
    })
  })
  $(".lol-btn2").click(function(){
    $(".lol-input8").css("display","block")
  })
  $(".lol-btn88").click(function(){
    $(".he").css("display","block")
  })
  $(".box123").fadeOut(50,function(){
    $(".lol-flex3").click(function(){
      $(".box123").toggle(1000)
    })
  })
});


$(window).on("load" ,function(){
  $(".loading").fadeOut(30)
}
 ) 


const countdown = () => {
    // Specify the date and time we are counting down to.
    const countDate = new Date("Jan 1, 2035 00:00:00").getTime();
    const now = new Date().getTime();
    const remainingTime = countDate - now;
  
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const textDay = Math.floor(remainingTime / day);
    const textHour = Math.floor((remainingTime % day) / hour);
    const textMinute = Math.floor((remainingTime % hour) / minute);
    const textSecond = Math.floor((remainingTime % minute) / second);
  
    document.querySelector(".day").innerText = textDay > 0 ? textDay : 0;
    document.querySelector(".hour").innerText = textHour > 0 ? textHour : 0;
    document.querySelector(".minute").innerText = textMinute > 0 ? textMinute : 0;
    document.querySelector(".second").innerText = textSecond > 0 ? textSecond : 0;
  };
  
  // should use 500 as setInterval won't always run on time.
  setInterval(countdown, 500);
  