import { Command } from './Command.js'

export class AdminCommand extends Command {
  middleware (context, next) {
    if (!context.text) return next()
    if (!context.user.isAdmin) return next()

    const [command, ...args] = context.text.split(' ')
    context.command = command
    context.args = args

    if (!this.trigger.test(command)) return next()
    this.handler(context, next)
  }
}
