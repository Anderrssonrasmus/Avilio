import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.svg";
import styles from './header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/aork">Work</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>

        <Link href="/contact" className={styles.contactButton}>Contact</Link>
        <Link href="/">
          <Image src={logo} width={228} height={52} />
        </Link>
      </nav>
    </header>
  )
}
