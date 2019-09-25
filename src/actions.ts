import { state } from "./model";

const API_KEY = "85ed10bed8eb55263e124be007528bfd";

// const fetchTopArtists = async (): Promise<Artist[]> => {
//   const data = await fetch(
//     `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_KEY}&format=json&limit=10`,
//   ).then(res => res.json());

//   console.log(data);
//   const artists = data.artists.artist.map(d => jsonToAritst(d));
//   return artists;
// };

// export const loadArtists = async () => {
//   state.artists = await fetchTopArtists();
// };
