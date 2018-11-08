import React from 'react';
import {IoIosMail} from 'react-icons/io';
import about from '../../images/about.jpg';

const Contact = () => {
	return (
		<div id='contact' className='f4 dark-gray items-center grow pa3 br2'>
			<img className='br-pill fc' height={100} width={100} src={about} alt='carmen iancu'/>
			<div className='inline-flex'>
				<IoIosMail color={'#fdb803'} size={30}/>
		  		<a className='no-underline' href='mailto:carmen.iancu.mail@gmail.com'>carmen.iancu.mail@gmail.com</a>
			</div>
		</div>
		)
}

export default Contact;