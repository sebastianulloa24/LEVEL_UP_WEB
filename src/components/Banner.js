import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ImagenCarousel from './ImagenCarousel';
// Import directo de las imágenes
import bannerWukong from '../assets/imagenes/index/banner-Minecraft.jpg';
import bannerGamer from '../assets/imagenes/index/banner-juegos.jpg';
import bannerRTX from '../assets/imagenes/index/banner-gta-vl.jpg';


function BannerInicio() {
    return (
        <Carousel className='banner-fullscreen text-center'>
            <Carousel.Item>
                <ImagenCarousel src={bannerWukong}
                    alt="Banner juegos" />
                <Carousel.Caption>
                    {/* <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <ImagenCarousel src={bannerGamer }alt="" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <ImagenCarousel src={bannerRTX} alt="" />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default BannerInicio;