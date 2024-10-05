import React from 'react'
import Image from 'next/image'
import placeholder from '@/public/placeholder.png'
import styles from './workSlider.module.scss'

export default function workCard({ logo, tags }) {
    return (
        <article className={styles.workCard}>
            <Image className={styles.mockup} src={placeholder} height={0} width={0} alt={""} />
            <span className={styles.tags}>{tags}</span>
            <Image src={logo} height={32} width={200} className={styles.logo} alt={""} />
        </article>
    )
}
