var image = document.getElementById('img')
var article = document.getElementsByClassName('article')[0];
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
