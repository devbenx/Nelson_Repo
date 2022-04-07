import React from 'react'
import Image from 'next/image'

import Logo from '../../public/svg/NelsonLogo.svg'
import Basket from '../../public/svg/basket.svg'

import styles from '../../styles/Home.module.css'

const NavigationBar = () => {
        return (
                <section className={styles.NavigationBarContainer}>
                        <div className={styles.Logo}></div>
                        {/* <Image alt='Logo' src={Logo} layout='fill' className={styles.Logo} /> */}
                        <section className={styles.Icons}>
                                <div className={styles.IconItem}></div>
                                {/* <div className={styles.IconItem}></div>
                                <div className={styles.IconItem}></div> */}
                                {/* <Image alt='Basket' src={Basket} layout='fill' className={styles.Logo} /> */}
                        </section>
                </section>
        )
}

export default NavigationBar