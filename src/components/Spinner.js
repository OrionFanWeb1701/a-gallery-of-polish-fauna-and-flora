import React from 'react';

import '../sass/Spinner.scss';

const Spinner = () => {
	return (
		<div className='spinner__box'>
			<div className='spinner__border'></div>
			<div className='spinner__loading'></div>
		</div>
	);
};

export default Spinner;
