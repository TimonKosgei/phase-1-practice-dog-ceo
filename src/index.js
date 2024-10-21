console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener('DOMContentLoaded',() => {
    fetch(imgUrl)
    .then(res => res.json())
    .then(data => {
        let sources = data.message
        sources.forEach(url => {
            const container = document.getElementById('dog-image-container')
            let img = document.createElement('img')
            img.src = url;
            container.append(img)
        });
    })
    fetch(imgUrl)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let sources = data.message
        sources.forEach(url => {
            const ul = document.getElementById('dog-breeds')
            let img = document.createElement('img')
            img.src = url;
            ul.append(img)
        });
    })


})