export const postsAPI = 'http://localhost:3001/posts'
export const usersAPI = 'http://localhost:3001/users'
export const commentsAPI = 'http://localhost:3001/comments'

// TODO: LATER CONVERT THESE MOCK INTO DATABASE DESIGN & BUILD GRAPHQL SERVER FOR THEM
// ? Users
export const mockUsers = [
    {
        id: '1a2b3c4d',
        user_name: 'andy73',
        password: 'secure_password',
        bio: 'Web developer passionate about creating awesome apps!',
        avatarURL:
            'https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdlYiUyMGRldmVsb3BlcnxlbnwwfHwwfHx8Mg%3D%3D',
        link: 'https://twitter.com/andy73',
        isPrivateProfile: false,
    },
    {
        id: '5e6f7g8h',
        user_name: 'jessie_21',
        password: 'strong_password123',
        bio: 'Designer and coffee enthusiast ☕',
        avatarURL:
            'https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHx8Mg%3D%3D',
        link: null,
        isPrivateProfile: true,
    },
    {
        id: '9i0j1k2l',
        user_name: 'coding_ninja',
        password: 'secret_code',
        bio: 'Full-stack developer on a mission to simplify complexity!',
        avatarURL:
            'https://images.unsplash.com/photo-1552308995-2baac1ad5490?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nJTIwbmluamF8ZW58MHx8MHx8fDI%3D',
        link: 'https://github.com/coding_ninja',
        isPrivateProfile: false,
    },
    {
        id: '3m4n5o6p',
        user_name: 'musiclover',
        password: 'melody123',
        bio: 'Music producer and vinyl collector 🎵',
        avatarURL:
            'https://images.unsplash.com/photo-1597656370793-12900b6d9a28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG11c2ljaWFufGVufDB8fDB8fHwy',
        link: 'https://soundcloud.com/musiclover',
        isPrivateProfile: false,
    },
    {
        id: '7q8r9s0t',
        user_name: 'travelbug',
        password: 'wanderlust',
        bio: 'Exploring the world one city at a time ✈️',
        avatarURL:
            'https://images.unsplash.com/photo-1606525380696-c2bfe72f7b8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsZXJ8ZW58MHx8MHx8fDI%3D',
        link: 'https://instagram.com/travelbug',
        isPrivateProfile: true,
    },
    {
        id: '2a3bot01',
        user_name: 'bot01',
        password: 'password01',
        bio: 'Passionate about exploring new technologies!',
        avatarURL: 'myimage.png',
        link: '',
        isPrivateProfile: false,
    },
    {
        id: '2a3bot02',
        user_name: 'bot02',
        password: 'password01',
        bio: 'Passionate about exploring new technologies!',
        avatarURL: 'myimage.png',
        link: '',
        isPrivateProfile: false,
    },
    {
        id: '2a3bot03',
        user_name: 'bot03',
        password: 'password01',
        bio: 'Passionate about exploring new technologies!',
        avatarURL: 'myimage.png',
        link: '',
        isPrivateProfile: false,
    },
    {
        id: '2a3bot04',
        user_name: 'bot04',
        password: 'password01',
        bio: 'Passionate about exploring new technologies!',
        avatarURL: 'myimage.png',
        link: '',
        isPrivateProfile: false,
    },
    {
        id: '2a3bot05',
        user_name: 'bot05',
        password: 'password01',
        bio: 'Passionate about exploring new technologies!',
        avatarURL: 'myimage.png',
        link: '',
        isPrivateProfile: false,
    },
    {
        id: '2a3bot06',
        user_name: 'bot06',
        password: 'password01',
        bio: 'Passionate about exploring new technologies!',
        avatarURL: 'myimage.png',
        link: '',
        isPrivateProfile: false,
    },
    {
        id: '2a3bot07',
        user_name: 'bot07',
        password: 'password01',
        bio: 'Passionate about exploring new technologies!',
        avatarURL: 'myimage.png',
        link: '',
        isPrivateProfile: false,
    },
    {
        id: '2a3bot08',
        user_name: 'bot08',
        password: 'password01',
        bio: 'Passionate about exploring new technologies!',
        avatarURL: 'myimage.png',
        link: '',
        isPrivateProfile: false,
    },
    {
        id: '2a3bot09',
        user_name: 'bot09',
        password: 'password01',
        bio: 'Passionate about exploring new technologies!',
        avatarURL: 'myimage.png',
        link: '',
        isPrivateProfile: false,
    },
    {
        id: '2a3bot10',
        user_name: 'bot10',
        password: 'password01',
        bio: 'Passionate about exploring new technologies!',
        avatarURL: 'myimage.png',
        link: '',
        isPrivateProfile: false,
    },
]

