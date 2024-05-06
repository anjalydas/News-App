
const MainArticleImage = document.getElementById ('MainArticleImage')
const firstArticleTitle = document.getElementById ('articleTitle')
const firstArticleDescription = document.getElementById ('firstArticleDes')

fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-04-06&sortBy=publishedAt&apiKey=386710e6bd73496aa7ef1221f7a68432')
.then(response => response.json())
 .then(data => {
 const firstArticle = data.articles[0]
firstArticleTitle.innerHTML = firstArticle.title
firstArticleDescription.innerHTML = firstArticle.description
MainArticleImage.src = firstArticle.urlToImage    

  }
 )
   .catch(error => {
 console.error('Error fetching news:', error);
  news.innerHTML = "<p>Sorry, something went wrong while fetching the news.</p>";
  });
