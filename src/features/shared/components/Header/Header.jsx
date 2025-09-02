import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo}>
        Mi Tienda Arquitectura
      </NavLink>
      <nav className={styles.nav}>
        <NavLink to="/" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
          Dashboard
        </NavLink>
        {/* Enlaces a futuras características */}
        {/* <NavLink to="/productos" className={...}>Productos</NavLink> */}
      </nav>
    </header>
  );
}