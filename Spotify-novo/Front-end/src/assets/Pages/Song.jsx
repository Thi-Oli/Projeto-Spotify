import React from "react";
import Player from "../../components/Player";
import { Link, useParams } from "react-router";
import { songsArray } from "../database/songs";
import { artistArray } from "../database/artists";

const Song = () => {
  const { id } = useParams();

  const { image, name, artist, duration, audio, index } = songsArray.filter(
    (currentSongObj) => currentSongObj._id === id
  )[0];

  const artistObj = artistArray.filter(
    (currentArtistObj) => currentArtistObj.name === artist
  )[0];

  // console.log(artistId);

  // Botão PLAYER que leva para próxima música.

  const songsArrayFromArtist = songsArray.filter(
    (currentSongsObj) => currentSongsObj.artist === artist
  );

  const randomIndex = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );
  const randomIndex2 = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );
  const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id;
  const randomId2FromArtist = songsArrayFromArtist[randomIndex2]._id;

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={image} alt={`Imagem da Música ${name}`} />
        </div>
      </div>
      <div className="song__bar">
        <div className="song__artist-image">
          <Link to={`/artist/${artistObj._id}`} className="song__artist-image">
            <img
              width={75}
              heigth={75}
              src={artistObj.image}
              alt={`Imagem do Artista ${artist}`}
            />
          </Link>
        </div>

        <Player
          duration={duration}
          randomIdFromArtist={randomIdFromArtist}
          randomId2FromArtist={randomId2FromArtist}
          audio={audio}
        />

        <div>
          <p className="song__name">{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
