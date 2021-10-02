import { testAdminCommand } from '../adminCommands/testAdminCommand.js'
import { testCallback } from '../callbacks/testCallback.js'
import { testCommand } from '../commands/testCommand.js'
import { sendAdmin } from '../middlewares/send/sendAdmin.js'
import { sendDefault } from '../middlewares/send/sendDefault.js'
import { sendGroup } from '../middlewares/send/sendGroup.js'
import { sendMessage } from '../middlewares/send/sendMessage.js'
import { testMiddleware } from '../middlewares/test/testMiddleware.js'
import { isAdmin } from '../middlewares/user/isAdmin.js'
import { user } from '../middlewares/user/user.js'

const middlewares = [
  user,
  isAdmin
]

const commands = [
  testCommand
]

const adminCommands = [
  testAdminCommand
]

const callbacks = [
  testCallback
]

export class Bot {
  constructor ({ vk, userVK, db }) {
    this.vk = vk
    this.userVK = userVK
    this.db = db
  }

  async start () {
    this.vk.updates.use(async (context, next) => {
      context.bot = this
      return next()
    })

    // choosing send message method
    this.vk.updates.use(sendDefault.middleware)
    this.vk.updates.on('message', sendMessage.middleware)
    this.vk.updates.on('message_event', sendMessage.middleware)
    this.vk.updates.on('group_member', sendGroup.middleware)
    this.vk.updates.use(sendAdmin.middleware)
    //

    middlewares.forEach((item) => this.vk.updates.on('message_new', item.middleware))

    commands.forEach((item) => this.vk.updates.on('message_new', item.middleware))

    adminCommands.forEach((item) => this.vk.updates.on('message_new', item.middleware))

    callbacks.forEach((item) => this.vk.updates.on('message_event', item.middleware))

    // default answer
    this.vk.updates.on('message_new', testMiddleware.middleware)
    //

    return this.vk.updates.start()
  }
}
