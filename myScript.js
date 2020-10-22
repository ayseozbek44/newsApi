const search=document.querySelector('#search');
const popul=document.querySelector('#byPopularity');
const date=document.querySelector('#byDate');
const dateOf30DaysAgo = new Date('2020-09-22').toISOString();
const today = new Date(new Date().toLocaleDateString()).toISOString()
console.log(today)
console.log(dateOf30DaysAgo)


    document.getElementById('searchButton').addEventListener('click', () => {
       
        if(document.querySelector("#byDate").checked){  
            var url = 'https://newsapi.org/v2/everything?'+
            `from=${dateOf30DaysAgo}&`+
            `q=${search.value}&`+
            `sortBy=publishedAt&`+
            `apiKey=58d0bf5708804fe2b13d74d97ede0373`;  
            fetch(url)
            .then(response => response.json())
            .then(json => showNews(json))
            .catch(error => console.log('Authorization failed : ' + error.message));
          
  }

 else if(document.querySelector("#byPopularity").checked){
            
            console.log(search.value);

            var url = 'https://newsapi.org/v2/everything?'+
            `from=${dateOf30DaysAgo}&`+
            `q=${search.value}&`+
            `apiKey=58d0bf5708804fe2b13d74d97ede0373`;   
           
            fetch(url)
            .then(response =>response.json())
            .then(json => showNews(json))
            .catch(error => console.log('Authorization failed : ' + error.message));
          
    }
    else;
         
 })

 document.body.onload = ()=>{
    console.log("========")
    var url = 'https://newsapi.org/v2/top-headlines?'+
    `country=us&` +
    `apiKey=58d0bf5708804fe2b13d74d97ede0373`;  
    fetch(url).then(response => response.json()).then(json => showNews(json))
 }
let showNews = (obj)=>{
    let section = document.querySelector("#news");
    articles = obj.articles;
    section.innerHTML = "";
    for (const key in articles) {
        console.log(articles[key].source)
        section.innerHTML += 
        `<li class="articleContainer">
                   <img class="articleImage" src="${articles[key].urlToImage}" alt="">
                   <h3 class="articleHeadline">${articles[key].title}</h3>
                   <h2 class="articleDate">${new Date(articles[key].publishedAt).toLocaleDateString()}</h2>
                   <p>${articles[key].description}</p>
               </li>
               <br>`
       
}
}


     
    