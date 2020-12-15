function convertToJason(response) {
    return response.json();
}
function processData(data) {
    console.log(data);
    document.querySelector("#customername").innerHTML = data.naam;
}
fetch("phpopdracht.php")
    .then(convertToJason)
    .then(processData)
    .catch(function (err) { console.log('Fetch Error :-S', err) });
const input = document.querySelector('.input');
const newslist = document.querySelector('.news-list');
function retrieve() {
    const apikey = 'e718d4bd6664491b9ac0d8602d44f815'
    let topic = input.value;
    let url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apikey}`
    console.log(url);
    fetch(url).then((res) => {
        return res.json()
    }).then((data) => {
        console.log(data.articles);
        for (let i = 0; i < data.articles.length; i++) {
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.setAttribute('href', data.articles[i].url);
            a.setAttribute('target', '_blank');
            a.textContent = data.articles[i].title;
            li.appendChild(a);
            newslist.appendChild(li);
        }
    })
}