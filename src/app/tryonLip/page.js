
'use client'
import React, { useState, useEffect } from 'react';
import * as deepar from 'deepar';
import styles from "@/app/tryonLip/Lipstick.module.css"
import Link from 'next/link';
const effectList = [
    'sondo.deepar',
    'hongsonlip.deepar',
    'CamDatLip.deepar',
    'honggachlip.deepar',
    'lipblack.deepar',
    'sonxanhla.deepar',
    'sonxanhla.deepar',
    'sonxanhla.deepar',
];
export default function LipstickAdjusterPage() {
    const [currentEffectIndex, setCurrentEffectIndex] = useState(0);
    const [deepARInstance, setDeepARInstance] = useState(null);
    const [activeButton, setActiveButton] = useState(null);
    useEffect(() => {
        async function initDeepAR() {
            let deepARInstance = null;
            try {
                deepARInstance = await deepar.initialize({
                    licenseKey: 'fa47526ac0fab455bb89c35bc076b008311a4225e7865b3a19f95803b64fe31a93e76f8b520473ce',
                    previewElement: document.getElementById('deepar-preview'),
                    effect: effectList[currentEffectIndex],
                });
                setDeepARInstance(deepARInstance);
                return () => {
                    if (deepARInstance) {
                        deepARInstance.destroy();
                    }
                };
            } catch (error) {
                console.error('Lỗi khởi tạo DeepAR:', error);
            }
        }

        initDeepAR();
    }, [currentEffectIndex]);
    const handleEffectChange = async (newEffectIndex) => {
        await deepARInstance.switchEffect(effectList[newEffectIndex]);
        setCurrentEffectIndex(newEffectIndex);
    };
    const handleBackHome = () => {
        if (deepARInstance.current) {
            deepARInstance.current.destroy();
        }
    };
    const onFocus = () => setActiveButton(0)
    const onBlur = () => setActiveButton(null)
    return (
        <div className={styles.lipstick_container}>
            <a className={styles.title}>Showroom thử màu son môi</a>

            <div className={styles.headerRow}>
                <Link href="/" className={styles.backbutton} onClick={handleBackHome}>
                    &lt;- BackHome
                </Link>
            </div>

            <div id="deepar-preview" className={styles.deepar_preview} />

            <div className={styles.effectLip}>
                {Array(7).fill(null).map((_, index) => (
                    <button
                        key={index}
                        className={styles.button}
                        style={{
                            backgroundColor: getColorByIndex(index),
                            border: activeButton === index ? '5px solid #fff' : 'none',
                        }}
                        onFocus={() => setActiveButton(index)}
                        onBlur={() => setActiveButton(null)}
                        onClick={() => handleEffectChange(index)}
                    />
                ))}
            </div>
        </div>
    );
    function getColorByIndex(index) {
        switch (index) {
            case 0:
                return 'red';
            case 1:
                return '#f809a1';
            case 2:
                return '#ce5a41';
            case 3:
                return '#d34e58';
            case 4:
                return '#D06754';
            case 5:
                return '#D3362F';

            case 6:
                return '#99173A';

            case 7:
                return '#EE596A';

            default:
                return 'gray';
        }
    }

};


