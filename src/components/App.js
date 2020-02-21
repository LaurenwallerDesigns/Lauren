import React from 'react';
import '../index.css';
import TitleSection from './Home/Header/TitleSection.js';
import FlexBox from './Home/FlexBox';

function App(props) {
  return (
 <React.Fragment className="main-container">
    <TitleSection />
  	<FlexBox />
 </React.Fragment>

  );
}

export default App;

