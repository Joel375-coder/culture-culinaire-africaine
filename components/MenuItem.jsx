import React from "react";
import Image from "next/image";
import styles from '@/components/MenuItem.module.css'

function MenuItem({ image, name, description }) {
  return (
    <div className="menuItem">        
      <div className={styles.imageContainer}>
        <Image src={image} alt={name}/>
      </div>
      <h1> {name} </h1>
      <p> {description} </p>
    </div>
  );
}

export default MenuItem;