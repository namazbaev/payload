import { Operator } from "./style";
import Ucell from 'assets/icons/ucell1.svg';
import Mobiuz from 'assets/icons/mobiuz.svg';
import Humans from 'assets/icons/humans1.svg';
import Beeline from 'assets/icons/beeline.svg';
import Uzmobile from 'assets/icons/uzmobile1.svg';
import Perfectum from 'assets/icons/perfectum1.svg';
import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
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
                arrows={false}
                swipeable={true}
                draggable={true}
                showDots={false}
                centerMode={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={false}
                autoPlay={false}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["mobile"]}
                deviceType={['desktop', 'tablet']}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item"
            >
                <Operator img={Humans} />
                <Operator img={Mobiuz} />
                <Operator img={Ucell} />
                <Operator img={Uzmobile} />
                <Operator img={Beeline} />
                <Operator img={Perfectum} size="110%" />
            </Carousel>

        </>
    )
}