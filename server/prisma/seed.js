const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

// seed data objects
const userData = [
  {
    username: 'netninja',
    password: '$2a$10$9WUHQzWDgcEXuwskfV5C5Oxc3N0cYtvzoY6tcxT7aOQxXNbvu47ZS',
    fullname: 'Shaun Pelling',
    bio: 'Coding tutorials & courses | #netninja | youtube.com/thenetninja',
    followerCount: 1,
    followingCount: 2,
    postCount: 2,
    profileImage: {
      create: {
        url: 'https://avatars.githubusercontent.com/u/9838872?v=4',
      },
    },
    posts: {
      create: [
        {
          body: 'Just released a new React tutorial! Check it out: [link]',
          postImages: {
            create: [
              {
                url: 'https://cdn.fs.teachablecdn.com/u8LFsjeERwyHlzyIg4w0',
                caption: 'React Tutorial Thumbnail',
              },
            ],
          },
        },
        {
          body: 'Excited to be speaking at the upcoming Web Dev Conference! #webdev #conference',
          postImages: {
            create: [
              {
                url: 'https://merehead.com/blog/wp-content/uploads/10-16.jpg',
                caption: 'Conference Stage',
              },
              {
                url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj8ReQI8KoypV30sbHm9suv92CKGAxTsAbBA&s',
                caption: 'Conference Logo',
              },
            ],
          },
        },
      ],
    },
    followedBy: [{ id: 3 }], // Followers
    following: [{ id: 2 }, { id: 3 }], // Following
  },
  {
    username: 'serenawilliams',
    password: '$2a$10$9WUHQzWDgcEXuwskfV5C5Oxc3N0cYtvzoY6tcxT7aOQxXNbvu47ZS',
    fullname: 'Serena Williams',
    bio: 'Tennis champion 🎾 | Entrepreneur | Mom | Advocate for change 💫',
    followerCount: 2,
    followingCount: 0,
    postCount: 2,
    profileImage: {
      create: {
        url: 'https://media.vogue.fr/photos/62f376b89b00e2dab9f259a9/2:3/w_2560%2Cc_limit/00-story%2520(10).jpg',
      },
    },
    posts: {
      create: [
        {
          body: 'Back on the court and feeling great! 💪 #tennis #training #nevergiveup',
          postImages: {
            create: [
              {
                url: 'https://people.com/thmb/84DrQQxD1fHana0mkkpTieZ2ETs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(733x27:735x29)/serena-williams-insta-041823-14627b51d13144ceb7877a838070c418.jpg',
                caption: 'Tennis Practice',
              },
            ],
          },
        },
        {
          body: "Spending quality time with my daughter Olympia. She's my inspiration! 💖 #family #love",
          postImages: {
            create: [
              {
                url: 'https://s.yimg.com/ny/api/res/1.2/1g39Eu98IAwplNFhgtMKHA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/en/people_218/c22f4f5e64a5faccf70496f29d50724b',
                caption: 'Family Time',
              },
            ],
          },
        },
      ],
    },
    followedBy: [{ id: 3 }], // Followers
  },
  {
    username: 'prof_einstein',
    password: '$2a$10$9WUHQzWDgcEXuwskfV5C5Oxc3N0cYtvzoY6tcxT7aOQxXNbvu47ZS',
    fullname: 'Dr. Albert Einstein',
    bio: 'Theoretical physicist ⚛️ | Nobel laureate | Passionate about science and education 📚',
    followerCount: 1,
    followingCount: 1,
    postCount: 1,
    profileImage: {
      create: {
        url: 'https://storage.googleapis.com/pai-images/437b278abeb1460480fe1795abf9f524.jpeg',
      },
    },
    posts: {
      create: [
        {
          body: 'The most beautiful thing we can experience is the mysterious. It is the source of all true art and science. #science #mystery',
          postImages: {
            create: [
              {
                url: 'https://i.insider.com/560c063b9dd7cc1d008be271?width=800&format=jpeg&auto=webp',
                caption: "Einstein's Blackboard",
              },
            ],
          },
        },
      ],
    },
  },
  {
    username: 'elonmusk',
    password: '$2a$10$9WUHQzWDgcEXuwskfV5C5Oxc3N0cYtvzoY6tcxT7aOQxXNbvu47ZS',
    fullname: 'Elon Musk',
    bio: 'Technoking of Tesla | SpaceX | Neuralink | Boring Company 🚀',
    followerCount: 0,
    followingCount: 0,
    postCount: 1,
    profileImage: {
      create: {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE96oXuB1-wvAWe_rG7eAgEf4iGs6Dt3EJRQ&s',
      },
    },
    posts: {
      create: [
        {
          body: 'Announcing the latest Tesla Model X upgrade! #Tesla #ElectricVehicles',
          postImages: {
            create: [
              {
                url: 'https://images.news18.com/ibnlive/uploads/2020/07/1595688994_tesla-ceo-elon-musk-model-x.jpg?impolicy=website&width=640&height=480',
                caption: 'Tesla Model X',
              },
            ],
          },
        },
      ],
    },
  },
  {
    username: 'taylorswift',
    password: '$2a$10$9WUHQzWDgcEXuwskfV5C5Oxc3N0cYtvzoY6tcxT7aOQxXNbvu47ZS',
    fullname: 'Taylor Swift',
    bio: 'Singer-songwriter | Lover of cats | 📷 by you',
    followerCount: 0,
    followingCount: 0,
    postCount: 1,
    profileImage: {
      create: {
        url: 'https://i.pinimg.com/736x/bc/39/ef/bc39ef07bfbd9d2ecd8df176666b3744.jpg',
      },
    },
    posts: {
      create: [
        {
          body: 'New album out now! 💕 #folklore #newmusic',
          postImages: {
            create: [
              {
                url: 'https://i0.wp.com/radio.rutgers.edu/wp-content/uploads/2020/10/folklore.jpg?resize=360%2C360',
                caption: 'Folklore Album Cover',
              },
            ],
          },
        },
      ],
    },
  },
  {
    username: 'leomessi',
    password: '$2a$10$9WUHQzWDgcEXuwskfV5C5Oxc3N0cYtvzoY6tcxT7aOQxXNbvu47ZS',
    fullname: 'Lionel Messi',
    bio: 'Professional footballer ⚽ | FC Barcelona | Argentina 🇦🇷',
    followerCount: 0,
    followingCount: 0,
    postCount: 1,
    profileImage: {
      create: {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLQVYWtXykQrsxeoTqmfOPz4O_zdWN34nnrw&s',
      },
    },
    posts: {
      create: [
        {
          body: 'Training hard for the next match! 💪 #football #Barcelona',
          postImages: {
            create: [
              {
                url: 'https://pbs.twimg.com/media/EYJhq5KVcAE6G3Y.jpg',
                caption: 'Training Session',
              },
            ],
          },
        },
      ],
    },
  },
  {
    username: 'alexandriaoc',
    password: '$2a$10$9WUHQzWDgcEXuwskfV5C5Oxc3N0cYtvzoY6tcxT7aOQxXNbvu47ZS',
    fullname: 'Alexandria Ocasio-Cortez',
    bio: 'Congresswoman for NY-14 | Progressive Democrat | Advocate for social justice 🌱',
    followerCount: 0,
    followingCount: 0,
    postCount: 1,
    profileImage: {
      create: {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrtVh3GY5Wf2x3WBj2AXsFxD7fNcqXoP8UFw&s',
      },
    },
    posts: {
      create: [
        {
          body: 'Fighting for a Green New Deal! 🌎 #climateaction #AOC',
          postImages: {
            create: [
              {
                url: 'https://hips.hearstapps.com/hmg-prod/images/representative-alexandria-ocasio-cortez-democrat-of-new-news-photo-1094968460-1550239505.jpg?crop=0.643xw:1.00xh;0.179xw,0&resize=1200:*',
                caption: 'Climate Rally',
              },
            ],
          },
        },
      ],
    },
  },
  {
    username: 'kendalljenner',
    password: '$2a$10$9WUHQzWDgcEXuwskfV5C5Oxc3N0cYtvzoY6tcxT7aOQxXNbvu47ZS',
    fullname: 'Kendall Jenner',
    bio: 'Model | Entrepreneur | Lover of life 🌟',
    followerCount: 0,
    followingCount: 0,
    postCount: 1,
    profileImage: {
      create: {
        url: 'https://i.pinimg.com/280x280_RS/44/c6/60/44c6604ec5e092c5432b1aaa6756a0d6.jpg',
      },
    },
    posts: {
      create: [
        {
          body: 'New campaign shoot with @CalvinKlein! 📸 #ModelLife #CalvinKlein',
          postImages: {
            create: [
              {
                url: 'https://hips.hearstapps.com/hmg-prod/images/fa23-kendall-jenner-5-photo-credit-inez-and-vinoodh-64da303970218.jpg',
                caption: 'Calvin Klein Shoot',
              },
            ],
          },
        },
      ],
    },
  },
  {
    username: 'markzuckerberg',
    password: '$2a$10$9WUHQzWDgcEXuwskfV5C5Oxc3N0cYtvzoY6tcxT7aOQxXNbvu47ZS',
    fullname: 'Mark Zuckerberg',
    bio: 'Co-founder of Facebook | Building the metaverse 🧑‍💻',
    followerCount: 0,
    followingCount: 0,
    postCount: 1,
    profileImage: {
      create: {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvTjskvm_jjZj0mMdPsSOmMmjwgWegx0icEA&s',
      },
    },
    posts: {
      create: [
        {
          body: 'Excited to share our vision for the metaverse! 🌐 #Facebook #Metaverse',
          postImages: {
            create: [
              {
                url: 'https://static01.nyt.com/images/2021/10/28/business/28facebook-handouts-10/28facebook-handouts-10-superJumbo.jpg',
                caption: 'Metaverse Concept',
              },
            ],
          },
        },
      ],
    },
  },
  {
    username: 'arianagrande',
    password: '$2a$10$9WUHQzWDgcEXuwskfV5C5Oxc3N0cYtvzoY6tcxT7aOQxXNbvu47ZS',
    fullname: 'Ariana Grande',
    bio: 'Singer | Actress | Sweetener | Thank U, Next 🌸',
    followerCount: 0,
    followingCount: 0,
    postCount: 1,
    profileImage: {
      create: {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFAJohC4uUU9IioYfneyQXLucVu83WwTikdw&s',
      },
    },
    posts: {
      create: [
        {
          body: 'Thank U, Next music video is out now! 💖 #ThankUNext #NewMusic',
          postImages: {
            create: [
              {
                url: 'https://hips.hearstapps.com/hmg-prod/images/gedzlqgxgaamun7-65a806ec0da7a.jpeg',
                caption: 'Thank U, Next Video',
              },
            ],
          },
        },
      ],
    },
  },
  {
    username: 'gordonramsay',
    password: '$2a$10$9WUHQzWDgcEXuwskfV5C5Oxc3N0cYtvzoY6tcxT7aOQxXNbvu47ZS',
    fullname: 'Gordon Ramsay',
    bio: 'Chef | Restauranteur | MasterChef | Hell’s Kitchen 🍽️',
    followerCount: 0,
    followingCount: 0,
    postCount: 1,
    profileImage: {
      create: {
        url: 'https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff6ccabba-ea38-411f-a673-04f26b5e919c_980x980.jpeg',
      },
    },
    posts: {
      create: [
        {
          body: 'Just cooked the perfect Beef Wellington! 🥩 #MasterChef #Cooking',
          postImages: {
            create: [
              {
                url: 'https://pbs.twimg.com/media/FyLJfxhWAAMkh4z.jpg',
                caption: 'Beef Wellington',
              },
            ],
          },
        },
      ],
    },
  },
  {
    username: 'neildegrassetyson',
    password: '$2a$10$9WUHQzWDgcEXuwskfV5C5Oxc3N0cYtvzoY6tcxT7aOQxXNbvu47ZS',
    fullname: 'Neil deGrasse Tyson',
    bio: 'Astrophysicist | Author | Science Communicator 🔭',
    followerCount: 0,
    followingCount: 0,
    postCount: 1,
    profileImage: {
      create: {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Neil_deGrasse_Tyson_in_June_2017_%28cropped%29.jpg/800px-Neil_deGrasse_Tyson_in_June_2017_%28cropped%29.jpg',
      },
    },
    posts: {
      create: [
        {
          body: 'Exploring the cosmos in my latest book  ! 🌌 #Astrophysics #Science',
          postImages: {
            create: [
              {
                url: 'https://lh3.googleusercontent.com/proxy/vh6MU4obqdgC43ORNBOjqTrCG_nOrdXP0-I7cMtEdXgTAiJ5pvzJlG3LjDg85mu8xEZFruJnlb_eSp4Xo5JxQL2C5GcEa-57JNpL8S4Lj-vvGfl1hVibdmqo6JU1psmP9iG0Y654vVgr9lcTOTVeJCUtncKLa4IHjuc1RFE',
                caption: 'Cosmos Book Cover',
              },
            ],
          },
        },
      ],
    },
  },
  {
    username: 'billieeilish',
    password: '$2a$10$9WUHQzWDgcEXuwskfV5C5Oxc3N0cYtvzoY6tcxT7aOQxXNbvu47ZS',
    fullname: 'Billie Eilish',
    bio: 'Singer-songwriter | Happier Than Ever | 🌱 Vegan',
    followerCount: 0,
    followingCount: 0,
    postCount: 1,
    profileImage: {
      create: {
        url: 'https://image.tienphong.vn/w890/Uploaded/2024/zaugtn/2021_06_22/tien-phong-billieeilish-6083.jpeg',
      },
    },
    posts: {
      create: [
        {
          body: 'New single "Your Power" out now! 🎶 #HappierThanEver',
          postImages: {
            create: [
              {
                url: 'https://m.media-amazon.com/images/I/71Nv8nuGwhL._AC_UF1000,1000_QL80_.jpg',
                caption: 'Your Power Single',
              },
            ],
          },
        },
      ],
    },
  },
]

