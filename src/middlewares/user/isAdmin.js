import { admins } from '../../config.js'
import { Middleware } from '../../core/Middleware.js'

export const isAdmin = new Middleware(
  async (context, next) => {
    const { user } = context
    user.isAdmin = admins.includes(user.id)
    return next()
  }
)
