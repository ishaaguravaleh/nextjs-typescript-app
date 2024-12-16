import React from 'react'
import AddToCart from './AddToCart';

//instead of external css we can use tailwind as well 
// import styles from './ProductCard.module.css';
// <div className={styles.card}>


const ProductCard = () => {
    return (
        <div>
            <AddToCart />
        </div>
    )
}

export default ProductCard