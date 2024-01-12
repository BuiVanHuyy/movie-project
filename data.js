export const sliderData = [
    {
        img: "https://trunganhmedia.com/wp-content/uploads/2023/02/thiet-ke-banner-quang-cao-1400x518.jpg",
        title: "First slide label",
        description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
        img: "https://tuyendung.res.edu.vn/wp-content/uploads/2023/01/TPHCM-1400x518.jpg",
        title: "Second slide label",
        description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
        img: "https://aoleonuithietke.com/wp-content/uploads/2023/07/Banner-trang-chu-AO-Leo-Nui-Thiet-Ke-1400x518.png",
        title: "Third slide label",
        description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
];

export const listDataHomePage = [
    {
        title: "Nổi bật",
        api: import.meta.env.VITE_DOMAIN_API + "movie/now_playing?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1",
    },
    {
        title: "Sắp khởi chiếu",
        api: import.meta.env.VITE_DOMAIN_API + "movie/popular?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1",
    },
    {
        title: "Đang chiếu",
        api: import.meta.env.VITE_DOMAIN_API + "movie/upcoming?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1",
    },
];
