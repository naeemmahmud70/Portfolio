import React from 'react';
import boss1 from '../../images/boss1.jpg';
import boss2 from '../../images/boss2.jpg';
import boss3 from '../../images/boss3.jpg';
import boss4 from '../../images/boss4.jpg';
import boss5 from '../../images/boss5.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import ReviewCard from './ReviewCard/ReviewCard';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const Review = () => {

    const reviews = [{
        id: 1,
        name: "Mr. Jhon",
        image: boss1,
        review: "Overall very pleased with Naeem and his friendliness with us. He did everything we asked in a timely matter. I will definitely be recommending him to other companies. Thanks for such good work."
    },
    {
        id: 2,
        name: "Mr. Joseph",
        image: boss2,
        review: "Overall very pleased with Naeem and his friendliness with us. He did everything we asked in a timely matter. I will definitely be recommending him to other companies. Thanks for such good work."
    },
    {
        id: 3,
        name: "Matthew",
        image: boss3,
        review: "Overall very pleased with Naeem and his friendliness with us. He did everything we asked in a timely matter. I will definitely be recommending him to other companies. Thanks for such good work."
    },
    {
        id: 4,
        name: "Thomas",
        image: boss4,
        review: "Overall very pleased with Naeem and his friendliness with us. He did everything we asked in a timely matter. I will definitely be recommending him to other companies. Thanks for such good work."
    },
    {
        id: 5,
        name: "Andrew",
        image: boss5,
        review: "Overall very pleased with Naeem and his friendliness with us. He did everything we asked in a timely matter. I will definitely be recommending him to other companies. Thanks for such good work."
    },
    {
        id: 6,
        name: "Mr. Jhon",
        image: boss1,
        review: "Overall very pleased with Naeem and his friendliness with us. He did everything we asked in a timely matter. I will definitely be recommending him to other companies. Thanks for such good work."
    },
    {
        id: 7,
        name: "Mr. Joseph",
        image: boss2,
        review: "Overall very pleased with Naeem and his friendliness with us. He did everything we asked in a timely matter. I will definitely be recommending him to other companies. Thanks for such good work."
    }
    ]

    return (
        <section className="row">
            <div className="d-flex justify-content-center py-5">
                <div className="text-center ">
                    <h1 className="text-color fw-bold">Reviews</h1>
                    <span className="animate-border"></span>
                </div>
            </div>
            <Swiper
                loop={true}
                autoplay={{ delay: 3000 }}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                breakpoints={{
                    320: {
                        width: 320,
                        slidesPerView: 1,
                    },
                    768: {
                        width: 768,
                        slidesPerView: 2,
                    },
                    1024: {
                        width: 1024,
                        slidesPerView: 3,
                    },
                    1440: {
                        width: 1440,
                        slidesPerView: 4,
                    },
                    1919: {
                        width: 1919,
                        slidesPerView: 5,
                    },
                }}
            >
                {
                    reviews.map(review =>

                        <SwiperSlide>
                            <ReviewCard review={review} key={review._id} > </ReviewCard>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </section>
    );

};

export default Review;