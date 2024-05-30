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
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReqaJqLgwkn6iv6zYnGstD4KwDa25jEaxjDA&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReqaJqLgwkn6iv6zYnGstD4KwDa25jEaxjDA&s',
      },
    },
    posts: {
      create: [
        {
          body: 'Just released a new React tutorial! Check it out: [link]',
          postImages: {
            create: [
              {
                url: 'https://via.placeholder.com/600x400',
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
                url: 'https://via.placeholder.com/500x300',
                caption: 'Conference Stage',
              },
              {
                url: 'https://via.placeholder.com/400x400',
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
        url: 'https://via.placeholder.com/300x300',
      },
    },
    posts: {
      create: [
        {
          body: 'Back on the court and feeling great! 💪 #tennis #training #nevergiveup',
          postImages: {
            create: [
              {
                url: 'https://via.placeholder.com/600x400',
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
                url: 'https://via.placeholder.com/400x300',
                caption: 'Family Time',
              },
            ],
          },
        },
      ],
    },
    followedBy: [{ id: 3 }], // Followers
    // following: [], // Following
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
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/800px-Albert_Einstein_Head.jpg',
      },
    },
    posts: {
      create: [
        {
          body: 'The most beautiful thing we can experience is the mysterious. It is the source of all true art and science. #science #mystery',
          postImages: {
            create: [
              {
                url: 'https://via.placeholder.com/500x350',
                caption: "Einstein's Blackboard",
              },
            ],
          },
        },
      ],
    },
    // followedBy: [{ id: 1 }], // Followers
    // following: [{ id: 1 }], // Following
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
