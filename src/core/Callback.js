
export class Callback {
  constructor ({ trigger, handler }) {
    this.trigger = trigger
    this.handler = handler
    this.middleware = this.middleware.bind(this)
  }

  middleware (context, next) {
    if (context.eventPayload?.command !== this.trigger) return next()
    this.handler(context, next)
  }
}
