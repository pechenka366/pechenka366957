
/*
var time = 2,
  cc = 1;
$(window).scroll(function() {
  $('#counter').each(function() {
    var
      cPos = $(this).offset().top,
      topWindow = $(window).scrollTop();
    if (cPos < topWindow + 200) {
      if (cc < 2) {
        $(".number").addClass("viz");
        $('div').each(function() {
          var
            i = 1,
            num = $(this).data('num'),
            step = 1000 * time / num,
            that = $(this),
            int = setInterval(function() {
              if (i <= num) {
                that.html(i);
              } else {
                cc = cc + 2;
                clearInterval(int);
              }
              i++;
            }, step);
        });
      }
    }
  });
});





$(document).ready(function(){

    let time = 2;
    $("stats_item").each(function(){
        $("div").each(function(){
            let i = 1,
                numsc = $(this).data("numsc"),
                step = 1000 * time / numsc,
                that = $(this),
                int = setInterval(function(){
                    if (i <= numsc){
                        that.html(i);
                    }
                    else{
                        clearInterval(int);
                    }
                    i++
                }, step);
        });
    });
    
};




/*
$(document).ready(function(){
    
const time = 3500;
const step = 100;

function number(num, elem){
    let j = document.querySelector('.stats_item .stats_num' + elem);
    l = 0;
    let m = Math.round(time/(number/step))
    let inter = setInterval(() => {
        l += max;
        if (l == number){
            clearInterval(inter);
        }
    })
};

};
*/