import { Callback } from '../core/Callback.js'

export const testCallback = new Callback({
  trigger: 'test_callback',
  handler: async (context, next) => {
    await context.bot.send('Тестовый колбек')
  }
})
