import app from "./app"
import connectToDb from "./config/db"

const PORT = process.env.PORT || 3000
connectToDb().then(() =>
  app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
  })
)
