import styles from "@/components/navbar/navbar.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
export default function Navbar() {
    return (
        <>
            <div className={styles.nav}>
                <h1 className={styles.logo}>AuraLipStick</h1>
                <div className={styles.navLink}>
                    <Link href={"/"}>Trang chủ</Link>
                    <Link href={"/products"}>Son môi</Link>
                    <Link href={"/"}>Giới thiệu</Link>
                    <Link href={"/"}>Liên hệ</Link>
                    <Link href={"/"}><img className={styles.bagimage} src={"bag.jpg"} /></Link>
                </div>

            </div>
            <div className={styles.gach}></div>
        </>

    );
}

