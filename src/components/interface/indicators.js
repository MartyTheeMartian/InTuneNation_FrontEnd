import React, { Component } from 'react';
import TuningIndicator from './tuningIndicator';
import NoteIndicator from './noteIndicator';


const Indicators = () => {
  return (
    <div id="indicators" className="intro-interface-indicators">
      <TuningIndicator />
      <NoteIndicator />
    </div>
  );
};

export default Indicators;
