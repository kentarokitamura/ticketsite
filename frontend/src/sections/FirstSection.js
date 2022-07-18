import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ListItem from "../components/ListItem";

const FirstSection = ({ data }) => {
    const setting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        pauseOnHover: true,
        centerMode: true,
    };

    return (
        <Slider {...setting} className=" pt-19 ">
            {data.map((d) => (
                <div className=" mb-13 ">
                    <ListItem data={d} />
                </div>
            ))}
        </Slider>
    );
};

export default FirstSection;
