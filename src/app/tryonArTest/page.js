'use client';
import React, { useEffect, useRef } from 'react';
import * as deepar from 'deepar';
import styles from '@/app/tryonArTest/Lipstick.module.css';
import NoHeaderFooterLayout from '../layoutAr';
import Link from 'next/link';
const LipstickAdjusterPage = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('productId'));

    const ten = urlParams.get('ten');
    const gia = urlParams.get('gia');
    const maAr = urlParams.get('maAr');

    useEffect(() => {
        const initDeepAR = async () => {
            let deepARInstance = null;
            try {
                deepARInstance = await deepar.initialize({
                    licenseKey: 'fa47526ac0fab455bb89c35bc076b008311a4225e7865b3a19f95803b64fe31a93e76f8b520473ce',
                    previewElement: document.getElementById('deepar-preview'),
                    effect: maAr,
                });
            } catch (error) {
                console.log('Error initializing DeepAR:', error);
            }

            return () => {
                if (deepARInstance) {
                    deepARInstance.destroy();
                }
            };
        };

        initDeepAR();
    }, []);

    const handleBackHome = () => {
        if (deepARInstanceRef.current) {
            deepARInstanceRef.current.destroy();
        }
    };
    return (
        <NoHeaderFooterLayout>
            <div className={styles.lipstick_container}>
                <div className={styles.top_bar}>
                    <Link href="/" className={styles.home} onClick={handleBackHome}>
                        &lt;- Trở lại
                    </Link>
                </div>
                <h1 className={styles.logo} onClick={"/"}>AuraLipstick Try-On</h1>
                <div id="deepar-preview" className={styles.deepar_preview} />
                <a className={styles.information}>{ten} - {gia}vnđ</a>
                <h4 className={styles.buy}>THÊM VÀO GIỎ</h4>
            </div>
        </NoHeaderFooterLayout>
    );
};

export default LipstickAdjusterPage;
