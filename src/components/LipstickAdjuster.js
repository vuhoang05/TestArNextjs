'use client'
import React, { useState, useEffect } from 'react';
import * as deepar from 'deepar';
import styles from "@/components/Lipstick.module.css"
export default function LipstickAdjusterPage() {

    useEffect(() => {
        async function initDeepAR() {
            let deepARInstance = null;
            try {
                deepARInstance = await deepar.initialize({
                    licenseKey: 'fa47526ac0fab455bb89c35bc076b008311a4225e7865b3a19f95803b64fe31a93e76f8b520473ce',
                    previewElement: document.getElementById('deepar-preview'),
                    effect: 'lipblack.deepar',
                });
                return () => {
                    if (deepARInstance) {
                        deepARInstance.destroy();
                    }
                };
            } catch (error) {
                console.error('Error initializing DeepAR:', error);
            }
        }
        initDeepAR();
    }, ['lipblack.deepar']);

    return (
        <div className={styles.lipstick_container}>
            <h1 className={styles.title}>Nextjs Test Lip</h1>
            <div id="deepar-preview" className={styles.deepar_preview} />
        </div>
    );
}
