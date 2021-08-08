var urlBase= "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
var apiKey="&api-key=nbPIv6AXZ2Pt0fjBNEpk2NHs8CtbMrqf";
var keyword="User Input";
var url = urlBase+keyword+apiKey;

function setup(){
  noCanvas();
  loadJSON(url, getData);
}

function getData(data){
  var articles = data.response.docs;

  for(var i = 0; i < articles.length; i++){
    createElement('h1', articles[i].headline.main);
    createP(articles[i].snippet);
    createP(articles[i].lead_paragraph)
    createP(articles[i].web_url);
  }
}
