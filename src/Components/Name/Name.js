import React from 'react';
import ReactVivus from 'react-vivus';
import svg from './name.svg';
 
const Name = () => (
	<div className='tc center'>
  <ReactVivus
    id='foo'
    option={{
      file: svg,
      animTimingFunction: 'EASE',
      duration:600,
      type: 'oneByOne',
      onReady: console.log
    }}
    style={{ height: '100vh', width: '100%', overflow:'hidden' }}
    callback={console.log}
  />
  </div>
);
export default Name;