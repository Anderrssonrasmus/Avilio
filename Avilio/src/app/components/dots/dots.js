"use client"

import React from 'react'
import { useEffect, useState } from "react";
import styles from "./dots.module.scss";
import Image from "next/image";

import dotsImage from "@/public/dots2.svg";

export default function dots() {

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            console.log(scrollY);
        }

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    });

    return (
        <div className={styles.dots} style={{ transform: `rotate(${scrollY / -20}deg)`, top: `${scrollY / 2}px` }}>
            <Image src={dotsImage} />
            <Image src={dotsImage} />
            <Image src={dotsImage} />
            <Image src={dotsImage} />
        </div>
    )
}
