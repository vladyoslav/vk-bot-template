
import { Bot } from './core/Bot.js'
import { userVK, vk } from './utils/vk.js'
import { db } from './utils/db.js'

const bot = new Bot({ vk, userVK, db })

bot.start()
  .then(() => console.log('Bot has been successfully started.'))
  .catch(console.error)
