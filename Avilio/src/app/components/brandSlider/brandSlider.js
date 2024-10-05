"use client"

import React from 'react'
import styles from "./brandSlider.module.scss"
import images from "./images"; //all brand images from the ./images.js
import Image from 'next/image';

export default function BrandSlider() {



    return (
        <section className={styles.brandSlider}>
            <div className={styles.imageBox} style={{ animationDuration: `${images.length * 4}s` }}>
                {images.map((brand, key) => (
                    <Image src={brand.src} key={key} width={132} height={0} style={{ height: 'auto' }} quality={100} alt={brand.alt} unoptimized />
                ))}

                <div className={styles.looper}>
                    {images.map((brand, key) => (
                        <Image src={brand.src} key={key} width={132} height={0} style={{ height: 'auto' }} quality={100} alt={brand.alt} unoptimized />
                    ))}
                </div>
            </div>

        </section>
    )
}
