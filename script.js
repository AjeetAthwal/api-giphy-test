let baseUrl = "https://api.giphy.com/v1/gifs/translate?";

let locationSearch = "cats";
let locationExtension = "s=" + locationSearch;

let APIKey = "7jtL7ys5EbsJngKhvLEuz7QV8UPTfKZY";
let APIExtension = "&api_key=" + APIKey;

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

const img = document.querySelector("img");
