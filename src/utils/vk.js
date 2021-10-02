import { VK } from 'vk-io'
import { token, userToken } from '../config.js'

const vk = new VK({ token: token })

const userVK = new VK({ token: userToken })

export { vk, userVK }
