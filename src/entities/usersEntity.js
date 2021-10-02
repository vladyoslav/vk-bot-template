import Sequelize from 'sequelize'

export const usersEntity = (sequelize) => sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false
  }
}, {
  timestamps: false
})
