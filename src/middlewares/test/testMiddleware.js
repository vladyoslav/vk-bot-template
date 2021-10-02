import { Middleware } from '../../core/Middleware.js'
import { testKeyboard } from '../../keyboards/testKeyboard.js'

export const testMiddleware = new Middleware(
  async (context) => {
    await context.bot.send('Тестовый мидлвейр', {
      keyboard: testKeyboard
    })
  }
)
