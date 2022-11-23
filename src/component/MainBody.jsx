import React from 'react';
import Header from './Header';
import Playlist from './Playlist';
import Unique from './Unique';
import Focus from './Focus';
import Mood from './Mood';
import NewRealease from './NewRealease';
import Footer from './Footer';
import FooterSocials from './FooterSocials';

const MainBody = () => {
  return (
    <div className="mainbody">
      <Header />
      <div className="mainbody__content">
        <div className="mainbody__box1">
          <Playlist />
        </div>
        <div className="mainbody__box1">
          <Unique />
        </div>
        <div className="mainbody__box1">
          <Focus />
        </div>
        <div className="mainbody__box1">
          <Mood />
        </div>
        <div className="mainbody__box1">
          <NewRealease />
        </div>
        <div className="mainbody__social">
          <FooterSocials />
        </div>
        <div className="mainbody__footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainBody;
