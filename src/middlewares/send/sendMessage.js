import { Middleware } from '../../core/Middleware.js'

export const sendMessage = new Middleware(
  async (context, next) => {
    context.bot.send = async (message = '', data = {}) => {
      const { peerId } = context
      return context.bot.sendDefault(
        message,
        { user_id: peerId, ...data }
      )
    }

    return next()
  }
)
