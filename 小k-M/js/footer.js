
  var showFooter0 = true
  var showFooter1 = true
  var showFooter2 = true
  var showFooter3 = true
  $('.navList').find('span').on('click', function () {
    if (showFooter0) {
      $('.navList').animate({ 'height': '5rem' }, function () {
        $('.navList').find('.footerMenu').show();
        $('.navList').find('img').attr('src', '../img/Arrcat/close.png')
      })

      showFooter0 = false
    } else {
      showFooter0 = true
      $('.navList').animate({ 'height': '.68rem' }, function () {
        $('.navList').find('.footerMenu').hide()
        $('.navList').find('img').attr('src', '../img/index/jia.png')
      })
    }
  })
  var showFooter1 = true
  $('.contentList').find('span').on('click', function () {

    if (showFooter1) {

      $('.contentList').animate({ 'height': '3.5rem' }, function () {
        $('.contentList').find('.footerMenu').show();
        $('.contentList').find('img').attr('src', '../img/Arrcat/close.png');

      })
      showFooter1 = false
    } else {
      showFooter1 = true
      $('.contentList').animate({ 'height': '.68rem' }, function () {
        $('.contentList').find('.footerMenu').hide();
        $('.contentList').find('img').attr('src', '../img/index/jia.png')

      })
    }
  })


  $('.emailList').find('span').on('click', function () {

    if (showFooter2) {

      $('.emailList').animate({ 'height': '4.6rem' }, function () {
        $('.emailList').find('.footerMenu').show();
        $('.emailList').find('img').attr('src', '../img/Arrcat/close.png')

      })
      showFooter2 = false
    } else {
      showFooter2 = true
      $('.emailList').animate({ 'height': '.68rem' }, function () {
        $('.emailList').find('.footerMenu').hide();
        $('.emailList').find('img').attr('src', '../img/index/jia.png')

      })
    }
  })


  $('.adressList').find('span').on('click', function () {

    if (showFooter3) {

      $('.adressList').animate({ 'height': '2.8rem' }, function () {
        $('.adressList').find('.footerMenu').show();
        $('.adressList').find('img').attr('src', '../img/Arrcat/close.png')

      })
      showFooter3 = false
    } else {
      showFooter3 = true
      $('.adressList').animate({ 'height': '.68rem' }, function () {
        $('.adressList').find('.footerMenu').hide();
        $('.adressList').find('img').attr('src', '../img/index/jia.png')

      })
    }
  })






  var menuShow = true;
  $('.menuBtn').on('click', function () {
    if (menuShow) {
      $('.menuBtn').find('img').attr('src', '../img/Arrcat/close.png')
      $('.listMenuBox').show()
      menuShow = false
    } else {
      $('.menuBtn').find('img').attr('src', '../img/index/menu.png')
      $('.listMenuBox').hide();
      menuShow = true

    }

  })
