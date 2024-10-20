import { useEffect, useRef, useState } from 'react';
import { images } from '../../../issue4/article05/data';

type Image = {
	alt: string;
	thumb: string;
};

export default function Gallery() {
	const [image, setImage] = useState<Image>();
	const [animate, setAnimate] = useState(false);
	const [inc, setInc] = useState(0);

	useEffect(() => {
		let timer = inc > 0 ? 2000 : 450;
		let t = setTimeout(() => {
			setAnimate(false);
		}, timer);
		return () => clearTimeout(t);
	}, [animate, inc]);

	useEffect(() => {
		let t;
		if (window.innerWidth < 768) {
			t = setInterval(() => {
				setInc((prev) => {
					if (prev >= images.length - 1) {
						return 0;
					} else {
						return prev + 1;
					}
				});

				display(images[inc]);
			
			}, 2500);
		}
		return () => clearInterval(t);
	}, [inc]);


	function display(img: Image) {
		setImage(img);
		setAnimate(true);
	}

	return (
		<div className='gallery'>
			<div className='thumbsWrapper'>
				<div className='thumbs'>
					{images.map((img: Image, index) => (
						<Image key={index} img={img} display={display} />
					))}
				</div>
			</div>
			<figure className='preview'>
				{image ? (
					<>
						<img
							src={image.thumb}
							alt={image.alt}
							className={animate ? 'fadeIn' : ''}
						/>
						<figcaption className={animate ? 'fadeIn' : ''}>
							{image.alt}
						</figcaption>
					</>
				) : (
					<>
						<img
							src={images[0].thumb}
							alt={images[0].alt}
							className={animate ? 'fadeIn' : ''}
						/>
						<figcaption className={animate ? 'fadeIn' : ''}>
							{images[0].alt}
						</figcaption>
					</>
				)}
			</figure>
		</div>
	);
}

function Image({ img, display }) {
	return <img src={img.thumb} alt={img.alt} onClick={() => display(img)} />;
}