// ? Posts
export const mockPosts = [
    {
        id: '1a2b3c4d',
        post_body: 'Just had an amazing hike! 🌲🏞️',
        post_images: [
            'https://images.unsplash.com/photo-1568454537842-d933259bb258?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGlraW5nfGVufDB8fDB8fHwy',
            'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW5zfGVufDB8fDB8fHwy',
        ],
        upload_timestamp: '2024-05-01T10:30:00Z',
        likes_count: 25,
        reply_count: 0,
        repost_count: 8,
        comments: ['c1d2e3f4', 'g9h0i1j2'],
        isComment: false,
        author: {
            id: '1a2b3c4d',
            user_name: 'andy73',
            avatarURL:
                'https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdlYiUyMGRldmVsb3BlcnxlbnwwfHwwfHx8Mg%3D%3D',
        },
    },
    {
        id: '3m4n5o6p',
        post_body: 'Sunset at the beach 🌅',
        post_images: [
            'https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2glMjBzdW5zZXR8ZW58MHx8MHx8fDI%3D',
        ],
        upload_timestamp: '2024-05-02T18:45:00Z',
        likes_count: 42,
        reply_count: 0,
        repost_count: 12,
        comments: ['k3l4m5n6', 'o7p8q9r0'],
        isComment: false,
        author: {
            id: '3m4n5o6p',
            user_name: 'musiclover',
            avatarURL:
                'https://images.unsplash.com/photo-1597656370793-12900b6d9a28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG11c2ljaWFufGVufDB8fDB8fHwy',
        },
    },
    {
        id: 'a1b2c3d4',
        post_body: 'Exploring ancient ruins 🏛️🌿',
        post_images: [
            'https://images.unsplash.com/photo-1670772823082-a616473fb0ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFuY2llbnQlMjBydWlufGVufDB8fDB8fHwy',
            'https://images.unsplash.com/photo-1507475380673-1246fa72eeea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFuY2llbnQlMjBydWlufGVufDB8fDB8fHwy',
        ],
        upload_timestamp: '2024-05-08T13:15:00Z',
        likes_count: 20,
        reply_count: 0,
        repost_count: 4,
        comments: ['c5d6e7f8', 'g9h0i1j2'],
        isComment: false,
        author: {
            id: '3m4n5o6p',
            user_name: 'musiclover',
            avatarURL:
                'https://images.unsplash.com/photo-1597656370793-12900b6d9a28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG11c2ljaWFufGVufDB8fDB8fHwy',
        },
    },
    {
        id: 'k3l4m5n6',
        post_body: 'Sunset over the lake 🌅🚣‍♂️',
        post_images: [
            'https://images.unsplash.com/photo-1525954294489-85bb0c9d2369?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFrZSUyMHN1bnNldHxlbnwwfHwwfHx8Mg%3D%3D',
        ],
        upload_timestamp: '2024-05-09T19:45:00Z',
        likes_count: 35,
        reply_count: 0,
        repost_count: 10,
        comments: ['o7p8q9r0', 's1t2u3v4'],
        isComment: false,
        author: {
            id: '7q8r9s0t',
            user_name: 'travelbug',
            avatarURL:
                'https://images.unsplash.com/photo-1606525380696-c2bfe72f7b8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsZXJ8ZW58MHx8MHx8fDI%3D',
        },
    },
    {
        id: 'w5x6y7z8',
        post_body: 'Urban art vibes 🎨🏙️',
        post_images: [
            'https://images.unsplash.com/photo-1585336671611-84c832187eab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXJiYW4lMjBhcnR8ZW58MHx8MHx8fDI%3D',
        ],
        upload_timestamp: '2024-05-10T11:30:00Z',
        likes_count: 28,
        reply_count: 0,
        repost_count: 6,
        comments: ['a1b2c3d4', 'e5f6g7h8'],
        isComment: false,
        author: {
            id: '7q8r9s0t',
            user_name: 'travelbug',
            avatarURL:
                'https://images.unsplash.com/photo-1606525380696-c2bfe72f7b8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsZXJ8ZW58MHx8MHx8fDI%3D',
        },
    },
    {
        id: '034a746b',
        post_body: 'Backto childhood with book!',
        post_images: [
            'blob:http://localhost:3000/a12298a1-9810-4675-b92c-bf84ce0fdefe',
        ],
        upload_timestamp: '2024-05-17T11:05:28.602Z',
        likes_count: 0,
        reply_count: 0,
        repost_count: 0,
        comments: [],
        isComment: false,
        author: {
            id: '1a2b3c4d',
            user_name: 'andy73',
            avatarURL:
                'https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdlYiUyMGRldmVsb3BlcnxlbnwwfHwwfHx8Mg%3D%3D',
        },
    },
    {
        id: 'a475fd59',
        post_body: 'Second day in the #100dayofreading, feeling good! 😎 📖 😻',
        post_images: [
            'blob:http://localhost:3000/c6e4a1dd-9f79-420c-b71d-db6422dd2985',
        ],
        upload_timestamp: '2024-05-17T11:35:52.339Z',
        likes_count: 0,
        reply_count: 0,
        repost_count: 0,
        comments: [],
        isComment: false,
        author: {
            id: '1a2b3c4d',
            user_name: 'andy73',
            avatarURL:
                'https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdlYiUyMGRldmVsb3BlcnxlbnwwfHwwfHx8Mg%3D%3D',
        },
    },
    {
        id: 'c1d2e3f4',
        post_body: 'Beautiful scenery! 😍',
        post_image: [],
        upload_timestamp: '2024-05-01T11:00:00Z',
        likes_count: 5,
        reply_count: 0,
        repost_count: 0,
        comments: [],
        isComment: true,
        author: {
            id: '9i0j1k2l',
            user_name: 'coding_ninja',
            avatarURL:
                'https://images.unsplash.com/photo-1552308995-2baac1ad5490?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nJTIwbmluamF8ZW58MHx8MHx8fDI%3D',
        },
    },
    {
        id: 'g9h0i1x2',
        post_body: 'Looks like a great adventure!',
        post_image: [],
        upload_timestamp: '2024-05-01T11:15:00Z',
        likes_count: 3,
        reply_count: 0,
        repost_count: 0,
        comments: [],
        isComment: true,
        author: {
            id: '9i0j1k2l',
            user_name: 'coding_ninja',
            avatarURL:
                'https://images.unsplash.com/photo-1552308995-2baac1ad5490?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nJTIwbmluamF8ZW58MHx8MHx8fDI%3D',
        },
    },
    {
        id: 'k3l4m5x6',
        post_body: 'Magical colors! 🌟',
        post_image: [],
        upload_timestamp: '2024-05-02T19:00:00Z',
        likes_count: 8,
        reply_count: 0,
        repost_count: 0,
        comments: [],
        isComment: true,
        author: {
            id: '7q8r9s0t',
            user_name: 'travelbug',
            avatarURL:
                'https://images.unsplash.com/photo-1606525380696-c2bfe72f7b8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsZXJ8ZW58MHx8MHx8fDI%3D',
        },
    },
    {
        id: 'o7p8q9x0',
        post_body: 'Wish I was there!',
        post_image: [],
        upload_timestamp: '2024-05-02T19:10:00Z',
        likes_count: 2,
        reply_count: 0,
        repost_count: 0,
        comments: [],
        isComment: true,
        author: {
            id: '3m4n5o6p',
            user_name: 'musiclover',
            avatarURL:
                'https://images.unsplash.com/photo-1597656370793-12900b6d9a28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG11c2ljaWFufGVufDB8fDB8fHwy',
        },
    },
    {
        id: 'c5d6e7f8',
        post_body: 'Fascinating history! 🗿',
        post_image: [],
        upload_timestamp: '2024-05-08T14:00:00Z',
        likes_count: 6,
        reply_count: 0,
        repost_count: 0,
        comments: [],
        isComment: true,
        author: {
            id: '5e6f7g8h',
            user_name: 'jessie_21',
            avatarURL:
                'https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHx8Mg%3D%3D',
        },
    },
    {
        id: 'g9h0i1j2',
        post_body: 'Are those hieroglyphics? 🤔',
        post_image: [],
        upload_timestamp: '2024-05-08T14:30:00Z',
        likes_count: 3,
        reply_count: 0,
        repost_count: 0,
        comments: [],
        isComment: true,
        author: {
            id: '9i0j1k2l',
            user_name: 'coding_ninja',
            avatarURL:
                'https://images.unsplash.com/photo-1552308995-2baac1ad5490?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nJTIwbmluamF8ZW58MHx8MHx8fDI%3D',
        },
    },
    {
        id: 'o7p8q9r0',
        post_body: 'Perfect reflection! 🌟',
        post_image: [],
        upload_timestamp: '2024-05-09T20:00:00Z',
        likes_count: 7,
        reply_count: 0,
        repost_count: 0,
        comments: [],
        isComment: true,
        author: {
            id: '7q8r9s0t',
            user_name: 'travelbug',
            avatarURL:
                'https://images.unsplash.com/photo-1606525380696-c2bfe72f7b8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsZXJ8ZW58MHx8MHx8fDI%3D',
        },
    },
    {
        id: 's1t2u3v4',
        post_body: 'I wish I could be there right now.',
        post_image: [],
        upload_timestamp: '2024-05-09T20:15:00Z',
        likes_count: 2,
        reply_count: 0,
        repost_count: 0,
        comments: [],
        isComment: true,
        author: {
            id: '9i0j1k2l',
            user_name: 'coding_ninja',
            avatarURL:
                'https://images.unsplash.com/photo-1552308995-2baac1ad5490?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nJTIwbmluamF8ZW58MHx8MHx8fDI%3D',
        },
    },
    {
        id: 'a1b2c3x4',
        post_body: 'Love the colors! 🌈',
        post_image: [],
        upload_timestamp: '2024-05-10T11:45:00Z',
        likes_count: 4,
        reply_count: 0,
        repost_count: 0,
        comments: [],
        isComment: true,
        author: {
            id: '9i0j1k2l',
            user_name: 'coding_ninja',
            avatarURL:
                'https://images.unsplash.com/photo-1552308995-2baac1ad5490?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nJTIwbmluamF8ZW58MHx8MHx8fDI%3D',
        },
    },
    {
        id: 'e5f6g7h8',
        post_body: 'Street artists are so talented!',
        post_image: [],
        upload_timestamp: '2024-05-10T12:00:00Z',
        likes_count: 3,
        reply_count: 0,
        repost_count: 0,
        comments: [],
        isComment: true,
        author: {
            id: '5e6f7g8h',
            user_name: 'jessie_21',
            avatarURL:
                'https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHx8Mg%3D%3D',
        },
    },
]

