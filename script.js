const form = document.querySelector("#search-form");
const img = document.querySelector("img");

const baseUrl = "https://api.giphy.com/v1/gifs/translate?";

const APIKey = "7jtL7ys5EbsJngKhvLEuz7QV8UPTfKZY";
const APIExtension = "&api_key=" + APIKey;

const handleGiphy = (searchValue) => {
  let locationSearch = "cats";

  if (searchValue !== undefined) locationSearch = searchValue;
  const locationExtension = "s=" + locationSearch;

  let url = baseUrl + locationExtension + APIExtension;

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

handleGiphy();

form.addEventListener("submit", handleForm);
