
const baseUrl = "http://localhost:3000"
const container = document.querySelector('.container')
fetch(`${baseUrl}/user`).then((res) => res.json()).then((res) => {
    console.log(res);

    res.map((data) => {
        container.innerHTML += `
            <div key=${data.id} class="post-1">
                <a href="" class="card-img">
                    <img src=${data.src} alt="" />
                </a>
                <p>${data.text}</p>
            </div>
            
                `
    })
})

