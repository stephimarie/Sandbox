// music should be an object with title, artist, and album properties
const music = [
  {title: "i love you, baby", artist: "surf mesa", album: "ily"};
[]

// Write code between the <div> tags to output the data from the music object above.
// Use an h2 element for the title and a p element for artist and title
const songSnippet = `
  <div class="song">
  <h2> ${title}</h2>
  <p>${artist}, ${album}</p>
  </div>
`;

const element = document.getElementById("music");
element.innerHTML = songSnippet;

