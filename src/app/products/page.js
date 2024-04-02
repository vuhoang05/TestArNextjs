"use client"
import React, { useState, useEffect } from "react";
import styles from "@/app/products/products.module.css";
import Link from "next/link";
import { getProducts } from "@/lib/data";
import data from "@/lib/data.js"; // Import file data.js

function ProductPage() {
    const [products, setProducts] = useState([]); // Initial empty array
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState("");
    const [selectedColor, setSelectedColor] = useState("");

    useEffect(async () => {
        const products = await getProducts();
        setProducts(products); // Use data exported from data.js
    }, []);

    const handleFilter = () => {
        const filtered = products.filter((product) => {
            const brandMatch = selectedBrand === "" || product.hang === selectedBrand;
            const colorMatch =
                selectedColor === "" ||
                product.mau.toLowerCase().includes(selectedColor.toLowerCase());
            return brandMatch && colorMatch;
        });
        setFilteredProducts(filtered);
    };

    return (
        <div className={styles.newproduct}>
            {/* ... other elements */}

            <div className={styles.filterBar}>
                <label htmlFor="brandSelect">Lọc theo hãng:</label>
                <select
                    id="brandSelect"
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                >
                    <option value="">Tất cả hãng</option>
                    {/* Only render options if products are available */}
                    {products.length > 0 &&
                        products.map((product) => (
                            <option key={product.id} value={product.hang}>
                                {product.hang}
                            </option>
                        ))}
                </select>

                <label htmlFor="colorSelect">Lọc theo màu son:</label>
                <select
                    id="colorSelect"
                    value={selectedColor}
                    onChange={(e) => setSelectedColor(e.target.value)}
                >
                    <option value="">Tất cả màu</option>
                    {/* Only render options if products are available */}
                    {products.length > 0 &&
                        products.map((product) => (
                            <option key={product.id} value={product.mau}>
                                {product.mau}
                            </option>
                        ))}
                </select>

                <button onClick={handleFilter}>Lọc</button>
            </div>

            <div className={styles.productGrid}>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div key={product.id} className={styles.productItem}>
                            <img src={product.anh} />

                            <a className={styles.name}>{product.ten}</a>
                            <a className={styles.price}>{product.gia}vnđ</a>

                            {product.coAr && (
                                <div className={styles.tryOnButton}>
                                    {/* <Link
                                        className={styles.tryOnLink}
                                        href="#"
                                        onClick={() => handleTryOn(product.id)}
                                    >
                                        Try On
                                    </Link> */}
                                </div>
                            )}

                            <a className={styles.addtocart}>Thêm vào giỏ</a>
                        </div>
                    ))
                ) : (
                    <p>Không tìm thấy sản phẩm phù hợp.</p>
                )}
            </div>
        </div>
    );
}

export default ProductPage;
