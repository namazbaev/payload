import { Operator } from './style';
import Carousel from 'react-multi-carousel';
import { LinkTo } from 'styles/globalStyles';
import { carouselTop, carouselBottom } from 'utils/json';
export default () => {
	const responsive = {
		desktop: {
			items: 4,
			// slidesToSlide: 3, // optional, default to 1.
			breakpoint: { max: 1280, min: 801 },
		},
		tablet: {
			breakpoint: { max: 800, min: 600 },
			items: 6,
			slidesToSlide: 6, // optional, default to 1.
		},
	};
	const configs = {
		ssr: true,
		arrows: false,
		swipeable: true,
		draggable: true,
		showDots: false,
		infinite: false,
		autoPlay: false,
		centerMode: true,
		autoPlaySpeed: 2000,
		keyBoardControl: true,
		responsive: responsive,
		transitionDuration: 500,
		itemClass: 'carousel-item',
		customTransition: 'all .5',
		deviceType: ['desktop', 'tablet'],
		removeArrowOnDeviceType: ['mobile'],
		containerClass: 'carousel-container',
		dotListClass: 'custom-dot-list-style',
	};
	return (
		<>
			<Carousel {...configs}>
				{carouselTop.map(({ image, path }) => (
					<LinkTo to={path}>
						<Operator img={image} />
					</LinkTo>
				))}
			</Carousel>
			<Carousel {...configs}>
				{carouselBottom.map(({ image, path }) => (
					<LinkTo to={path}>
						<Operator img={image} />
					</LinkTo>
				))}
			</Carousel>
		</>
	);
};
