const inpt1 = document.querySelector("#url");
const inpt2 = document.querySelector("#search-inpt");
const inpt3 = document.querySelector("#custom");
const btn1 = document.querySelector("#submit");
const btn2 = document.querySelector("#search-btn");
const result = document.querySelector("#result");

console.log("index.js loaded");
console.log(inpt1.innerHTML);

const getURL = async (longURL, custom) => {
  const res = await fetch("http://localhost:3000/generate-url", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      longURL,
      custom,
    }),
  });
  const result = await res.json();
  return result;
};

const search = async (ID) => {
  const res = await fetch("http://localhost:3000/" + ID, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};

btn1.addEventListener("click", async () => {
  const longURL = inpt1.value;
  const custom = inpt3.value;
  const shortURL = await getURL(longURL, custom);
  console.log(shortURL);
  result.innerHTML = shortURL;
});

btn2.addEventListener("click", async () => {
  console.log("searching");
  const ID = inpt2.value.substring(22);
  console.log(ID);
  search(ID);
});
