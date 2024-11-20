// src/components/Navbar.js
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        {/* Correct the Link usage */}
        <Link href="/">Hina Salman Store</Link>
      </div>
      <nav>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/" className={styles.navLink}>Home</Link>
          </li>
          <li>
            <Link href="/cart" className={styles.navLink}>Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
