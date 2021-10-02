
export class Trigger {
  constructor (regex = /^$/, command = '') {
    this.regex = regex
    this.command = command
  }

  test (test) {
    return this.regex.test(test) || test === this.command
  }
}
