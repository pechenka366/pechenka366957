let = offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function(){
    offset += 728;
    if(offset > 1456){
        offset = 0; 
        }
    sliderLine.style.left = -offset + 'px';
})

document.querySelector('.slider-nazad').addEventListener('click', function(){
    offset -= 728;
    if(offset < 0){
        offset = 1456; 
        }
    sliderLine.style.left = -offset + 'px';
})