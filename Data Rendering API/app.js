

fetch('https://jsonplaceholder.typicode.com/photos')
    .then(data => data.json())

    .then(data => {
        for (let i = 0; i < 20; i++) {
            // console.log(data[i].albumId,data[i].id,data[i].title,data[i].url,data[i].thumbnailUrl)
            let main = document.querySelector('#main');
            main.innerHTML += ` <div class="card row d-flex px-2 py-2" style="width: 18rem;">
            <img src="${data[i].thumbnailUrl}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${data[i].id}</h5>
              <p class="card-text">${data[i].url}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>`
        }
    }
    )
    .catch(err => console.log(err));