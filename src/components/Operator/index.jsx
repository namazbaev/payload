import { Operator } from "./style";
import Carousel from "react-multi-carousel";
import Ucell from 'assets/icons/ucell1.svg';
import Mobiuz from 'assets/icons/mobiuz.svg';
import Humans from 'assets/icons/humans1.svg';
import Beeline from 'assets/icons/beeline.svg';
import Uzmobile from 'assets/icons/uzmobile1.svg';
import Perfectum from 'assets/icons/perfectum1.svg';
import { LinkTo } from "styles/globalStyles";
import { MOBILEOPERATOR } from "routes/route";
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
            slidesToSlide: 6 // optional, default to 1.
        }
    };
    return (
        <>
            <Carousel
                ssr={true} arrows={false} swipeable={true}
                draggable={true} showDots={false} centerMode={true}
                responsive={responsive} infinite={false} autoPlay={false}
                transitionDuration={500} containerClass="carousel-container"
                dotListClass="custom-dot-list-style" itemClass="carousel-item"
                autoPlaySpeed={2000} keyBoardControl={true} customTransition="all .5"
                removeArrowOnDeviceType={["mobile"]} deviceType={['desktop', 'tablet']}>
                <LinkTo to={`${MOBILEOPERATOR}/humans`}><Operator img={Humans} /></LinkTo>
                <LinkTo to={`${MOBILEOPERATOR}/mobiuz`}><Operator img={Mobiuz} /></LinkTo>
                <LinkTo to={`${MOBILEOPERATOR}/ucell`}><Operator img={Ucell} /></LinkTo>
                <LinkTo to={`${MOBILEOPERATOR}/uztelecom`}><Operator img={Uzmobile} /></LinkTo>
                <LinkTo to={`${MOBILEOPERATOR}/beeline`}><Operator img={Beeline} /></LinkTo>
                <LinkTo to={`${MOBILEOPERATOR}/perfectum`}><Operator img={Perfectum} size="110%" /></LinkTo>
            </Carousel>

        </>
    )
}