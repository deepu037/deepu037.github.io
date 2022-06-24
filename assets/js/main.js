var image = document.getElementById('img')
var article = document.getElementsByClassName('article')[0];
var next = document.getElementsByClassName('fade')[0];
// console.log(article.id);

// image.onload = function(){

//     if(article.id == 'top'){
//         article.className = 'article slide_top';
//     }
//     else if(article.id == 'left'){
//         article.className = 'article slide_left';
//     }
// }

window.addEventListener('load', function(){
    if(article.id == 'top'){
        article.className = 'article slide_top';
    }
    else if(article.id == 'left'){
        article.className = 'article slide_left';
    }
})

article.addEventListener('animationend', ()=>{
    next.className = 'fadeCus'
})