const btn = document.querySelector("#btn");
const img = document.querySelector("#img");

btn.addEventListener("click", () => {
  img.classList.toggle("show");
});

document
  .querySelectorAll(".theme")
  .forEach((theme) =>
    theme.addEventListener(
      "click",
      () => (document.querySelector("body").className = theme.id),
    ),
  );

const apiQuote = "http://api.quotable.io/random";
const apiImage = "https://random.imagecdn.app/1600/1000";

const fetchApi = async (url) => {
  const response = await fetch(url);
  return response.json();
};

const getQuote = () => {
  const quote = fetchApi(apiQuote);
  document.querySelector("#quote").textContent = quote.content;
  document.querySelector("#author").textContent = quote.author;
  document.querySelector(selectors);
};

const getImage = () => {
  const image = fetchApi(apiImage);
  document.querySelector("#img").src = image.url;
};

document.querySelector("#new-quote").addEventListener("click", () => {
  getQuote();
  getImage();
});
