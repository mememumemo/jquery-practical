$(function(){
  $('.carousel').slick({
  autoplay: true,
  dots: true,
  speed: 1500,
  arrows: false,
  fade: true,
  pauseOnHover: false
});



  $('a[href^="#"]').on('click',function(e){
    e.preventDefault();

    const target = $($(this).attr('href'));
    if(target.length){
      const position = target.offset().top;
      $('html,body').animate({
        scrollTop:position
      },1000);
    }
  });

  $(window).on('scroll load',function(){
    const scrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();

    $('section').each(function(){
      const sectionTop = $(this).offset().top;
      if (scrollTop > sectionTop - windowHeight){
        $(this).addClass('show');
      }
    });
  });


  $('#MyProfile').on('mouseover',function(){
    $(this).animate({
      opacity:0.5
    },250);
  });

  $('#MyProfile').on('mouseout',function(){
    $(this).animate({
      opacity:1
    },250);
  });

    $('.menu1').on('mouseover',function(){
    $(this).animate({
      opacity:0.5
    },250);
  });

  $('.menu1').on('mouseout',function(){
    $(this).animate({
      opacity:1
    },250);
  });

    $('.modal-image').on('mouseover',function(){
    $(this).animate({
      opacity:0.5
    },250);
  });

  $('.modal-image').on('mouseout',function(){
    $(this).animate({
      opacity:1
    },250);
  });


});

$(function(){
  $('.modal-image').on('click', function(){
    const imgSrc = $(this).attr('src'); 
    $('#modal-img').attr('src', imgSrc); 
    $('#modal').fadeIn(); 
  });

  $('.close').on('click', function(){
    $('#modal').fadeOut(); 
  });

  $('.modal-content').on('click', function(e){
    e.stopPropagation();
  });
});



const backBtn = document.getElementById('back-btn');

window.addEventListener('scroll',() => {
  const scrollValue = document.scrollingElement.scrollTop;

  if(scrollValue >= 300){
    backBtn.style.display = 'inline';
  }

  else{
    backBtn.style.display = 'none';
  }
});