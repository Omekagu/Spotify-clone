import React from 'react';
import ArtistBox from './ArtistBox';

const Playlist = () => {
  return (
    <div>
      <div className="top">
        <h2>spotify playlists</h2>
        <h3>see all</h3>
      </div>
      <div className="mainbody__artist">
        <ArtistBox
          src="https://cdns-images.dzcdn.net/images/cover/87468622c8e7ac9dce7b541be136aa4c/500x500.jpg"
          info="artist of the year"
          description="Nicki minaj is on top of the top 50!"
        />
        <ArtistBox
          src="https://cdns-images.dzcdn.net/images/cover/87468622c8e7ac9dce7b541be136aa4c/500x500.jpg"
          info="artist of the year"
          description="Nicki minaj is on top of the top 50!"
        />
        <ArtistBox
          src="https://cdns-images.dzcdn.net/images/cover/87468622c8e7ac9dce7b541be136aa4c/500x500.jpg"
          info="artist of the year"
          description="Nicki minaj is on top of the top 50!"
        />
        <ArtistBox
          src="https://cdns-images.dzcdn.net/images/cover/87468622c8e7ac9dce7b541be136aa4c/500x500.jpg"
          info="artist of the year"
          description="Nicki minaj is on top of the top 50!"
        />
        <ArtistBox
          src="https://cdns-images.dzcdn.net/images/cover/87468622c8e7ac9dce7b541be136aa4c/500x500.jpg"
          info="artist of the year"
          description="Nicki minaj is on top of the top 50!"
        />
        <ArtistBox
          src="https://cdns-images.dzcdn.net/images/cover/87468622c8e7ac9dce7b541be136aa4c/500x500.jpg"
          info="artist of the year"
          description="Nicki minaj is on top of the top 50!"
        />
      </div>
    </div>
  );
};

export default Playlist;
