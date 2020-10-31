var requestUrl = 'https://api.github.com/orgs/nodejs/repos';
var badRequestUrl = 'https://api.github.com/orgs/nodejddd/repad';

// Note this will work
fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

  // Note this will not work because the URL is broken
fetch(badRequestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
