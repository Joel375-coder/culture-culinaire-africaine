import React from "react";
import Logo from "../public/Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import styles from '@/components/Footer.module.css';
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.footer_wrapper}>
      <div className={styles.footer_section_one}>
        <div className={styles.footer_logo_container}>
          <Image src={Logo} alt="Logo" />
        </div>
        <div className={styles.footer_icons}>
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className={styles.footer_section_two}>
        <div className={styles.footer_section_columns}>
          <span>Quality</span>
          <span>Help</span>
          <span>Share</span>
          <span>Careers</span>
          <span>Testimonials</span>
          <span>Work</span>
        </div>
        <div className={styles.footer_section_columns}>
          <span>844-533-7783</span>
          <span>welcome@food.ca</span>
          <span>press@food.ca</span>
          <span>contact@food.ca</span>
        </div>
        <div className={styles.footer_section_columns}>
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
