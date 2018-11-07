import React from 'react';
import {IoIosMail} from 'react-icons/io';
import about from '../../images/about.jpg';

const Contact = () => {
	return (
		<div id='contact' className='f4 tc dark-gray grow inline-flex items-center ma2 tc br2 pa2'>
			<img className='br-pill fl' height={150} width={150} src={about} alt='carmen iancu'/>
			<IoIosMail color={'#fdb803'} size={30}/>
		  <a className='no-underline' href='mailto:carmen.iancu.mail@gmail.com'>carmen.iancu.mail@gmail.com</a>
		</div>
		)
}

export default Contact;