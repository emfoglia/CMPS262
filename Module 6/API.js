  $(document).ready(function(){
    $('#searchbtn').click(function(){
      searchNYT();
    })
  function searchNYT(){
    $.ajax({
      url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
      dataType: 'json',
      type: 'GET',
      data:{
        q:$('#txtbox').val(),
        'api-key': 'nbPIv6AXZ2Pt0fjBNEpk2NHs8CtbMrqf',
        part: 'docs'
      }
    }).done(function(data){
      var html = "";
      for(var i = 0; i < data.response.docs.length; i++){
        html += '<div><div class="title">'+ data.response.docs[i].headline.main +'</div>';
        html += '<div><div class="abstract">'+ data.response.docs[i].abstract +'</div>';
        html += '<div><div class="url">' + data.response.docs[i].web_url + '</div>';
        html += '<br></div>';
      }
      $('#output').html(html);
    })
  }
})
