import React from 'react';

import '../sass/Main.scss';

const Main = props => {
	const photos = props.smallImg.map(img => (
		<div
			className='main__img'
			key={img.id}>
			<img
				className='main__img--photo'
				id={img.info}
				src={img.name}
				alt={img.info}
				data-translate={img.translate}
				loading='lazy'
				onClick={props.togglePanel}
			/>
		</div>
	));

	return (
		<>
			<main className='main'>
				<div className='container'>
					<div className='main__images'>{photos}</div>
				</div>
			</main>
		</>
	);
};

export default Main;
