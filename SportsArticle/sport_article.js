var xhr = new XMLHttpRequest();
var url = './sport_article.json';

xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function() {
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');

    articles.forEach(function(article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');
  
        var title = document.createElement('h2');
        title.textContent = article.title;
  
        var description = document.createElement('p');
        description.textContent = article.description;
  
        var scoreHeader = document.createElement('h3');
        scoreHeader.textContent = 'Scores:';
  
        var scoreList = document.createElement('ul');
        article.scores.forEach(function(score) {
          var listItem = document.createElement('li');
          listItem.textContent = score;
          scoreList.appendChild(listItem);
        });
  
        var standingsHeader = document.createElement('h3');
        standingsHeader.textContent = 'Benefits:';
  
        var standingsList = document.createElement('ul');
        article.standings.forEach(function(standing) {
          var listItem = document.createElement('li');
          listItem.textContent = standing;
          standingsList.appendChild(listItem);
        });
  
        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(scoreHeader);
        articleDiv.appendChild(scoreList);
        articleDiv.appendChild(standingsHeader);
        articleDiv.appendChild(standingsList);
  
        articlesDiv.appendChild(articleDiv);
      });
}

xhr.send();