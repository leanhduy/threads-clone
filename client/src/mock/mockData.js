// Mock data
export const mockUser = {
    id: '1',
    username: 'netninja',
    bio: 'Coding tutorials & courses | #netninja | youtube.com/thenetninja',
    fullname: 'Shaun Pelling',
    joinedOn: '2024-06-02T01:48:19.190Z',
    followerCount: 11192,
    followingCount: 2,
    postCount: 2,
    posts: [
        {
            id: '1',
            body: 'Just released a new React tutorial! Check it out: [link]',
            createdAt: '2024-06-02T01:48:19.190Z',
            updatedAt: '2024-06-02T01:48:19.190Z',
            likeCount: 0,
            repostCount: 0,
            replyCount: 0,
            postImages: [
                {
                    id: '1',
                    url: 'https://cdn.fs.teachablecdn.com/u8LFsjeERwyHlzyIg4w0',
                    caption: 'React Tutorial Thumbnail',
                },
            ],
        },
        {
            id: '2',
            body: 'Excited to be speaking at the upcoming Web Dev Conference! #webdev #conference',
            createdAt: '2024-06-02T01:48:19.190Z',
            updatedAt: '2024-06-02T01:48:19.190Z',
            likeCount: 0,
            repostCount: 0,
            replyCount: 0,
            postImages: [
                {
                    id: '2',
                    url: 'https://merehead.com/blog/wp-content/uploads/10-16.jpg',
                    caption: 'Conference Stage',
                },
                {
                    id: '3',
                    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj8ReQI8KoypV30sbHm9suv92CKGAxTsAbBA&s',
                    caption: 'Conference Logo',
                },
            ],
        },
    ],
    profileImage: {
        url: 'https://avatars.githubusercontent.com/u/9838872?v=4',
    },
}

