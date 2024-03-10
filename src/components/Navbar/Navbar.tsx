'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';
import LogoIcon from '../../../assets/cc-nav-logo.svg';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // make listener to print to console when menuOpen changes
  useEffect(() => {
    console.log('isMenuOpen:', isMenuOpen);
  }, [isMenuOpen]);

  return (
    // MAIN NAVBAR
    <nav className={`${styles.navbar} ${isMenuOpen ? styles.menuOpen : ''}`}>
      <Link href="/">
        {/* Wrap the img in an div tag for the className */}
        <div className={styles.navbarLogo}>
          <Image
            src={LogoIcon}
            width={150}
            className={styles.logo}
            alt="logo"
          />
        </div>
      </Link>
      <div className={styles.navbarItems}>
        {/* Wrap the span in an div tag for the className */}
        <Link href="/home" className={styles.navbarItem}>
          <span className={styles.itemText}>Home</span>
        </Link>
        <Link href="/about" className={styles.navbarItem}>
          <span className={styles.itemText}>About</span>
        </Link>
        <Link href="/services" className={styles.navbarItem}>
          <span className={styles.itemText}>Services</span>
        </Link>
        <Link href="/contact" className={styles.navbarItem}>
          <span className={styles.itemText}>Contact</span>
        </Link>
      </div>

      {/* MOBILE NAVBAR */}
      <div className={`${styles.mobileNav} ${isMenuOpen ? styles.active : ''}`}>
        <div
          className={`${styles.hamburgerMenu} ${
            isMenuOpen ? styles.active : ''
          }`}
          onClick={toggleMenu}
        >
          <div className={styles.hamburgerMenuLine} />
          <div className={styles.hamburgerMenuLine} />
          <div className={styles.hamburgerMenuLine} />
        </div>

        <div
          className={`${styles.mobileNavItems} ${
            isMenuOpen ? styles.active : ''
          }`}
        >
          {isMenuOpen && (
            <>
              <Link href="/home">
                <div className={styles.mobileNavItem}>
                  <span>Home</span>
                </div>
              </Link>
              <Link href="/about">
                <div className={styles.mobileNavItem}>
                  <span>About</span>
                </div>
              </Link>
              <Link href="/services">
                <div className={styles.mobileNavItem}>
                  <span>Services</span>
                </div>
              </Link>
              <Link href="/contact">
                <div className={styles.mobileNavItem}>
                  <span>Contact</span>
                </div>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
