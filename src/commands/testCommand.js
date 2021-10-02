import { Command } from '../core/Command.js'
import { Trigger } from '../core/Trigger.js'
import { testKeyboard } from '../keyboards/testKeyboard.js'

export const testCommand = new Command({
  trigger: new Trigger(/^!тест$/, 'test'),
  handler: async (context, next) => {
    await context.bot.send('Тестовая команда', {
      keyboard: testKeyboard
    })
  }
})
