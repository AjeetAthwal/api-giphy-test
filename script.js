const form = document.querySelector("#search-form");
const btn = document.querySelector("#random-giphy");
const img = document.querySelector("img");

const baseUrl = "https://api.giphy.com/v1/gifs/";

const APIKey = "7jtL7ys5EbsJngKhvLEuz7QV8UPTfKZY";
const APIExtension = "api_key=" + APIKey;

const handleGiphyTranslate = (searchValue) => {
  const translateUrl = baseUrl + "translate?";
  let locationSearch = "cats";

  if (searchValue !== undefined) locationSearch = searchValue;
  const locationExtension = "&s=" + locationSearch;

  let url = translateUrl + locationExtension + APIExtension;

  fetch(url, {
    mode: "cors",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    });
};

const handleGiphyRandom = () => {
  const translateUrl = baseUrl + "random?";

  let url = translateUrl + APIExtension;

  fetch(url, {
    mode: "cors",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    });
};

const handleForm = (e) => {
  e.preventDefault();
  const searchValue = e.target.elements["search"].value;
  handleGiphy(searchValue);
};


handleGiphyRandom();

form.addEventListener("submit", handleForm);

btn.addEventListener("click", handleGiphyRandom);
