import { getRandomId } from 'vk-io'
import { Middleware } from '../../core/Middleware.js'

export const sendDefault = new Middleware(
  async (context, next) => {
    context.bot.sendDefault = async (message = '', data = {}) => {
      return context.bot.vk.api.messages.send({
        message,
        title: 'Бот',
        random_id: getRandomId(),
        ...data
      })
    }
    return next()
  }
)
