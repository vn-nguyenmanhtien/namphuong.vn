export const menuData = [
    {
        id: 1,
        title: "Trang chủ",
        url: "/",
    },
    {
        id: 2,
        title: "Giới thiệu",
        url: "/about",
    },
    {
        id: 3,
        title: "Liên hệ",
        url: "/contact",
    },
    {
        id: 4,
        title: "Đánh giá",
        url: "/reviews",
    },

    // {
    //     id: 212,
    //     title: "Account",
    //     children: [
            
    //         {
    //             id: 8,
    //             title: "Login",
    //             url: "/login",
    //         },

    //         {
    //             id: 8,
    //             title: "Signup",
    //             url: "/signup",
    //         },
    //         {
    //             id: 8,
    //             title: "Account",
    //             url: "/account",
    //         },

    //         {
    //             id: 8,
    //             title: "Forgot Password",
    //             url: "/forgot-password",
    //         },
    //     ],
    // },


    {
        id: 12,
        title: "Sản phẩm",
       
        children: [
                    
                    {
                        id: 15,
                        title: "Tour List",
                        url: "/tours/1",
                    },
                    {
                        id: 16,
                        title: "Tour Grid 3 Columns",
                        url: "/tours/3",
                    },

                    {
                        id: 17,
                        title: "Tour Detail",
                        url: "/tour/cannes-and-antibes-night-tour ",
                    },
        
        ],
    },
    
    {
        id: 18,
        title: "Dự án",
        url: "/destinations",
    },
    
    {
        id: 22,
        title: "Tin Tức",
       
        children: [
        
            {
                id: 23,
                title: "Danh sách tin tức",
                url: "/blog/all",
                
            },
            {
                id: 23,
                title: "Blog Detail",
                url: "/post/exploring-the-great-wall-of-china",
                
            },
        ],
    },
];
