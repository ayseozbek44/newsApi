const search=document.querySelector('#search');
const popul=document.querySelector('#byPopularity');
const date=document.querySelector('#byDate');
const dateOf30DaysAgo = new Date('2020-09-22').toISOString();


    function callnews(){
        
        if(search.value == ""){
            var url = 'http://newsapi.org/v2/everything?'+
            `from=${dateOf30DaysAgo}`+
            `sortBy=${sortKey}&`+
            `apiKey=58d0bf5708804fe2b13d74d97ede0373`;

        }
        else{
            var url = 'http://newsapi.org/v2/everything?'+
            `from=${dateOf30DaysAgo}&`+
            `q=${search.value}&`+
            `sortBy=${sortKey}&`+
            `apiKey=58d0bf5708804fe2b13d74d97ede0373`;   
        }
        fetch(url)
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(error => console.log('Authorization failed : ' + error.message));

}


    document.getElementById('searchButton').addEventListener('click', () => {
       
        if(document.querySelector("#byDate").checked){
            console.log(search.value);
             let sortKey = "publishedAt"
            var url = 'http://newsapi.org/v2/everything?'+
            `from=${dateOf30DaysAgo}&`+
            `q=${search.value}&`+
            `sortBy=${sortKey}&`+
            `apiKey=58d0bf5708804fe2b13d74d97ede037`;   
            fetch(url)
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(error => console.log('Authorization failed : ' + error.message));
          
  }

 else if(document.querySelector("#byPopularity").checked){
            
            console.log(search.value);

            var url = 'http://newsapi.org/v2/everything?'+
            `from=${dateOf30DaysAgo}&`+
            `q=${search.value}&`+
            `apiKey=58d0bf5708804fe2b13d74d97ede0373`;   
           
            fetch(url)
            .then(response =>response.json())
            .then(json => showNews(json))
            .catch(error => console.log('Authorization failed : ' + error.message));
          
    }
    else{
        var url = 'http://newsapi.org/v2/everything?'+
        `from=${dateOf30DaysAgo}&`+
        `q=${search.value}&`+
        `sortBy=${sortKey}&`+
        `apiKey=58d0bf5708804fe2b13d74d97ede0373`; 
    }
         
 })
let showNews = (obj)=>{
    let section = document.querySelector("#news");
    articles = obj.articles;
    for (const key in articles) {
        console.log(articles[key])
        section.innerHTML += `
        <li id="anime"><h3>${articles[key].title}</h3><p>${articles[key].description}</p></li><li>${new Date(articles[key].publishedAt).toLocaleDateString()}</li>`
       
}
}


     
    