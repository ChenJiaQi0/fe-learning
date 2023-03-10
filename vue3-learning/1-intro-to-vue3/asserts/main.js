const app = Vue.createApp({
    data(){
        return {
            product: 'Socks',
            description: 'A warm fuzzy pair of socks.',
            image: './images/socks_green.jpg',
            inStock: true,
            inventory: 100,
            show: true,
            details: [
            {
                id: 1,
                name: 'Green Socks',
                url: './images/socks_green.jpg',
                flag: true
            },
            {
                id: 2,
                name: 'Blue Socks',
                url: './images/socks_blue.jpg',
                flag: false
            }
            ],
            classes: [
                {
                    id: 1,
                    teacherName: 'XXX',
                    courseName: '后端工程化开发',
                    className: '软件2241 Web1班',
                    url: 'https://public-cdn-oss.mosoteach.cn/mssvc/cover/2023/02/e81eb0929b869d2098cb441da709ae66.jpeg?x-oss-process=style/s300x300',
                    flag: true,
                },
                {
                    id: 2,
                    teacherName: '***',
                    courseName: '前端工程化开发',
                    className: '软件2241 Web2班',
                    url: 'https://public-cdn-oss.mosoteach.cn/mssvc/cover/2023/02/effaea97669cecb86c6b9e9d2dce54cd.jpg?x-oss-process=style/s300x300',
                    flag: false,
                },
                {
                    id: 3,
                    teacherName: '许莫淇',
                    courseName: 'Web应用开发',
                    className: '软件2241 Web3班',
                    url: 'https://public-cdn-oss.mosoteach.cn/mssvc/cover/2023/02/319aa0a5a02386312000d5df99aa1a9d.jpeg?x-oss-process=style/s300x300',
                    flag: true,
                }
            ]
        }
    },
    method:{

    }
})