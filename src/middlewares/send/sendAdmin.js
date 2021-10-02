import { admins } from '../../config.js'
import { Middleware } from '../../core/Middleware.js'

export const sendAdmin = new Middleware(
  async (context, next) => {
    context.bot.sendAdmin = async (message = '', data = {}) => {
      return context.bot.sendDefault(
        message,
        { peer_ids: admins, ...data }
      )
    }

    return next()
  }
)
