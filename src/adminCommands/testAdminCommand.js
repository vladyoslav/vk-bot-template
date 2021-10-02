import { AdminCommand } from '../core/AdminCommand.js'
import { Trigger } from '../core/Trigger.js'
import { testKeyboard } from '../keyboards/testKeyboard.js'

export const testAdminCommand = new AdminCommand({
  trigger: new Trigger(/^!админ$/, 'test_admin'),
  handler: async (context, next) => {
    await context.bot.send('Тестовая админ команда', {
      keyboard: testKeyboard
    })
  }
})
