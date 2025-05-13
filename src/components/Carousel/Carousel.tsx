import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "./Carousel.module.scss"
import type { FC } from "react";
import { carouselObjects } from "../../data/carousel";
import type { CarouselObject } from "../../data/carousel";

const ImageCarousel: FC = () => {
    return (
        <div className={styles.carouselBody}>
            <p>Alexander Hallgrens current Projects</p>
            <Carousel className={styles.carousel}>
                {carouselObjects.map((item: CarouselObject, index: number) => (
                    <div>
                        <img src={item.imgPath} alt={item.alt}/>
                        <a href={item.hrefTag} className="legend" key={index}>{item.text}</a>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default ImageCarousel;