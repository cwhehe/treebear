
  $(function () {
    $('#fullPage').fullpage({
      // sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90']
      afterLoad: function (el, index) {
        console.log(index)
      },
      onLeave: function(index, nextIndex, direction) {
          if(( index == 1 || index == 2 ) && nextIndex == 3 ){
            $('.swiperIner').find('.innerText').find('div').eq(0).addClass('animated fadeInLeftBig'); 
            $('.swiperIner').find('.innerText').find('div').eq(0).css('animation-delay', '.1s');
            $('.swiperIner').find('.innerText').find('div').eq(1).addClass('animated fadeInLeftBig');
            $('.swiperIner').find('.innerText').find('div').eq(1).css('animation-delay', '.2s');

            $('.swiperIner').find('.innerText1').find('div').eq(0).addClass('animated fadeInLeftBig'); 
            $('.swiperIner').find('.innerText1').find('div').eq(0).css('animation-delay', '.3s');
            $('.swiperIner').find('.innerText1').find('div').eq(1).addClass('animated fadeInLeftBig'); 
            $('.swiperIner').find('.innerText1').find('div').eq(1).css('animation-delay', '.4s');
          
          }else if( index == 1 && nextIndex == 2){
          $('.innerText').find('p').eq(0).addClass('animated fadeInRightBig'); 
          $('.innerText').find('p').eq(1).addClass('animated fadeInLeftBig'); 
          $('.innerText1').find('div').eq(0).addClass('animated fadeInLeftBig'); 
          $('.innerText1').find('div').eq(1).addClass('animated fadeInLeftBig'); 
          $('.swiperBox').eq(0).find('img').eq(0).addClass('animated slideInLeft'); 
          $('.swiperBox').eq(0).find('img').eq(1).addClass('animated slideInLeft'); 
          $('.innerText').find('p').eq(0).css('animation-delay', '.2s');
          $('.innerText').find('p').eq(1).css('animation-delay', '.3s');
          $('.innerText1').find('div').eq(0).css('animation-delay', '.4s');
          $('.innerText1').find('div').eq(1).css('animation-delay', '.5s');
          $('.swiperBox').eq(0).find('img').eq(0).css('animation-delay', '1s'); 
          $('.swiperBox').eq(0).find('img').eq(1).css('animation-delay', '2s'); 

          }else if(( index == 1 || index == 2 || index == 3 ) && nextIndex == 4){
            $(".course-list").find('h4').addClass('animated fadeInUpBig');
            $(".course-list").find('h4').css('animation-delay', '.1s');

            $(".course-title").addClass('animated fadeInUpBig');
            $(".course-title").css('animation-delay', '.2s');
          

            $(".listUl").eq(0).addClass('animated fadeInUpBig');
            $(".listUl").eq(0).css('animation-delay', '.3s');

            $(".listUl").eq(1).addClass('animated fadeInUpBig');
            $(".listUl").eq(1).css('animation-delay', '.4s');

            $(".listUl").eq(2).addClass('animated fadeInUpBig');
            $(".listUl").eq(2).css('animation-delay', '.5s');
            
          }else if(( index == 1 || index == 2 || index == 3 || index == 4 ) && nextIndex == 5){
            $(".cpu-content").addClass('animated fadeInLeftBig');
           
           
          }else if(( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 ) && nextIndex == 6){
            $(".Contrast").find('h2').addClass('animated fadeInDownBig');
            $(".Contrast").find('.product').addClass('animated fadeInDownBig');
            $(".Contrast").find('.product').css('animation-delay', '.2s');
            $(".Contrast").find('p').addClass('animated fadeInDownBig');
            $(".Contrast").find('p').css('animation-delay', '.3s');
            $(".Contrast").find('div').addClass('animated fadeInLeftBig');
            $(".Contrast").find('div').css('animation-delay', '.4s');
           
            
          }else if(( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 ) && nextIndex == 7){
            $(".tableBox").find('h2').addClass('animated fadeInLeftBig');
            $(".tableBox").find('table').addClass('animated fadeInLeftBig');
            $(".tableBox").find('table').css('animation-delay', '.3s');
             
           
            
          }
          else if(( index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 ) && nextIndex == 8){
            $(".certificateList").find('h2').addClass('animated fadeInLeftBig');
            $(".certificateList").find('p').addClass('animated fadeInLeftBig');
            $(".certificateList").find('p').css('animation-delay', '.3s');
            $(".certificateList").find('ul').addClass('animated fadeInLeftBig');
            $(".certificateList").find('ul').css('animation-delay', '.4s');
          
           
            
          }
      },
      controlArrows: false,
      // scrollOverflow:true,
      // licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE'
      // navigation: true//进度条,
      paddingTop: '60px',
      // scrollBar:true//是否显示滚动条
      setAutoScrolling:true,
      // continuousHorizontal:false
      // loopHorizontal:true
    });

      setInterval(function(){
        $.fn.fullpage.moveSlideRight();
    }, 5000);
  });
