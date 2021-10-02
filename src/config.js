import dotenv from 'dotenv'

dotenv.config()

const token = process.env.TOKEN
const userToken = process.env.USERTOKEN
const groupId = process.env.GROUPID
const admins = process.env.ADMINS.split(' ').map(admin => +admin)
const postgreUri = process.env.POSTGREURI
const isDev = process.env.NODE_ENV === 'development'

export {
  token,
  groupId,
  admins,
  userToken,
  postgreUri,
  isDev
}
