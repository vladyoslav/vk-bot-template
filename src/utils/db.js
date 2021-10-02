
import Sequelize from 'sequelize'
import { usersEntity } from '../entities/usersEntity.js'

import { isDev, postgreUri } from '../config.js'

const sequelize = isDev
  ? new Sequelize(
    'test', 'postgres', 'root',
    { dialect: 'postgres', logging: false }
  )
  : new Sequelize(postgreUri, { logging: false })

const users = usersEntity(sequelize)

const load = async () => {
  await sequelize
    .authenticate()
    .then(() => console.log('Connected to database.'))
    .catch((err) => console.error('Connection to database error: ', err))

  await users.sync({ alter: true })
  console.log('Users table successfully created.')
}

load()

export const db = {
  sequelize,
  users
}
