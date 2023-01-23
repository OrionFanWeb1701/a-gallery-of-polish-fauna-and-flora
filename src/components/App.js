import React, { useState } from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PanelOfGallery from './PanelOfGallery';

import '../sass/App.scss';

//Import small images

import imageSmall1 from '../images/gallery_small/1.webp';
import imageSmall2 from '../images/gallery_small/2.webp';
import imageSmall3 from '../images/gallery_small/3.webp';
import imageSmall4 from '../images/gallery_small/4.webp';
import imageSmall5 from '../images/gallery_small/5.webp';
import imageSmall6 from '../images/gallery_small/6.webp';
import imageSmall7 from '../images/gallery_small/7.webp';
import imageSmall8 from '../images/gallery_small/8.webp';
import imageSmall9 from '../images/gallery_small/9.webp';
import imageSmall10 from '../images/gallery_small/10.webp';
import imageSmall11 from '../images/gallery_small/11.webp';
import imageSmall12 from '../images/gallery_small/12.webp';
import imageSmall13 from '../images/gallery_small/13.webp';
import imageSmall14 from '../images/gallery_small/14.webp';
import imageSmall15 from '../images/gallery_small/15.webp';
import imageSmall16 from '../images/gallery_small/16.webp';
import imageSmall17 from '../images/gallery_small/17.webp';
import imageSmall18 from '../images/gallery_small/18.webp';
import imageSmall19 from '../images/gallery_small/19.webp';
import imageSmall20 from '../images/gallery_small/20.webp';

// Import big images

import imageBig1 from '../images/gallery_big/1.webp';
import imageBig2 from '../images/gallery_big/2.webp';
import imageBig3 from '../images/gallery_big/3.webp';
import imageBig4 from '../images/gallery_big/4.webp';
import imageBig5 from '../images/gallery_big/5.webp';
import imageBig6 from '../images/gallery_big/6.webp';
import imageBig7 from '../images/gallery_big/7.webp';
import imageBig8 from '../images/gallery_big/8.webp';
import imageBig9 from '../images/gallery_big/9.webp';
import imageBig10 from '../images/gallery_big/10.webp';
import imageBig11 from '../images/gallery_big/11.webp';
import imageBig12 from '../images/gallery_big/12.webp';
import imageBig13 from '../images/gallery_big/13.webp';
import imageBig14 from '../images/gallery_big/14.webp';
import imageBig15 from '../images/gallery_big/15.webp';
import imageBig16 from '../images/gallery_big/16.webp';
import imageBig17 from '../images/gallery_big/17.webp';
import imageBig18 from '../images/gallery_big/18.webp';
import imageBig19 from '../images/gallery_big/19.webp';
import imageBig20 from '../images/gallery_big/20.webp';

// Main component

const App = () => {
	const imagesSmall = [
		{
			id: 1,
			name: imageSmall1,
			info: 'image1',
			translate: 0,
		},
		{
			id: 2,
			name: imageSmall2,
			info: 'image2',
			translate: -100,
		},
		{
			id: 3,
			name: imageSmall3,
			info: 'image3',
			translate: -200,
		},
		{
			id: 4,
			name: imageSmall4,
			info: 'image4',
			translate: -300,
		},
		{
			id: 5,
			name: imageSmall5,
			info: 'image5',
			translate: -400,
		},
		{
			id: 6,
			name: imageSmall6,
			info: 'image6',
			translate: -500,
		},
		{
			id: 7,
			name: imageSmall7,
			info: 'image7',
			translate: -600,
		},
		{
			id: 8,
			name: imageSmall8,
			info: 'image8',
			translate: -700,
		},
		{
			id: 9,
			name: imageSmall9,
			info: 'image9',
			translate: -800,
		},
		{
			id: 10,
			name: imageSmall10,
			info: 'image10',
			translate: -900,
		},
		{
			id: 11,
			name: imageSmall11,
			info: 'image11',
			translate: -1000,
		},
		{
			id: 12,
			name: imageSmall12,
			info: 'image12',
			translate: -1100,
		},
		{
			id: 13,
			name: imageSmall13,
			info: 'image13',
			translate: -1200,
		},
		{
			id: 14,
			name: imageSmall14,
			info: 'image14',
			translate: -1300,
		},
		{
			id: 15,
			name: imageSmall15,
			info: 'image15',
			translate: -1400,
		},
		{
			id: 16,
			name: imageSmall16,
			info: 'image16',
			translate: -1500,
		},
		{
			id: 17,
			name: imageSmall17,
			info: 'image17',
			translate: -1600,
		},
		{
			id: 18,
			name: imageSmall18,
			info: 'image18',
			translate: -1700,
		},
		{
			id: 19,
			name: imageSmall19,
			info: 'image19',
			translate: -1800,
		},
		{
			id: 20,
			name: imageSmall20,
			info: 'image20',
			translate: -1900,
		},
	];

	const imagesBig = [
		{
			id: 1,
			name: imageBig1,
			info: 'image1',
		},
		{
			id: 2,
			name: imageBig2,
			info: 'image2',
		},
		{
			id: 3,
			name: imageBig3,
			info: 'image3',
		},
		{
			id: 4,
			name: imageBig4,
			info: 'image4',
		},
		{
			id: 5,
			name: imageBig5,
			info: 'image5',
		},
		{
			id: 6,
			name: imageBig6,
			info: 'image6',
		},
		{
			id: 7,
			name: imageBig7,
			info: 'image7',
		},
		{
			id: 8,
			name: imageBig8,
			info: 'image8',
		},
		{
			id: 9,
			name: imageBig9,
			info: 'image9',
		},
		{
			id: 10,
			name: imageBig10,
			info: 'image10',
		},
		{
			id: 11,
			name: imageBig11,
			info: 'image11',
		},
		{
			id: 12,
			name: imageBig12,
			info: 'image12',
		},
		{
			id: 13,
			name: imageBig13,
			info: 'image13',
		},
		{
			id: 14,
			name: imageBig14,
			info: 'image14',
		},
		{
			id: 15,
			name: imageBig15,
			info: 'image15',
		},
		{
			id: 16,
			name: imageBig16,
			info: 'image16',
		},
		{
			id: 17,
			name: imageBig17,
			info: 'image17',
		},
		{
			id: 18,
			name: imageBig18,
			info: 'image18',
		},
		{
			id: 19,
			name: imageBig19,
			info: 'image19',
		},
		{
			id: 20,
			name: imageBig20,
			info: 'image20',
		},
	];

	// States that determine the activity of the gallery panel and the position of photos in the panel

	let [active, setActive] = useState(false);
	let [position, setPosition] = useState(0);

	// The main function that modifies both states

	const handleTogglePanel = e => {
		const clickImg = parseInt(e.target.getAttribute('data-translate'));

		document.body.classList.toggle('active');

		setActive(prevState => !prevState);
		setPosition(clickImg);
	};

	return (
		<div className='App'>
			<div className='hero_shadow'></div>
			<Header />
			<Main
				togglePanel={handleTogglePanel}
				smallImg={imagesSmall}
			/>
			<Footer />
			{active && (
				<PanelOfGallery
					closeBtn={handleTogglePanel}
					position={position}
					setPosition={setPosition}
					bigImg={imagesBig}
				/>
			)}
		</div>
	);
};

export default App;
