import { Meteor } from 'meteor/meteor'
import { HTTP } from 'meteor/http'

class MailChimpAPI {
  constructor() {
    const { apiKey } = Meteor.settings.private.MailChimp
    this.apiKey = apiKey
    this.methods = {
      lists: {
        subscribe() {

        },
      },
    }
  }
}

export const MailChimp = new MailChimpAPI()
