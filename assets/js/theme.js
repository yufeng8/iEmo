// Menu btn
$('#menu-btn').click(function() {
  if($('header').attr('class') == $('aside').attr('class')) {
    $('header').toggleClass('active');
    $('aside').toggleClass('active');
  } else if($('header').attr('class') == 'active' && $('aside').attr('class') != 'active') {
    $('header').removeClass('active');
  } else if($('header').attr('class') != 'active' && $('aside').attr('class') == 'active') {
    $('header').addClass('active');
  }

  $('.search-m').removeClass('active');
})

$('#aside-btn').click(function() {
  $('aside').toggleClass('active');
  $('.search-m').removeClass('active');
})



// Search btn - Mobile
$('#search-btn').click(function() {
  $('.search-m').toggleClass('active');
})



// Nav user menu
const user_set_btn = document.querySelector('main .nav .user-menu #user-menu-btn');
const user_set_menu = document.querySelector('main .nav .user-menu .user-menu-box');
function remove_set_menu(e) {
  user_set_menu.classList.remove('active');
  document.removeEventListener("click",remove_set_menu);
}

if(user_set_btn) {
  user_set_btn.addEventListener("click",(e)=>{
    e.stopPropagation();
    $('.search-m').removeClass('active');
    if(user_set_menu.classList.toggle('active')) {
      document.addEventListener("click",remove_set_menu);
    }
  })
  user_set_menu.addEventListener("click",(e)=>e.stopPropagation());
}



// Scrolling and hide menu
$('article, aside .aside-content').scroll(function() {
  $(user_set_menu).removeClass('active');
  $('.search-m').removeClass('active');
})
$(document).scroll(function() {
  $(user_set_menu).removeClass('active');
  $('.search-m').removeClass('active');
})




// Horizontal scrolling
const cateTagContainer = document.querySelectorAll(".category main .content article .categories ul, .tag main .content article .tag-bar ul,.single main .content article .post-cover .post-info .more");

if(cateTagContainer) {
  $(cateTagContainer).each(function(i) {
    cateTagContainer[i].addEventListener("wheel", (event) => {
      event.preventDefault();
      cateTagContainer[i].scrollLeft += event.deltaY;
    });
  })
}




// Menu tooltip
const menuItemA = document.querySelectorAll('header .menu > li > a');

if(menuItemA) {
  let menuItemTitle = [];
  $(menuItemA).each(function(i) {
    menuItemTitle[i] = $(menuItemA[i]).attr('title');
    if(menuItemTitle[i]) {
      $(menuItemA[i]).attr('title','');
      $('<span class="menu-item-title"></span>').text(menuItemTitle[i]).appendTo(menuItemA[i]);
    } else {
      console.log(false);
    }
  })
}