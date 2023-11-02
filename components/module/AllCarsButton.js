import React from 'react';
import styles from './AllCars.module.css'
import Link from 'next/link';

const AllCarsButton = () => {
  
    return (
        <div className={styles.container}>
            <Link href='/cars'>See All Cars</Link>
        </div>
    );
};

export default AllCarsButton;