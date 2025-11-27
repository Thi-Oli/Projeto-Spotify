import { artistArray } from "../../Front-end/src/assets/database/artists.js";
import { songsArray } from "../../Front-end/src/assets/database/songs.js";
import { db } from "./conect.js";

const newArtistsArray = artistArray.map((currentArtistObj) => {
  const newArtistObj = { ...currentArtistObj };
  delete newArtistObj.id;

  return newArtistObj;
});

const newSongsArray = songsArray.map((currentSongObj) => {
  const newArSongObj = { ...currentSongObj };
  delete newArSongObj.id;

  return newArSongObj;
});

const responseSongs = await db.collection("songs").insertMany(newSongsArray);

const responseArtists = await db
  .collection("artists")
  .insertMany(newArtistsArray);

// console.log(responseSongs);
// console.log(responseArtists);
