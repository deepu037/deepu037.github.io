var image = document.getElementById('img')

image.onload = function(){
    var article = document.getElementsByClassName('article')[0];
    article.className = 'article slide_top';
}
