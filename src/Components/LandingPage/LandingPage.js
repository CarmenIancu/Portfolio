import React from 'react';
import Navbar from '../Navbar/Navbar';
import Name from '../Name/Name';
import Links from '../Links/Links';
import './LandingPage.css'

const LandingPage =() => {
	return (
<article id='top'>
  <div className='vh-100 dt w-100 tc bg-dark-gray white cover no-repeat center'>
    <div className='dtc v-mid dark-gray'> 
    	<Navbar  />
  	<Name />
        <Links />
    </div>
   </div>
</article>
	)
}

export default LandingPage;
