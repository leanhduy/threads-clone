const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

// seed data objects
const userData = [
  {
    username: 'netninja',
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
]

module.exports = { userData }

async function main() {
  console.log(`Start seeding...`)
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
  // ! NOTE: When update sample data, notice the duplicate in Follows table, when set up the `followed` and `following` field for User model
  for (const user of userData) {
    for (const followedByUser of user.followedBy || []) {
      const followedUser = createdUsers.find((u) => u.id === followedByUser.id)
      try {
        await prisma.follows.create({
          data: {
            followedById: followedUser.id,
            followingId: createdUsers.find((u) => u.username === user.username)
              .id,
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
            followedById: createdUsers.find((u) => u.username === user.username)
              .id,
            followingId: followingUser.id,
          },
        })
      } catch (err) {
        console.error(err)
        continue
      }
    }
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
