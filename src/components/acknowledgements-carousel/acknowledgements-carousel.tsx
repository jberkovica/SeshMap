'use client';
import { useState, useEffect } from 'react';
import contributors from './contributors';
import './acknowledgements-carousel.css';
import Image from 'next/image';

export function AcknowledgementsCarousel() {
    const [smallScreen, setSmallScreen] = useState(window.innerWidth <= 991); // calculare slides and rows for big/small screen
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setSmallScreen(window.innerWidth <= 991);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const slideLength = smallScreen ? 10 : 15;
    const rowLength = smallScreen ? 2 : 5;
    const slidesCount = Math.ceil(contributors.length / slideLength);

    const toggleSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <div className="bg-secondary bg-opacity-25 mt-3 pb-5">
            <h3 className="text-center pt-5 pb-3">Acknowledgements</h3>
            <div className="carousel slide pb-5">
                <div className="carousel-indicators">
                    {Array.from({ length: slidesCount }).map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={index}
                            className={index === currentSlide ? 'active' : ''}
                            aria-current={
                                index === currentSlide ? 'true' : 'false'
                            }
                            aria-label={`Slide ${index + 1}`}
                            onClick={() => toggleSlide(index)}
                        ></button>
                    ))}
                </div>
                <div className="carousel-inner text-center">
                    <div className="container">
                        {Array.from({ length: slidesCount }).map(
                            (_, slideIndex) => (
                                <div
                                    className={`carousel-item ${
                                        slideIndex === currentSlide
                                            ? 'active'
                                            : ''
                                    }`}
                                    key={slideIndex}
                                >
                                    {Array.from({
                                        length: Math.ceil(
                                            slideLength / rowLength
                                        ),
                                    }).map((_, rowIndex) => (
                                        <div
                                            className="row mt-3"
                                            key={rowIndex}
                                        >
                                            {contributors
                                                .slice(
                                                    slideIndex * slideLength +
                                                        rowIndex * rowLength,
                                                    slideIndex * slideLength +
                                                        (rowIndex + 1) *
                                                            rowLength
                                                )
                                                .map((ack) => (
                                                    <div
                                                        className="col"
                                                        key={ack.name}
                                                    >
                                                        <Image
                                                            alt="icon"
                                                            src="/person.svg"
                                                            width={16}
                                                            height={16}
                                                        />
                                                        <a
                                                            href={ack.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            {ack.name}
                                                        </a>
                                                    </div>
                                                ))}
                                        </div>
                                    ))}
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
