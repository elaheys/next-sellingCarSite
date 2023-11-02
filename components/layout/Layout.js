import React from 'react';

import Link from 'next/link';
//styles
import styles from './layout.module.css';

const Layout = ({children}) => {
    return (
        <>
         <header className={styles.header}>
            <Link href='/'>
                <h2>BOTOCAR</h2>
                <p>Choose and buy your car</p>
            </Link>
         </header>
            <div className={styles.container}>{children}</div>
         <footer className={styles.footer}>
            Next.js course | BotoCar Project &copy;
         </footer>
        </>
    );
};

export default Layout;