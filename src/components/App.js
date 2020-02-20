import React from 'react';
import '../index.css';
import TitleSection from './TitleSection';
import FlexBox from './FlexBox';

function App(props) {
  return (
 <React.Fragment className="main-container">
    <TitleSection />
  	<FlexBox />
 </React.Fragment>

  );
}

export default App;
