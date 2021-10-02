import dotenv from 'dotenv'

dotenv.config()

const token = process.env.TOKEN
const userToken = process.env.USER_TOKEN
const groupId = process.env.GROUP_ID
const admins = process.env.ADMINS.split(' ').map(admin => +admin)
const postgreUri = process.env.POSTGRE_URI
const isDev = process.env.NODE_ENV === 'development'

export {
  token,
  groupId,
  admins,
  userToken,
  postgreUri,
  isDev
}
