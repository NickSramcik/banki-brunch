import passport from 'passport'

class AuthController {
  static authDiscord = passport.authenticate("discord")

  static authDiscordCallback = passport.authenticate("discord", {
    failureRedirect: `${process.env.CLIENT_URL}/`,
    successRedirect: `${process.env.CLIENT_URL}/`
  })

  static logout = (req, res, next) => {
    const username = req.user.username
    req.logout(() => {
      if (process.env.NODE_ENV !== 'test') console.log(`${username} has logged out.`)
    })
    req.session.destroy(err => {
      if (err && process.env.NODE_ENV !== "test")
        console.log(`Session could not be destroyed during logout for user: ${username}.`, next(err))
      req.user = null
      return res.json({ message: 'Logout successful.' })
    })
  }

  static getUser = (req, res) => {
    console.log(req.sessionID, req.session, req.user)
    console.log('User:', req.user?.username || null)
    res.send(req.user)
  }
}

export default AuthController;