import React from 'react'
import styles from './page.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import arrow from '@/public/arrow2.svg'

export default function page() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1>What do <br />we at Avilio do?</h1>
                <p>Consilio (design in Latin), was founded with the belief that the Internet and IT offer unlimited business opportunities, our goal is to maximize profitability for every project we work on. We have a complete team of experts in IT, design, media and marketing.</p>
                <Link href="/services">Check out our services<Image src={arrow} width={20} height={11} /></Link>
            </main>
        </div>
    )
}
