import { Keyboard } from 'vk-io'

export const testKeyboard = Keyboard.builder()
  .inline()
  .callbackButton({
    label: 'Тестовая кнопка',
    payload: {
      command: 'test_callback'
    },
    color: Keyboard.SECONDARY_COLOR
  })
