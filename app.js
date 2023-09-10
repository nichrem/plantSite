const accessKey = "ARRis8D9soRapa7zO8WNfZ-QnLFEYtdM0ngNsagTqAM";
const formEl = document.querySelector('#listen');

var url;

async function searchPlant() {
    try {
    let input = document.querySelector('#searchText').value;
    url = `https://trefle.io/api/v1/plants/search?token=${accessKey}&q=${input}&limit=1`;
    fetch("http://localhost:3000/")
    .then(res => res.json())
    .then(data => {
        document.querySelector('#image').src=data.image_url;
        document.querySelector('#text').textContent=data.common_name;
    })
    } catch(e) {
        alert(e.message);
    }
}

formEl.addEventListener("click", (event) => {
    event.preventDefault();
    searchPlant();
})