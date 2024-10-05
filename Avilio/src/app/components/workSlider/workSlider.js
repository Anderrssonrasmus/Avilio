"use client"

import React from 'react'
import Image from 'next/image'
import placeholder from '@/public/placeholder.png'
import styles from './workSlider.module.scss'
import logos from '@/app/components/brandSlider/images'
import WorkCard from './workCard'
import arrow from '@/public/arrow.svg'

import { useState, useEffect, useRef } from "react";

export default function workSlider() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const card = useRef(null);
    const nextButton = useRef(null);
    const prevButton = useRef(null);

    useEffect(() => {
        if (currentSlide === (card.current.offsetWidth + 20) * (logos.length - 1)) {
            nextButton.current.disabled = true;
        } else {
            nextButton.current.disabled = false;
        }

        if (currentSlide === 0) {
            prevButton.current.disabled = true;
        } else {
            prevButton.current.disabled = false;
        }
    })

    return (
        <>
            <div className={styles.sliderControls}>
                <h3>Case studies</h3>
                <div>
                    <button onClick={() => setCurrentSlide(currentSlide - card.current.offsetWidth - 20)} ref={(prevButton)}><Image src={arrow} height={16} width={16} alt="" /></button>
                    <button onClick={() => setCurrentSlide(currentSlide + card.current.offsetWidth + 20)} ref={(nextButton)}><Image src={arrow} height={16} width={16} alt="" /></button>
                </div>
            </div>
            <section className={styles.workSlider} ref={(card)}>
                <div className={styles.workSliderTrack} style={{ transform: `translatex(${-currentSlide}px)` }}>
                    {logos.map((card, key) => (
                        <WorkCard tags="Webdesign, web development" logo={card.src} key={key} alt={card.alt} />
                    ))}
                </div>
            </section>
        </>
    )
}
