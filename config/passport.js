import { Strategy } from 'passport-discord'
import User from '../models/userModel.js'
import mockDiscordResponses from './passportMockUser.js'

export default function (passport) {
  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser(async (id, cb) => {
    try {
      const user = await User.findOne({ _id: id }).exec()
      const userInformation = {
        username: user.name,
        id: user._id,
        is100devs: user.is100devs
      }
      console.log(userInformation)
      cb(null, userInformation)
    } catch (err) {
      cb(err)
    }
  })

  //if (process.env.NODE_ENV === "development") mockDiscordResponses()

  passport.use(
    new Strategy({
      clientID: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      callbackURL: `/auth/discord/callback`,
      scope: ['identify', 'email', 'guilds'],
      passReqToCallback: true,
    },
      async function (req, accessToken, refreshToken, profile, cb) {
        const is100devs = profile.guilds.some(server => server.id === '735923219315425401')
        let user = await User.findOne({ name: profile.username }).exec()
        try {
          if (!user) {
            console.log('Logging in...')
            user = await User.create({
              name: profile.username,
              email: profile.email,
              is100devs: is100devs
            })
            return cb(null, user)
          } else {
            user.name = profile.username
            user.email = profile.email
            user.is100devs = is100devs
            const updatedUser = await user.save()
            return cb(null, updatedUser)
          }
        } catch (err) {
          console.log(err)
          return cb(err, false)
        }
      }
    )
  )
}
