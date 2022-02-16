import { USERS } from './users'

export const POSTS = [
  {
    imageUrl: 'https://th-thumbnailer.cdn-si-edu.com/vSnitgUqCQCRSx7mkHZtHZHry4U=/1072x720/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/04/8e/048ed839-a581-48af-a0ae-fac6fec00948/gettyimages-168346757_web.jpg',
    user: USERS[0].user,
    likes: 7870,
    caption: 'Train Ride to Hogwarts. This build looks fire. Super excited aboout this!',
    profile_picture: USERS[0].Image,
    comments: [
      {
        user: 'akhmedov',
        comment: "Wow! This build looks fire. Super excited aboout this!"
      },
      {
        user: 'amaanath.dev',
        comment: "Once I wake up, I'll finally be ready to code this up!"
      },
    ]
  },
  {
    imageUrl: 'https://www.iss.europa.eu/sites/default/files/styles/large_banner_image/public/city-5000648_1920%20banner.jpg?itok=2VD5CQf5?%3E',
    user: USERS[1].user,
    likes: 3640,
    caption: 'This is one of the biggest city. This build looks fire. Super excited aboout this!',
    profile_picture: USERS[1].Image,
    comments: [
      {
        user: 'thompson',
        comment: "It's amazing view, I never see like this photo"
      },
      {
        user: 'travellerben',
        comment: "Once I wake up, I'll finally be ready to code this up!"
      },
    ]
  },
  {
    imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/new-york-skyline-on-a-sunny-day-with-clear-blue-sky-royalty-free-image-1577127184.jpg',
    user: USERS[2].user,
    likes: 1251,
    caption: 'It is very good building in the world. This build looks fire. Super excited aboout this!',
    profile_picture: USERS[2].Image,
    comments: [
      {
        user: 'akhmedov',
        comment: "Wow! This build looks fire. Super excited aboout this!"
      },
      {
        user: 'amaanath.dev',
        comment: "Once I wake up, I'll finally be ready to code this up!"
      },
    ]
  },
]