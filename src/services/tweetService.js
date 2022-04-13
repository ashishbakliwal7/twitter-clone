import { authHeader } from "../helpers/auth-header";

function getFeed() {
  let user = JSON.parse(localStorage.getItem("user"));

  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json", Token: user.token },
  };

  return fetch(`http://localhost:4000/tweet/feed`, requestOptions)
    .then(handleResponse)
    .then((tweet) => {
      return [tweet][0].data;
    });
}

function postTweet(tweet) {
  let user = JSON.parse(localStorage.getItem("user"));

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", Token: user.token },
    body: JSON.stringify({ tweet: tweet }),
  };

  return fetch(`http://localhost:4000/tweet`, requestOptions).then(
    handleResponse
  );
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
export const tweetService = {
  getFeed,
  postTweet,
};
