import { Middleware } from '../../core/Middleware.js'

export const user = new Middleware(
  async (context, next) => {
    const { peerId } = context
    let user = await context.bot.db.users.findOne({ where: { id: peerId } })
    if (!user) {
      user = await context.bot.db.users.create({ id: peerId })
      await context.bot.send('Привет')
    }

    // set user
    context.user = user
    //

    return next()
  }
)
