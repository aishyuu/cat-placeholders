export default function pic_finder() {
    const width = document.querySelector('#width').value;
    const height = document.querySelector('#height').value;

    const catContainer = document.querySelector('.catContainer');
    if(catContainer.lastElementChild == null) {
        console.log('loading');
    } else {
        catContainer.removeChild(catContainer.lastElementChild);
    }

    const loading = document.createElement('h1');
    loading.classList = 'loadingText';
    loading.innerHTML = 'Loading';
    catContainer.appendChild(loading);

    fetch(`http://placekitten.com/${width}/${height}`)
        .then(function(response) {
            return response;
        })
        .then(function(response) {
            console.log(response.url);
            const newImage = document.createElement('img');
            newImage.src = response.url;
            newImage.alt = 'Kitty cat :3';
            newImage.classList = 'catImage';
            catContainer.removeChild(catContainer.lastElementChild);
            catContainer.appendChild(newImage);
        })
        .catch((error) => {
            console.log("Some error happened oh god!");
        })
};