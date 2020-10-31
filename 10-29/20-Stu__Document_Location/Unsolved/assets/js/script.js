var badRequestUrl = 'https://api.github.com/unicorns';
var redirectUrl = './404.html';

fetch(badRequestUrl).then(function (response) {
  if (response.status === 404){
    // (response. status === 200) or 
    document.location.replace.(redirectUrl);
  } else {
    return response.json
  }
  // Use a conditional to check the response status.
  // If that status equals the conditional, then redirect to the 404 page.
});
