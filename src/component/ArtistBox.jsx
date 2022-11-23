import { PlayArrow } from '@mui/icons-material';
import React from 'react';

const ArtistBox = ({ src, info, description }) => {
  return (
    <div className="artist">
      <img src={src} alt="cover" className="artist__img" />
      <PlayArrow className="artist__play" />
      <h2 className="artist__info">{info}</h2>
      <p className="artist__description">{description}</p>
    </div>
  );
};

export default ArtistBox;
