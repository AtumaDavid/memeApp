let meme = document.getElementById("meme");
let title = document.getElementById("title");
let btn = document.getElementById("btn");

//API URL
//JSON API for a random meme scraped from reddit.
let url = "https://meme-api.com/gimme/";

//Array of subreddits
let subreddits = ["memes", "me_irl", "dankmemes"];

//function to get random meme
let getMeme = () => {
  //choose a random subreddit from the subreddit array
  let randomSubreddit =
    subreddits[Math.floor(Math.random() * subreddits.length)];
  //   console.log(randomSubreddit);
  //fetch data from api
  fetch(url + randomSubreddit)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);

      //display meme image and title only after image loads
      let memeImg = new Image();
      memeImg.onload = () => {
        meme.src = data.url;
        title.innerHTML = data.title;
      };
      memeImg.src = data.url;
      //   title.innerHTML - data.title;
    });
};

//call the getMeme() on button click and on window load
btn.addEventListener("click", getMeme);
window.addEventListener("load", getMeme);
