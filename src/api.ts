import { Album, User } from "./types";

const API_KEY = "85ed10bed8eb55263e124be007528bfd";

export const getUser = async (username: string): Promise<User> => {
  const data = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=${username}&api_key=${API_KEY}&format=json`,
  ).then(res => res.json());

  return {
    name: data.user.name,
    image: data.user.image[2]["#text"],
  };
};

export const getUserAlbums = async (
  username: string,
): Promise<Array<Album>> => {
  const data = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${username}&api_key=${API_KEY}&format=json&limit=10`,
  ).then(res => res.json());

  const normalizeAlbum = (data: any): Album => ({
    name: data.name,
    url: data.url,
    image: data.image[2]["#text"],
    artist: data.artist.name,
    playcount: data.playcount,
  });

  return data.topalbums.album.map(normalizeAlbum);
};
