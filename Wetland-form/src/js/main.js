
window.onload=() => {
    logMovies();
}


async function logMovies() {
    const response = await fetch("http://localhost:3000/user");
    const movies = await response.json();
    const tbody = document.querySelector("tbody")
    movies.forEach(user => {
        const tr = document.createElement("tr")
        for (const key in user) {
            const td = document.createElement("td")
            if (Object.hasOwnProperty.call(user, key)) {
                const data = user[key];
                
              td.innerHTML=  `<input class="form-control" value ="${data}"/>`
            }
            tr.appendChild(td)
        } 
        tbody.appendChild(tr)
    });

  } 


  