export const mockPostsWithAuthor = [
    {
        id: '1',
        body: 'Just released a new React tutorial! Check it out: [link]',
        createdAt: '2024-06-02T01:48:19.190Z',
        updatedAt: '2024-06-02T01:48:19.190Z',
        likeCount: 0,
        repostCount: 0,
        replyCount: 0,
        postImages: [
            {
                id: '1',
                url: 'https://cdn.fs.teachablecdn.com/u8LFsjeERwyHlzyIg4w0',
                caption: 'React Tutorial Thumbnail',
            },
        ],
        author: {
            id: '1',
            username: 'netninja',
            profileImage: {
                url: 'https://avatars.githubusercontent.com/u/9838872?v=4',
            },
        },
    },
    {
        id: '2',
        body: 'Excited to be speaking at the upcoming Web Dev Conference! #webdev #conference',
        createdAt: '2024-06-02T01:48:19.190Z',
        updatedAt: '2024-06-02T01:48:19.190Z',
        likeCount: 0,
        repostCount: 0,
        replyCount: 0,
        postImages: [
            {
                id: '2',
                url: 'https://merehead.com/blog/wp-content/uploads/10-16.jpg',
                caption: 'Conference Stage',
            },
            {
                id: '3',
                url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj8ReQI8KoypV30sbHm9suv92CKGAxTsAbBA&s',
                caption: 'Conference Logo',
            },
        ],
        author: {
            id: '1',
            username: 'netninja',
            profileImage: {
                url: 'https://avatars.githubusercontent.com/u/9838872?v=4',
            },
        },
    },
    {
        id: '3',
        body: 'Back on the court and feeling great! 💪 #tennis #training #nevergiveup',
        createdAt: '2024-06-02T01:48:19.204Z',
        updatedAt: '2024-06-02T01:48:19.204Z',
        likeCount: 0,
        repostCount: 0,
        replyCount: 0,
        postImages: [
            {
                id: '4',
                url: 'https://people.com/thmb/84DrQQxD1fHana0mkkpTieZ2ETs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(733x27:735x29)/serena-williams-insta-041823-14627b51d13144ceb7877a838070c418.jpg',
                caption: 'Tennis Practice',
            },
        ],
        author: {
            id: '2',
            username: 'serenawilliams',
            profileImage: {
                url: 'https://media.vogue.fr/photos/62f376b89b00e2dab9f259a9/2:3/w_2560%2Cc_limit/00-story%2520(10).jpg',
            },
        },
    },
    {
        id: '4',
        body: "Spending quality time with my daughter Olympia. She's my inspiration! 💖 #family #love",
        createdAt: '2024-06-02T01:48:19.204Z',
        updatedAt: '2024-06-02T01:48:19.204Z',
        likeCount: 0,
        repostCount: 0,
        replyCount: 0,
        postImages: [
            {
                id: '5',
                url: 'https://s.yimg.com/ny/api/res/1.2/1g39Eu98IAwplNFhgtMKHA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/en/people_218/c22f4f5e64a5faccf70496f29d50724b',
                caption: 'Family Time',
            },
        ],
        author: {
            id: '2',
            username: 'serenawilliams',
            profileImage: {
                url: 'https://media.vogue.fr/photos/62f376b89b00e2dab9f259a9/2:3/w_2560%2Cc_limit/00-story%2520(10).jpg',
            },
        },
    },
    {
        id: '5',
        body: 'The most beautiful thing we can experience is the mysterious. It is the source of all true art and science. #science #mystery',
        createdAt: '2024-06-02T01:48:19.207Z',
        updatedAt: '2024-06-02T01:48:19.207Z',
        likeCount: 0,
        repostCount: 0,
        replyCount: 0,
        postImages: [
            {
                id: '6',
                url: 'https://i.insider.com/560c063b9dd7cc1d008be271?width=800&format=jpeg&auto=webp',
                caption: "Einstein's Blackboard",
            },
        ],
        author: {
            id: '3',
            username: 'prof_einstein',
            profileImage: {
                url: 'https://storage.googleapis.com/pai-images/437b278abeb1460480fe1795abf9f524.jpeg',
            },
        },
    },
    {
        id: '6',
        body: 'Announcing the latest Tesla Model X upgrade! #Tesla #ElectricVehicles',
        createdAt: '2024-06-02T01:48:19.210Z',
        updatedAt: '2024-06-02T01:48:19.210Z',
        likeCount: 0,
        repostCount: 0,
        replyCount: 0,
        postImages: [
            {
                id: '7',
                url: 'https://images.news18.com/ibnlive/uploads/2020/07/1595688994_tesla-ceo-elon-musk-model-x.jpg?impolicy=website&width=640&height=480',
                caption: 'Tesla Model X',
            },
        ],
        author: {
            id: '4',
            username: 'elonmusk',
            profileImage: {
                url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE96oXuB1-wvAWe_rG7eAgEf4iGs6Dt3EJRQ&s',
            },
        },
    },
    {
        id: '7',
        body: 'New album out now! 💕 #folklore #newmusic',
        createdAt: '2024-06-02T01:48:19.212Z',
        updatedAt: '2024-06-02T01:48:19.212Z',
        likeCount: 0,
        repostCount: 0,
        replyCount: 0,
        postImages: [
            {
                id: '8',
                url: 'https://i0.wp.com/radio.rutgers.edu/wp-content/uploads/2020/10/folklore.jpg?resize=360%2C360',
                caption: 'Folklore Album Cover',
            },
        ],
        author: {
            id: '5',
            username: 'taylorswift',
            profileImage: {
                url: 'https://i.pinimg.com/736x/bc/39/ef/bc39ef07bfbd9d2ecd8df176666b3744.jpg',
            },
        },
    },
    {
        id: '8',
        body: 'Training hard for the next match! 💪 #football #Barcelona',
        createdAt: '2024-06-02T01:48:19.213Z',
        updatedAt: '2024-06-02T01:48:19.213Z',
        likeCount: 0,
        repostCount: 0,
        replyCount: 0,
        postImages: [
            {
                id: '9',
                url: 'https://pbs.twimg.com/media/EYJhq5KVcAE6G3Y.jpg',
                caption: 'Training Session',
            },
        ],
        author: {
            id: '6',
            username: 'leomessi',
            profileImage: {
                url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLQVYWtXykQrsxeoTqmfOPz4O_zdWN34nnrw&s',
            },
        },
    },
    {
        id: '9',
        body: 'Fighting for a Green New Deal! 🌎 #climateaction #AOC',
        createdAt: '2024-06-02T01:48:19.216Z',
        updatedAt: '2024-06-02T01:48:19.216Z',
        likeCount: 0,
        repostCount: 0,
        replyCount: 0,
        postImages: [
            {
                id: '10',
                url: 'https://hips.hearstapps.com/hmg-prod/images/representative-alexandria-ocasio-cortez-democrat-of-new-news-photo-1094968460-1550239505.jpg?crop=0.643xw:1.00xh;0.179xw,0&resize=1200:*',
                caption: 'Climate Rally',
            },
        ],
        author: {
            id: '7',
            username: 'alexandriaoc',
            profileImage: {
                url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrtVh3GY5Wf2x3WBj2AXsFxD7fNcqXoP8UFw&s',
            },
        },
    },
    {
        id: '10',
        body: 'New campaign shoot with @CalvinKlein! 📸 #ModelLife #CalvinKlein',
        createdAt: '2024-06-02T01:48:19.218Z',
        updatedAt: '2024-06-02T01:48:19.218Z',
        likeCount: 0,
        repostCount: 0,
        replyCount: 0,
        postImages: [
            {
                id: '11',
                url: 'https://hips.hearstapps.com/hmg-prod/images/fa23-kendall-jenner-5-photo-credit-inez-and-vinoodh-64da303970218.jpg',
                caption: 'Calvin Klein Shoot',
            },
        ],
        author: {
            id: '8',
            username: 'kendalljenner',
            profileImage: {
                url: 'https://i.pinimg.com/280x280_RS/44/c6/60/44c6604ec5e092c5432b1aaa6756a0d6.jpg',
            },
        },
    },
    {
        id: '11',
        body: 'Excited to share our vision for the metaverse! 🌐 #Facebook #Metaverse',
        createdAt: '2024-06-02T01:48:19.220Z',
        updatedAt: '2024-06-02T01:48:19.220Z',
        likeCount: 0,
        repostCount: 0,
        replyCount: 0,
        postImages: [
            {
                id: '12',
                url: 'https://static01.nyt.com/images/2021/10/28/business/28facebook-handouts-10/28facebook-handouts-10-superJumbo.jpg',
                caption: 'Metaverse Concept',
            },
        ],
        author: {
            id: '9',
            username: 'markzuckerberg',
            profileImage: {
                url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvTjskvm_jjZj0mMdPsSOmMmjwgWegx0icEA&s',
            },
        },
    },
    {
        id: '12',
        body: 'Thank U, Next music video is out now! 💖 #ThankUNext #NewMusic',
        createdAt: '2024-06-02T01:48:19.221Z',
        updatedAt: '2024-06-02T01:48:19.221Z',
        likeCount: 0,
        repostCount: 0,
        replyCount: 0,
        postImages: [
            {
                id: '13',
                url: 'https://hips.hearstapps.com/hmg-prod/images/gedzlqgxgaamun7-65a806ec0da7a.jpeg',
                caption: 'Thank U, Next Video',
            },
        ],
        author: {
            id: '10',
            username: 'arianagrande',
            profileImage: {
                url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFAJohC4uUU9IioYfneyQXLucVu83WwTikdw&s',
            },
        },
    },
    {
        id: '13',
        body: 'Just cooked the perfect Beef Wellington! 🥩 #MasterChef #Cooking',
        createdAt: '2024-06-02T01:48:19.223Z',
        updatedAt: '2024-06-02T01:48:19.223Z',
        likeCount: 0,
        repostCount: 0,
        replyCount: 0,
        postImages: [
            {
                id: '14',
                url: 'https://pbs.twimg.com/media/FyLJfxhWAAMkh4z.jpg',
                caption: 'Beef Wellington',
            },
        ],
        author: {
            id: '11',
            username: 'gordonramsay',
            profileImage: {
                url: 'https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff6ccabba-ea38-411f-a673-04f26b5e919c_980x980.jpeg',
            },
        },
    },
    {
        id: '14',
        body: 'Exploring the cosmos in my latest book  ! 🌌 #Astrophysics #Science',
        createdAt: '2024-06-02T01:48:19.225Z',
        updatedAt: '2024-06-02T01:48:19.225Z',
        likeCount: 0,
        repostCount: 0,
        replyCount: 0,
        postImages: [
            {
                id: '15',
                url: 'https://lh3.googleusercontent.com/proxy/vh6MU4obqdgC43ORNBOjqTrCG_nOrdXP0-I7cMtEdXgTAiJ5pvzJlG3LjDg85mu8xEZFruJnlb_eSp4Xo5JxQL2C5GcEa-57JNpL8S4Lj-vvGfl1hVibdmqo6JU1psmP9iG0Y654vVgr9lcTOTVeJCUtncKLa4IHjuc1RFE',
                caption: 'Cosmos Book Cover',
            },
        ],
        author: {
            id: '12',
            username: 'neildegrassetyson',
            profileImage: {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Neil_deGrasse_Tyson_in_June_2017_%28cropped%29.jpg/800px-Neil_deGrasse_Tyson_in_June_2017_%28cropped%29.jpg',
            },
        },
    },
    {
        id: '15',
        body: 'New single "Your Power" out now! 🎶 #HappierThanEver',
        createdAt: '2024-06-02T01:48:19.227Z',
        updatedAt: '2024-06-02T01:48:19.227Z',
        likeCount: 0,
        repostCount: 0,
        replyCount: 0,
        postImages: [
            {
                id: '16',
                url: 'https://m.media-amazon.com/images/I/71Nv8nuGwhL._AC_UF1000,1000_QL80_.jpg',
                caption: 'Your Power Single',
            },
        ],
        author: {
            id: '13',
            username: 'billieeilish',
            profileImage: {
                url: 'https://image.tienphong.vn/w890/Uploaded/2024/zaugtn/2021_06_22/tien-phong-billieeilish-6083.jpeg',
            },
        },
    },
]
