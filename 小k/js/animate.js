
$(function () {
  $('#fullPage').fullpage({
    // sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90']
    afterLoad: function (el, index) {
      // console.log(index)

      if (index == 1) {
        $('.banner').find('.title').delay(100).addClass('animated fadeInUpBig').fadeIn(500);
        $('.banner').find('.k-detail').delay(300).addClass('animated fadeInUpBig').fadeIn(500);
        $('.banner').find('.price').delay(800).addClass('animated fadeInUpBig').fadeIn(500);
        $('.banner').find('.buy').delay(1200).addClass('animated fadeInUpBig').fadeIn(500);
      }
      if (index == 2) {
        $('.swiperIner').eq(0).find('.innerText').find('p').eq(0).delay(200).addClass('animated fadeInLeftBig').fadeIn(500);
        $('.swiperIner').eq(0).find('.innerText').find('p').eq(1).delay(400).addClass('animated fadeInLeftBig').fadeIn(500);
        $('.swiperIner').eq(0).find('.innerText1').find('div').eq(0).delay(600).addClass('animated fadeInLeftBig').fadeIn(500);
        $('.swiperIner').eq(0).find('.innerText1').find('div').eq(1).delay(800).addClass('animated fadeInLeftBig').fadeIn(500);
        $('.swiperIner').eq(0).find('.innerText1').find('div').eq(1).delay(800).addClass('animated fadeInLeftBig').fadeIn(500);
        $('.img1').delay(800).addClass('animated fadeInLeft').fadeIn(500);
        $('.img2').delay(1000).addClass('animated fadeInLeft').fadeIn(500);
      }
      if (index == 3) {
        setInterval(function () {
          $.fn.fullpage.moveSlideRight();
        }, 6000);
        $('.swiperBox2 .swiperIner1').find('.innerText').find('div').eq(0).delay(200).addClass('animated fadeInLeftBig').fadeIn(500);
        $('.swiperBox2 .swiperIner1').find('.innerText').find('div').eq(1).delay(400).addClass('animated fadeInLeftBig').fadeIn(500);
        $('.swiperBox2 .swiperIner1').find('.innerText1').find('div').eq(0).delay(600).addClass('animated fadeInLeftBig').fadeIn(500);
        $('.swiperBox2 .swiperIner1').find('.innerText1').find('div').eq(1).delay(800).addClass('animated fadeInLeftBig').fadeIn(500);
        $('.img3').delay(800).addClass('animated fadeInLeft').fadeIn(500);
      
      }
      if (index == 4) {
        $(".course-list .fp-tableCell").css('vertical-align', 'middle')
        $('.course-list').find('h4').addClass('animated fadeInUpBig').fadeIn(500);
        $('.course-list').find('.course-title').delay(400).addClass('animated fadeInUpBig').css('display', 'flex');
        $('.course-list').find('.listUl').delay(1000).addClass('animated fadeInUpBig').css('display', 'flex');
      }
      if (index == 5) {
        $('.bgGray').find('.cpu-content').delay(200).addClass('animated fadeInLeftBig').fadeIn(500)
      }
      if (index == 6) {
        $('.Contrast').find('h2').addClass('animated fadeInDownBig').fadeIn(500)
        $('.Contrast').find('.product').delay(800).addClass('animated fadeInDownBig').css('display', 'flex')
        $('.Contrast').find('.p').addClass('animated fadeInDownBig').fadeIn(500)
        $('.Contrast').find('.div').delay(1200).addClass('animated fadeInDownBig').css('display', 'flex')
      }
      if (index == 7) {
        $('.tableBox').find('h2').addClass('animated fadeInLeftBig').fadeIn();
        $('.tableBox').find('table').addClass('animated fadeInLeftBig').fadeIn()
      }
      if (index == 8) {
        $('.certificateList').find('h2').addClass('animated fadeInLeftBig').fadeIn(500);
        $('.certificateList').find('p').addClass('animated fadeInLeftBig').fadeIn(500);
        $('.certificateList').find('.ul').addClass('animated fadeInLeftBig').css('display', 'flex')
      }
    },
    onLeave: function (index) {
      console.log(index)
      if (index == 2) {
        $('.swiperIner').eq(0).find('.innerText').find('p').eq(0).removeClass('animated fadeInLeftBig').fadeOut();
        $('.swiperIner').eq(0).find('.innerText').find('p').eq(1).removeClass('animated fadeInLeftBig').fadeOut();
        $('.swiperIner').eq(0).find('.innerText1').find('div').eq(0).addClass('animated fadeInLeftBig').fadeOut();
        $('.swiperIner').eq(0).find('.innerText1').find('div').eq(1).removeClass('animated fadeInLeftBig').fadeOut();
        $('.img1').removeClass('animated fadeInLeft').fadeOut();
        $('.img2').removeClass('animated fadeInLeft').fadeOut();
      }
      if (index == 1) {
        $('.banner').find('.title').removeClass('animated fadeInUpBig').fadeOut();
        $('.banner').find('.k-detail').removeClass('animated fadeInUpBig').fadeOut();
        $('.banner').find('.price').removeClass('animated fadeInUpBig').fadeOut();
        $('.banner').find('.buy').removeClass('animated fadeInUpBig').fadeOut();
      }
      if (index == 3) {
        $('.swiperIner1').find('.innerText').find('div').eq(0).removeClass('animated fadeInLeftBig').fadeOut();
        $('.swiperIner1').find('.innerText').find('div').eq(1).removeClass('animated fadeInLeftBig').fadeOut();
        $('.swiperIner1').find('.innerText1').find('div').eq(0).removeClass('animated fadeInLeftBig').fadeOut();
        $('.swiperIner1').find('.innerText1').find('div').eq(1).removeClass('animated fadeInLeftBig').fadeOut();
        $('.img3').delay(800).removeClass('animated fadeInLeft').fadeOut();
      }
      if (index == 4) {
        $('.course-list').find('h4').removeClass('animated fadeInUpBig').fadeOut();
        $('.course-list').find('.course-title').removeClass('animated fadeInUpBig').fadeOut();
        $('.course-list').find('.listUl').removeClass('animated fadeInUpBig').fadeOut();
      }
      if (index == 5) {
        $('.bgGray').find('.cpu-content').removeClass('animated fadeInLeftBig').fadeOut()
      }
      if (index == 6) {

        $('.Contrast').find('h2').removeClass('animated fadeInDownBig').fadeOut()
        $('.Contrast').find('.product').removeClass('animated fadeInDownBig').fadeOut()
        $('.Contrast').find('.p').removeClass('animated fadeInDownBig').fadeOut()
        $('.Contrast').find('.div').removeClass('animated fadeInDownBig').fadeOut()

      }
      if (index == 7) {
        $('.tableBox').find('h2').removeClass('animated fadeInLeftBig').fadeOut();
        $('.tableBox').find('table').removeClass('animated fadeInLeftBig').fadeOut()
      }
      if (index == 8) {
        $('.certificateList').find('h2').removeClass('animated fadeInLeftBig').fadeOut();
        $('.certificateList').find('p').removeClass('animated fadeInLeftBig').fadeOut();
        $('.certificateList').find('.ul').removeClass('animated fadeInLeftBig').fadeOut()
      }

    },
    afterSlideLoad:function(anchorLink, index, slideAnchor, slideIndex){
      if(index==2 && slideIndex==1 ){
        $('.swiperBox1 .swiperIner2').find('.innerText').find('div').eq(0).delay(200).addClass('animated fadeInLeftBig').fadeIn(500);
        $('.swiperBox1 .swiperIner2').find('.innerText').find('div').eq(1).delay(400).addClass('animated fadeInLeftBig').fadeIn(500);
        $('.swiperBox1 .swiperIner2').find('.innerText1').find('div').eq(0).delay(600).addClass('animated fadeInLeftBig').fadeIn(500);
        $('.swiperBox1 .swiperIner2').find('.innerText1').find('div').eq(1).delay(800).addClass('animated fadeInLeftBig').fadeIn(500);
        $('.img2').delay(1200).addClass('animated fadeInLeft').fadeIn(500);
        $('.img1').delay(800).addClass('animated fadeInLeft').fadeIn(500);
      }
      // console.log(slideIndex)
      if(index==3 && slideIndex==0 ){
        $('.swiperBox2 .swiperIner1').find('.innerText').find('div').eq(0).delay(200).addClass('animated fadeInLeftBig').fadeIn(500);
        $('.swiperBox2 .swiperIner1').find('.innerText').find('div').eq(1).delay(400).addClass('animated fadeInLeftBig').fadeIn(500);
        $('.swiperBox2 .swiperIner1').find('.innerText1').find('div').eq(0).delay(600).addClass('animated fadeInLeftBig').fadeIn(500);
        $('.swiperBox2 .swiperIner1').find('.innerText1').find('div').eq(1).delay(800).addClass('animated fadeInLeftBig').fadeIn(500);
        $('.img3').delay(800).addClass('animated fadeInLeft').fadeIn(500);
      }
      if(index==3 && slideIndex==1 ){
        $('.swiperBox2 .swiperIner2').find('.innerText').find('div').eq(0).delay(200).addClass('animated fadeInLeftBig').fadeIn(500);
        $('.swiperBox2 .swiperIner2').find('.innerText').find('div').eq(1).delay(400).addClass('animated fadeInLeftBig').fadeIn(500);
        $('.swiperBox2 .swiperIner2').find('.innerText1').find('div').eq(0).delay(600).addClass('animated fadeInLeftBig').fadeIn(500);
        $('.swiperBox2 .swiperIner2').find('.innerText1').find('div').eq(1).delay(800).addClass('animated fadeInLeftBig').fadeIn(500);
        $('.img4').delay(1200).addClass('animated fadeInLeft').fadeIn(500);
        $('.img5').delay(800).addClass('animated fadeInLeft').fadeIn(500);
      }
      if(index==3 && slideIndex==2 ){
        $('.swiperBox2 .swiperIner3').find('.innerText').find('div').eq(0).delay(200).addClass('animated fadeInLeftBig').fadeIn(500);
        $('.swiperBox2 .swiperIner3').find('.innerText').find('div').eq(1).delay(400).addClass('animated fadeInLeftBig').fadeIn(500);
        $('.swiperBox2 .swiperIner3').find('.innerText1').find('div').eq(0).delay(600).addClass('animated fadeInLeftBig').fadeIn(500);
        $('.swiperBox2 .swiperIner3').find('.innerText1').find('div').eq(1).delay(800).addClass('animated fadeInLeftBig').fadeIn(500);
        $('.img6').delay(1200).addClass('animated fadeInLeft').fadeIn(500);
        $('.img7').delay(800).addClass('animated fadeInLeft').fadeIn(500);
      }
      
    },
    onSlideLeave:function(anchorLink, index, slideAnchor, slideIndex){
      console.log(slideAnchor)
      if(index==3 && slideAnchor==0){
        $('.swiperBox2 .swiperIner1').find('.innerText').find('div').eq(0).removeClass('animated fadeInLeftBig').fadeOut(500);
        $('.swiperBox2 .swiperIner1').find('.innerText').find('div').eq(1).removeClass('animated fadeInLeftBig').fadeOut(500);
        $('.swiperBox2 .swiperIner1').find('.innerText1').find('div').eq(0).removeClass('animated fadeInLeftBig').fadeOut(500);
        $('.swiperBox2 .swiperIner1').find('.innerText1').find('div').eq(1).removeClass('animated fadeInLeftBig').fadeOut(500);
        $('.img3').delay(800).addClass('animated fadeInLeft').fadeOut(500);
      }
      if(index==3 && slideAnchor==1 ){
        $('.swiperBox2 .swiperIner2').find('.innerText').find('div').eq(0).removeClass('animated fadeInLeftBig').fadeOut();
        $('.swiperBox2 .swiperIner2').find('.innerText').find('div').eq(1).removeClass('animated fadeInLeftBig').fadeOut();
        $('.swiperBox2 .swiperIner2').find('.innerText1').find('div').eq(0).removeClass('animated fadeInLeftBig').fadeOut();
        $('.swiperBox2 .swiperIner2').find('.innerText1').find('div').eq(1).removeClass('animated fadeInLeftBig').fadeOut();
        $('.img4').removeClass('animated fadeInLeft').fadeOut();
        $('.img5').removeClass('animated fadeInLeft').fadeOut();
      }
      if(index==3 && slideAnchor==2 ){
        $('.swiperBox2 .swiperIner3').find('.innerText').find('div').eq(0).removeClass('animated fadeInLeftBig').fadeOut();
        $('.swiperBox2 .swiperIner3').find('.innerText').find('div').eq(1).removeClass('animated fadeInLeftBig').fadeOut();
        $('.swiperBox2 .swiperIner3').find('.innerText1').find('div').eq(0).removeClass('animated fadeInLeftBig').fadeOut();
        $('.swiperBox2 .swiperIner3').find('.innerText1').find('div').eq(1).removeClass('animated fadeInLeftBig').fadeOut();
        $('.img7').removeClass('animated fadeInLeft').fadeOut();
        $('.img6').removeClass('animated fadeInLeft').fadeOut();
        
      }
    },
    controlArrows: false,
    paddingTop: '60px',
  })

 

});
