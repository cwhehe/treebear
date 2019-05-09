
$(function () {
  $('#fullPage').fullpage({
    // sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90']
    afterLoad: function (el, index) {
      if (index == 1) {
        $('.banner').find('.title').delay(100).addClass('animated fadeInUpBig').fadeIn(500);
        $('.banner').find('.k-detail').delay(200).addClass('animated fadeInUpBig').fadeIn(500);
        $('.banner').find('.price').delay(400).addClass('animated fadeInUpBig').fadeIn(500);
        $('.banner').find('.buy').delay(500).addClass('animated fadeInUpBig').fadeIn(500);
      }
      if (index == 2) {
        $('.swiperIner').eq(0).find('.innerText').find('p').eq(0).delay(200).addClass('animated fadeInLeftBig').fadeIn(500);
        $('.swiperIner').eq(0).find('.innerText').find('p').eq(1).delay(400).addClass('animated fadeInLeftBig').fadeIn(500);
        $('.swiperIner').eq(0).find('.innerText1').find('div').eq(0).delay(600).addClass('animated fadeInLeftBig').fadeIn(500);
        $('.swiperIner').eq(0).find('.innerText1').find('div').eq(1).delay(800).addClass('animated fadeInLeftBig').fadeIn(500);
        $('.swiperIner').eq(0).find('.innerText1').find('div').eq(1).delay(800).addClass('animated fadeInLeftBig').fadeIn(500);

        $('.img2').delay(800).addClass('animated fadeInUp').fadeIn(500);
        $('.img2').delay(1600).fadeOut(100);
        $('.img1').delay(1600).addClass('animated fadeInUp').fadeIn(500);
        $('.alert').delay(2400).addClass('animated fadeInRight').fadeIn(100);

      }
      if (index == 3) {

        $('.swiperBox2 .swiperIner1').find('.innerText').find('div').eq(0).delay(200).addClass('animated fadeInLeftBig').fadeIn(500);
        $('.swiperBox2 .swiperIner1').find('.innerText').find('div').eq(1).delay(400).addClass('animated fadeInLeftBig').fadeIn(500);
        $('.swiperBox2 .swiperIner1').find('.innerText1').find('div').eq(0).delay(600).addClass('animated fadeInLeftBig').fadeIn(500);
        $('.swiperBox2 .swiperIner1').find('.innerText1').find('div').eq(1).delay(800).addClass('animated fadeInLeftBig').fadeIn(500);
        $('.img5').delay(800).addClass('animated fadeInUp').fadeIn(500);
       
      }
      if (index == 4) {
        $('.course-list').find('h4').addClass('animated fadeInUpBig').fadeIn(100);
        $('.course-list').find('.course-title').addClass('animated fadeInUpBig').css('display', 'flex');
        $('.course-list').find('.listUlBox').delay(300).addClass('animated fadeInUpBig').fadeIn(500);
        $(".course-list .fp-tableCell").css('vertical-align', 'middle');

      }
      if (index == 5) {
        $('.bgGray').find('.cpu-content').find('p').eq(0).delay(100).addClass('animated fadeInUpBig').fadeIn(500)
        $('.bgGray').find('.cpu-content').find('p').eq(1).delay(200).addClass('animated fadeInUpBig').fadeIn(500)
        $('.bgGray').find('.cpu-content').find('p').eq(2).delay(200).addClass('animated fadeInUpBig').fadeIn(500)
        $('.bgGray').find('.cpu-content').find('p').eq(3).delay(200).addClass('animated fadeInUpBig').fadeIn(500)
        $('.bgGray').find('.cpu-content').find('p').eq(4).delay(200).addClass('animated fadeInUpBig').fadeIn(500)
        $('.bgGray').find('.cpu-content').find('img').delay(400).addClass('animated fadeInUpBig').fadeIn(500)
        $('.bgGray').find('.cpu-content').delay(100).addClass('animated fadeInUpBig').fadeIn(500)
      }
      if (index == 6) {
        $(".Contrast .fp-tableCell").css('vertical-align', 'middle')
        $('.Contrast').find('h2').delay(100).addClass('animated fadeInUpBig').fadeIn(100)
        $('.Contrast').find('.productBox').delay(200).addClass('animated fadeInUpBig').fadeIn(200)
        $('.Contrast').find('.p').delay(300).addClass('animated fadeInUpBig').fadeIn(200)
        // $('.Contrast').find('.div').delay(1000).addClass('animated fadeInUpBig').
        $('.Contrast').find('.divBox').delay(400).addClass('animated fadeInUpBig').fadeIn(200)
      }
      if (index == 7) {
        $('#tableBox1').find('h2').addClass('animated fadeInUpBig').fadeIn();
        $('#tableBox1').find('table').delay(100).addClass('animated fadeInUpBig').fadeIn()
        $("#tableBox1 .fp-tableCell").css('vertical-align', 'middle')

      }
      if (index == 8) {
        $('#tableBox2').find('h2').addClass('animated fadeInUpBig').fadeIn();
        $('#tableBox2').find('table').delay(100).addClass('animated fadeInUpBig').fadeIn()
        $("#tableBox2 .fp-tableCell").css('vertical-align', 'middle')

      }
      if (index == 9) {
        $('.certificateList').find('h2').delay(100).addClass('animated fadeInUpBig').fadeIn(500);
        $('.certificateList').find('p').delay(200).addClass('animated fadeInUpBig').fadeIn(500);
        $('.certificateList').find('.ulBox').eq(0).delay(300).addClass('animated fadeInUpBig').fadeIn(500)
        $('.certificateList').find('.ulBox').eq(1).delay(400).addClass('animated fadeInUpBig').fadeIn(500)
        $(".certificateList .fp-tableCell").css('vertical-align', 'middle')

      }
      if (index == 10) {
        $('.bottomsection').css('padding-top', '0')
      }
    },
    onLeave: function (index) {
      // console.log(index)
      if (index == 2) {
        $('.swiperIner').eq(0).find('.innerText').find('p').eq(0).removeClass('animated fadeInLeftBig').fadeOut();
        $('.swiperIner').eq(0).find('.innerText').find('p').eq(1).removeClass('animated fadeInLeftBig').fadeOut();
        $('.swiperIner').eq(0).find('.innerText1').find('div').eq(0).addClass('animated fadeInLeftBig').fadeOut();
        $('.swiperIner').eq(0).find('.innerText1').find('div').eq(1).removeClass('animated fadeInLeftBig').fadeOut();
        $('.img1').removeClass('animated fadeInLeft').fadeOut();
        $('.img2').removeClass('animated fadeInLeft').fadeOut();
        $('.alert').removeClass('animated fadeInRight').fadeOut();
       

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
        $('.img3').delay(800).removeClass('animated fadeInUp').fadeOut();

      }
      if (index == 4) {
        $('.course-list').find('h4').removeClass('animated fadeInUpBig').fadeOut();
        $('.course-list').find('.course-title').removeClass('animated fadeInUpBig').fadeOut();
        $('.course-list').find('.listUlBox').removeClass('animated fadeInUpBig').fadeOut();
      }
      if (index == 5) {
        // $('.bgGray').find('.cpu-content').removeClass('animated fadeInLeftBig').fadeOut()
        $('.bgGray').find('.cpu-content').find('p').eq(0).removeClass('animated fadeInUpBig').fadeOut()
        $('.bgGray').find('.cpu-content').find('p').eq(1).delay(400).removeClass('animated fadeInUpBig').fadeOut()
        $('.bgGray').find('.cpu-content').find('p').eq(2).delay(800).removeClass('animated fadeInUpBig').fadeOut()
        $('.bgGray').find('.cpu-content').find('p').eq(3).delay(800).removeClass('animated fadeInUpBig').fadeOut()
        $('.bgGray').find('.cpu-content').find('p').eq(4).delay(800).removeClass('animated fadeInUpBig').fadeOut()
        $('.bgGray').find('.cpu-content').find('img').delay(1000).removeClass('animated fadeInUpBig').fadeOut()
        $('.bgGray').find('.cpu-content').delay(1200).removeClass('animated fadeInUpBig').fadeOut()
      }
      if (index == 6) {
        $('.Contrast').find('h2').removeClass('animated fadeInUpBig').fadeOut()
        // $('.Contrast').find('.product').removeClass('animated fadeInUpBig').fadeOut()
        $('.Contrast').find('.p').removeClass('animated fadeInUpBig').fadeOut()
        $('.Contrast').find('.divBox').removeClass('animated fadeInUpBig').fadeOut()
        $('.Contrast').find('.productBox').removeClass('animated fadeInUpBig').fadeOut()

      }
      if (index == 7) {
        $('#tableBox1').find('h2').removeClass('animated fadeInLeftBig').fadeOut();
        $('#tableBox1').find('table').removeClass('animated fadeInLeftBig').fadeOut()
      }
      if (index == 8) {
        $('#tableBox2').find('h2').removeClass('animated fadeInUpBig').fadeOut();
        $('#tableBox2').find('table').removeClass('animated fadeInUpBig').fadeOut()

      }
      if (index == 9) {
        $('.certificateList').find('h2').removeClass('animated fadeInLeftBig').fadeOut();
        $('.certificateList').find('p').removeClass('animated fadeInLeftBig').fadeOut();
        $('.certificateList').find('.ulBox').eq(0).removeClass('animated fadeInUpBig').fadeOut()
        $('.certificateList').find('.ulBox').eq(1).removeClass('animated fadeInUpBig').fadeOut()
        $('.quesionWrapper').css('paddingTop',0)
      }
      

    },
    afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
      if (index == 2 && slideIndex == 1) {
        $('.swiperBox1 .swiperIner2').find('.innerText').find('p').eq(0).delay(200).addClass('animated fadeInLeftBig').fadeIn(500);
        $('.swiperBox1 .swiperIner2').find('.innerText').find('p').eq(1).delay(400).addClass('animated fadeInLeftBig').fadeIn(500);
        $('.swiperBox1 .swiperIner2').find('.innerText1').find('div').eq(0).delay(600).addClass('animated fadeInLeftBig').fadeIn(500);
        $('.swiperBox1 .swiperIner2').find('.innerText1').find('div').eq(1).delay(800).addClass('animated fadeInLeftBig').fadeIn(500);
        // $('.img3').delay(1200).addClass('animated fadeInLeft').fadeIn(500);
        // $('.img4').delay(800).addClass('animated fadeInLeft').fadeIn(500);

        $('.img4').delay(800).addClass('animated fadeInUp').fadeIn(500);
        $('.img4').delay(1600).fadeOut(100);
        $('.img3').delay(1600).addClass('animated fadeInUp').fadeIn(500);
        $('.alert2').delay(2400).addClass('animated fadeInRight').fadeIn(100);
      }
      if(index==2 && slideIndex==0){
        $('.swiperIner').eq(0).find('.innerText').find('p').eq(0).delay(200).addClass('animated fadeInLeftBig').fadeIn(500);
        $('.swiperIner').eq(0).find('.innerText').find('p').eq(1).delay(400).addClass('animated fadeInLeftBig').fadeIn(500);
        $('.swiperIner').eq(0).find('.innerText1').find('div').eq(0).delay(600).addClass('animated fadeInLeftBig').fadeIn(500);
        $('.swiperIner').eq(0).find('.innerText1').find('div').eq(1).delay(800).addClass('animated fadeInLeftBig').fadeIn(500);
        $('.swiperIner').eq(0).find('.innerText1').find('div').eq(1).delay(800).addClass('animated fadeInLeftBig').fadeIn(500);

        $('.img2').delay(800).addClass('animated fadeInUp').fadeIn(500);
        $('.img2').delay(1600).fadeOut(100);
        $('.img1').delay(1600).addClass('animated fadeInUp').fadeIn(500);
        $('.alert').delay(2400).addClass('animated fadeInRight').fadeIn(100);
      }
      // console.log(slideIndex)
      if (index == 3 && slideIndex == 0) {
        $('.swiperBox2 .swiperIner1').find('.innerText').find('div').eq(0).delay(200).addClass('animated fadeInLeftBig').fadeIn(500);
        $('.swiperBox2 .swiperIner1').find('.innerText').find('div').eq(1).delay(400).addClass('animated fadeInLeftBig').fadeIn(500);
        $('.swiperBox2 .swiperIner1').find('.innerText1').find('div').eq(0).delay(600).addClass('animated fadeInLeftBig').fadeIn(500);
        $('.swiperBox2 .swiperIner1').find('.innerText1').find('div').eq(1).delay(800).addClass('animated fadeInLeftBig').fadeIn(500);
        $('.img5').delay(800).addClass('animated fadeInUp').fadeIn(500);
      }
      if (index == 3 && slideIndex == 1) {
        $('.swiperBox2 .swiperIner2').find('.innerText').find('div').eq(0).delay(200).addClass('animated fadeInLeftBig').fadeIn(500);
        $('.swiperBox2 .swiperIner2').find('.innerText').find('div').eq(1).delay(400).addClass('animated fadeInLeftBig').fadeIn(500);
        $('.swiperBox2 .swiperIner2').find('.innerText1').find('div').eq(0).delay(600).addClass('animated fadeInLeftBig').fadeIn(500);
        $('.swiperBox2 .swiperIner2').find('.innerText1').find('div').eq(1).delay(800).addClass('animated fadeInLeftBig').fadeIn(500);
        $('.img6').delay(1000).addClass('animated fadeInUp').fadeIn(500);
        $('.img6').delay(1200).fadeOut();

        $('.img7').delay(1400).addClass('animated fadeInUp').fadeIn(500);
      }
      if (index == 3 && slideIndex == 2) {
        $('.swiperBox2 .swiperIner3').find('.innerText').find('div').eq(0).delay(200).addClass('animated fadeInLeftBig').fadeIn(500);
        $('.swiperBox2 .swiperIner3').find('.innerText').find('div').eq(1).delay(400).addClass('animated fadeInLeftBig').fadeIn(500);
        $('.swiperBox2 .swiperIner3').find('.innerText1').find('div').eq(0).delay(600).addClass('animated fadeInLeftBig').fadeIn(500);
        $('.swiperBox2 .swiperIner3').find('.innerText1').find('div').eq(1).delay(800).addClass('animated fadeInLeftBig').fadeIn(500);

        $('.img9').delay(1000).addClass('animated fadeInUp').fadeIn(500);
        $('.img9').delay(1100).fadeOut();
        $('.img8').delay(1600).addClass('animated fadeInUp').fadeIn(500);



      }

    },
    onSlideLeave: function (anchorLink, index, slideAnchor, slideIndex) {
      console.log(slideAnchor)
      if (index == 2 && slideAnchor == 0) {
        $('.swiperIner').eq(0).find('.innerText').find('p').eq(0).removeClass('animated fadeInLeftBig').fadeOut();
        $('.swiperIner').eq(0).find('.innerText').find('p').eq(1).removeClass('animated fadeInLeftBig').fadeOut();
        $('.swiperIner').eq(0).find('.innerText1').find('div').eq(0).addClass('animated fadeInLeftBig').fadeOut();
        $('.swiperIner').eq(0).find('.innerText1').find('div').eq(1).removeClass('animated fadeInLeftBig').fadeOut();
        $('.img1').removeClass('animated fadeInLeft').fadeOut();
        $('.img2').removeClass('animated fadeInLeft').fadeOut();
        $('.alert').removeClass('animated fadeInRight').fadeOut();
      }
      if (index == 2 && slideAnchor == 1) {
        $('.swiperBox1 .swiperIner2').find('.innerText').find('p').eq(0).removeClass('animated fadeInLeftBig').fadeOut();
        $('.swiperBox1 .swiperIner2').find('.innerText').find('p').eq(1).removeClass('animated fadeInLeftBig').fadeOut();
        $('.swiperBox1 .swiperIner2').find('.innerText1').find('div').eq(0).removeClass('animated fadeInLeftBig').fadeOut();
        $('.swiperBox1 .swiperIner2').find('.innerText1').find('div').eq(1).removeClass('animated fadeInLeftBig').fadeOut();
        $('.img4').removeClass('animated fadeInUp').fadeOut();
        $('.img3').removeClass('animated fadeInUp').fadeOut();
        $('.alert2').removeClass('animated fadeInRight').fadeOut();
      }
      if (index == 3 && slideAnchor == 0) {
        $('.swiperBox2 .swiperIner1').find('.innerText').find('div').eq(0).removeClass('animated fadeInLeftBig').fadeOut();
        $('.swiperBox2 .swiperIner1').find('.innerText').find('div').eq(1).removeClass('animated fadeInLeftBig').fadeOut();
        $('.swiperBox2 .swiperIner1').find('.innerText1').find('div').eq(0).removeClass('animated fadeInLeftBig').fadeOut(500);
        $('.swiperBox2 .swiperIner1').find('.innerText1').find('div').eq(1).removeClass('animated fadeInLeftBig').fadeOut();
        $('.img5').delay(800).addClass('animated fadeInUp').fadeOut();
      }
      if (index == 3 && slideAnchor == 1) {
        $('.swiperBox2 .swiperIner2').find('.innerText').find('div').eq(0).removeClass('animated fadeInLeftBig').fadeOut();
        $('.swiperBox2 .swiperIner2').find('.innerText').find('div').eq(1).removeClass('animated fadeInLeftBig').fadeOut();
        $('.swiperBox2 .swiperIner2').find('.innerText1').find('div').eq(0).removeClass('animated fadeInLeftBig').fadeOut();
        $('.swiperBox2 .swiperIner2').find('.innerText1').find('div').eq(1).removeClass('animated fadeInLeftBig').fadeOut();
        $('.img6').removeClass('animated fadeInUp').fadeOut();
        $('.img7').removeClass('animated fadeInUp').fadeOut();
      }
      if (index == 3 && slideAnchor == 2) {
        $('.swiperBox2 .swiperIner3').find('.innerText').find('div').eq(0).removeClass('animated fadeInLeftBig').fadeOut();
        $('.swiperBox2 .swiperIner3').find('.innerText').find('div').eq(1).removeClass('animated fadeInLeftBig').fadeOut();
        $('.swiperBox2 .swiperIner3').find('.innerText1').find('div').eq(0).removeClass('animated fadeInLeftBig').fadeOut();
        $('.swiperBox2 .swiperIner3').find('.innerText1').find('div').eq(1).removeClass('animated fadeInLeftBig').fadeOut();
        $('.img8').removeClass('animated fadeInUp').fadeOut();
        $('.img9').removeClass('animated fadeInUp').fadeOut();

      }
    },
    controlArrows: true,
    paddingTop: '60px',
    // slidesNavigation: true,//是否显示横向幻灯片的导航，默认为false
    // slidesNavPosition: 'bottom',//横向导航的位置，默认为bottom，可以设置为top或bottom
    scrollOverflowReset: true,
		scrollOverflowResetKey: 'YWx2YXJvdHJpZ28uY29tXzlRaGMyTnliMnhzVDNabGNtWnNiM2RTWlhObGRBPT14Ykk='

  })
  // setInterval(function () {
  //   $.fn.fullpage.moveSlideRight()
  // }, 6000)

});
