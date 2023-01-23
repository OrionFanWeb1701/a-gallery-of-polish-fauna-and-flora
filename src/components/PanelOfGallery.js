import React from 'react';

import '../sass/PanelOfGallery.scss';

import closeIcon from '../images/close_icon.png';
import backIcon from '../images/back_icon.png';
import forwardIcon from '../images/forward_icon.png';

const PanelOfGallery = props => {
	const { position, setPosition, bigImg } = props;

	// Functions that mechanically handle the position of the photo

	const handleNextImg = () => {
		setPosition(position - 100);

		if (position <= (bigImg.length - 1) * -100) {
			setPosition(0);
		}
	};

	const handleBackImg = () => {
		setPosition(position + 100);

		if (position >= 0) {
			setPosition((bigImg.length - 1) * -100);
		}
	};

	const photosBig = bigImg.map(img => (
		<img
			className='panel-gallery__img--photo'
			src={img.name}
			alt={img.info}
			key={img.id}
			loading='lazy'
			style={{ transform: 'translateX(' + position + '%)' }}
		/>
	));

	return (
		<div className='panel-gallery'>
			<div className='panel-gallery__img'>
				{photosBig}
				<img
					className='panel-gallery__img--close'
					src={closeIcon}
					alt='ikona zamknij'
					onClick={props.closeBtn}
				/>
				<img
					className='panel-gallery__img--back'
					src={backIcon}
					alt='ikona cofnij'
					onClick={handleBackImg}
				/>
				<img
					className='panel-gallery__img--forward'
					src={forwardIcon}
					alt='ikona następne'
					onClick={handleNextImg}
				/>
			</div>
		</div>
	);
};

export default PanelOfGallery;
