export const Products =
    [
        {
            id: 1,
            ten: "Son Hermès Rose Rosy Lip Hồng",
            hang: "Black Rouge",
            anh: "/lipimage/1.jpg",
            mau: "Hồng",
            coAr: true,
            maAr: "pinkLip.deepar",
            gia: 239000,
            phanLoai: "Son kem lì"
        },
        {
            id: 2,
            ten: "Son Chanel Rouge Allure Đỏ Cam",
            hang: "Chanel",
            anh: "/lipimage/2.jpg",
            mau: "Đỏ cam",
            coAr: true,
            maAr: "sondo.deepar",
            gia: 999000,
            phanLoai: "son kem lì"
        },
        {
            id: 3,
            ten: "Son Dưỡng Glorifier Hồng Nhạt",
            hang: "Black Rouge",
            anh: "/lipimage/3.jpg",
            mau: "Hồng nhạt",
            coAr: true,
            maAr: "hongsonlip.deepar",
            gia: 639000,
            phanLoai: "son kem lì"
        },
        {
            id: 4,
            ten: "Son Dưỡng Môi Whoo Balm 51105391 Màu Cam",
            hang: "Black Rouge",
            anh: "/lipimage/4.jpg",
            mau: "Cam",
            coAr: true,
            maAr: "cam.deepar",
            gia: 439000,
            phanLoai: "son kem lì"
        },
        {
            id: 5,
            ten: "Son Dior Addic Wildior Màu Đỏ Mận",
            hang: "Black Rouge",
            anh: "/lipimage/5.jpg",
            mau: "Đỏ mận",
            coAr: true,
            maAr: "doman.deepar",
            gia: 739000,
            phanLoai: "son kem lì"
        },
        {
            id: 6,
            ten: "Son Dưỡng Addict Lip 006 Black",
            hang: "Dior",
            anh: "/lipimage/black.jpg",
            mau: "Đỏ mận",
            coAr: true,
            maAr: "lipblack.deepar",
            gia: 839000,
            phanLoai: "son kem lì"
        },


    ]
export const getProducts = async () => {
    return Products;
}

export const getProduct = async (id) => {
    return Products.find((data) => data.id === id);
}
