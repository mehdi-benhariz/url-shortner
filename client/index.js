const inpt1 = document.querySelector("#url");
const inpt2 = document.querySelector("#search");
const btn1 = document.querySelector("#submit");
const btn2 = document.querySelector("#search");
const result = document.querySelector("#result");

console.log("index.js loaded");
console.log(inpt1.innerHTML);

const getURL = async () => {
  const res = await fetch("http://localhost:3000/generate-url", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      longURL: "https://www.youtube.com/watch?v=9gCLyBlEGOw",
      custom: "one",
    }),
  });
  const result = await res.json();
  return result;
};

const search = async () => {
  const res = await fetch("http://localhost:3000/", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      longURL: "https://www.youtube.com/watch?v=9gCLyBlEGOw",
      custom: "one",
    }),
  });
  const result = await res.json();
  return result;
};

btn1.addEventListener("click", async () => {
  const shortURL = await getURL();
  console.log(shortURL);
  result.innerHTML = shortURL;
});

btn2.addEventListener("click", async () => {});
