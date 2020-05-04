
var articles = document.getElementsByTagName('article');
console.log(articles);

document.getElementById('btn').addEventListener('click', function() {
    document.getElementById('circle').classList.toggle("circle-light");
    document.getElementById('body').classList.toggle("body-light");
    document.getElementById('header').classList.toggle("header-light");
    
    for (var i = 0; i < articles.length; i++) { 
        articles[i].classList.toggle('article-light');
    }
});