// ? Activity [Follows] = list of all followers
export const mockActivityFollows = [
    {
        id: '5e6f7g8h',
        user_name: 'jessie_21',
        avatarURL:
            'https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHx8Mg%3D%3D',
        followMeAt: '2024-05-21T11:15:00Z',
        isFollowing: true,
    },
    {
        id: '9i0j1k2l',
        user_name: 'coding_ninja',
        avatarURL:
            'https://images.unsplash.com/photo-1552308995-2baac1ad5490?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nJTIwbmluamF8ZW58MHx8MHx8fDI%3D',
        followMeAt: '2024-05-01T11:15:00Z',
        isFollowing: false,
    },
]

// ? Activity [Replies] = Reply on user's posts
export const mockActivityReplies = [
    {
        id: '3m4n5o6p',
        post_body:
            '🌅 Started the afternoon with a refreshing run along the beach, feeling the sand beneath my feet and the cool breeze in my hair. The reward? Witnessing this breathtaking sunset paint the sky in a kaleidoscope of colors. Pure bliss! #beachlife #sunsetchaser #runnershigh',
        comment: {
            id: 'c1d2e3f4',
            comment_body: 'Beautiful scenery! 😍',
            upload_timestamp: '2024-05-01T11:00:00Z',
            author: {
                id: '9i0j1k2l',
                user_name: 'coding_ninja',
                avatarURL:
                    'https://images.unsplash.com/photo-1552308995-2baac1ad5490?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nJTIwbmluamF8ZW58MHx8MHx8fDI%3D',
            },
        },
    },
    {
        id: 'w5x6y7z8',
        post_body:
            'Urban art vibes 🎨🏙️. Walking through my neighborhood today and BAM!  This incredible graffiti piece stopped me in my tracks. Love the way the artist uses color and form to create such a dynamic scene. A great reminder that art can be found everywhere, even on the walls of our city.  #urbanartvibes #streetart #artonthestreet',
        comment: {
            comment_body: 'Magical colors! 🌟',
            upload_timestamp: '2024-05-02T19:00:00Z',
            author: {
                id: '7q8r9s0t',
                user_name: 'travelbug',
                avatarURL:
                    'https://images.unsplash.com/photo-1606525380696-c2bfe72f7b8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsZXJ8ZW58MHx8MHx8fDI%3D',
            },
        },
    },
]

// ? Activity [Replies] = Post that mentions you
export const mockActivityMentions = [
    {
        id: '1a2b3c4d',
        post_body: 'Just had an amazing hike! 🌲🏞️',
        upload_timestamp: '2024-05-01T10:30:00Z',
        likes_count: 25,
        reply_count: 0,
        repost_count: 8,
        author: {
            user_name: 'andy73',
            avatarURL:
                'https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdlYiUyMGRldmVsb3BlcnxlbnwwfHwwfHx8Mg%3D%3D',
        },
    },
]

// ? Activity [All] = Result of all other filters
export const mockActivityAll = {
    follows: mockActivityFollows,
    replies: mockActivityReplies,
    mentions: mockActivityMentions,
}
