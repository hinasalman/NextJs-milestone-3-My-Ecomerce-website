// src/components/ProductCard.js
import Link from 'next/link';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} className={styles.image} />
      <h2 className={styles.title}>{product.name}</h2>
      <p className={styles.description}>{product.description}</p>
      <p className={styles.price}>${product.price.toFixed(2)}</p>

      {/* Correct the Link usage */}
      <Link href={`/products/${product.id}`} className={styles.btn}>
        View Details
      </Link>
    </div>
  );
}