module.exports = { userData }

async function main() {
  console.log(`Start seeding...`)
  // 0. Only seed data if the database is empty
  // ADD CODE HERE
  const users = await prisma.user.findMany()

  if (users.length === 0) {
    let createdUsers = []
    // 1. Create all users without connections
    for (const user of userData) {
      const createdUser = await prisma.user.create({
        data: {
          ...user,
          followedBy: undefined, // Remove connections for initial creation
          following: undefined,
        },
      })
      createdUsers.push(createdUser)
    }

    // 2. Update the followedBy and following of each user
    for (const user of userData) {
      for (const followedByUser of user.followedBy || []) {
        const followedUser = createdUsers.find(
          (u) => u.id === followedByUser.id,
        )
        try {
          await prisma.follows.create({
            data: {
              followedById: followedUser.id,
              followingId: createdUsers.find(
                (u) => u.username === user.username,
              ).id,
            },
          })
        } catch (err) {
          console.error(err)
          continue
        }
      }

      for (const followingByUsername of user.following || []) {
        const followingUser = createdUsers.find(
          (u) => u.id === followingByUsername.id,
        )
        try {
          await prisma.follows.create({
            data: {
              followedById: createdUsers.find(
                (u) => u.username === user.username,
              ).id,
              followingId: followingUser.id,
            },
          })
        } catch (err) {
          console.error(err)
          continue
        }
      }
    }
  } else {
    console.log('Database is not empty. Skipping seeding data.')
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
