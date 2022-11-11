import Image from "next/image";
import Head from "next/head";
import styles from "./fondo.module.scss";
import React from "react";
import propTypes from "prop-types";
import { motion } from "framer-motion";
import { FONDO_IMAGE } from "../../lib/constants";


const AmbientBackground = () => {
  return (
    <div className={styles.fondo}>
      <Image
        src={FONDO_IMAGE}
        width={1920}
        height={1360}
        alt="fondo"
        priority
      />
    </div>
  );
};



export default AmbientBackground;
