export const NETFLIX_LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const SIGN_IN_LOGO =
  "https://cdn.vectorstock.com/i/preview-1x/42/31/squid-game-character-design-vector-40014231.webp"
export const BG_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg"

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
}

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w200/"
export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY 