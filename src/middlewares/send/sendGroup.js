import { Middleware } from '../../core/Middleware.js'

export const sendGroup = new Middleware(
  async (context, next) => {
    context.bot.send = async (message = '', data = {}) => context.bot.sendDefault(
      message,
      { user_id: context.userId, ...data }
    )

    return next()
  }
)
