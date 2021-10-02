
export class Command {
  constructor ({ trigger, handler }) {
    this.trigger = trigger
    this.handler = handler
    this.middleware = this.middleware.bind(this)
  }

  middleware (context, next) {
    if (!this.trigger.test(context.messagePayload?.command || context.text)) return next()
    this.handler(context, next)
  }
}
