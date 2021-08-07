const port = 3000;
var URLKeys = new Map();

exports.createURL = (longURL, custom) => {
  const shortURL = "http://localhost:" + port + "/" + custom;
  URLKeys.set(shortURL, longURL);
  console.log("Created short URL: " + shortURL);
  console.log({ URLKeys });
  return shortURL;
};
exports.getShortURL = (shortURL) => {
  if (!URLKeys.has(shortURL)) return null;
  return URLKeys.get(shortURL);
};
