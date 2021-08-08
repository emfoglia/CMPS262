fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=pet%20guinea%20pigs&api-key=nbPIv6AXZ2Pt0fjBNEpk2NHs8CtbMrqf')
.then(response => {
  return reponse.json()
})
.then(data => {
console.log(data.response.docs[0].headline.main)
})
.catch(err => {
  console.log("oops!");
});
