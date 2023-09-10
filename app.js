/**const accessKey = "sk-Ujyr64cc1425640df1758";

const formEl = document.querySelector("searchBar");
const inputEl = document.getElementById("searchText");
const searchRes = document.querySelector(".searchResult");

let inputData = "";

async function searchPlant() {
    inputData = inputEl.value;
    alert(inputData);
    const url = `https://perenual.com/api/species-list?key=${accessKey}&q=${inputData}`;
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
    results.map((result) => {
        const imgWrap = document.createElement('div');
        imgWrap.classList.add("searchResult");
        const imag = document.createElement('img');
        imag.src = result.urls.medium_url;
        const text = document.createElement('p1');
        text.textContent = result.common_name;

        imgWrap.appendChild(imag);
        imgWrap.appendChild(text);
        imgWrap.appendChild(imgWrap);
    })
}


formEl.addEventListener("submit", (event) => {
    alert("cringe!");
})
*/
const accessKey = "ARRis8D9soRapa7zO8WNfZ-QnLFEYtdM0ngNsagTqAM";
const formEl = document.querySelector('#listen');

async function searchPlant() {
    try {
    let input = document.querySelector('#searchText').value;
    const url = `https://trefle.io/api/v1/plants/search?token=${accessKey}&q=${input}&limit=1`;
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