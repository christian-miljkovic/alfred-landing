import runtimeEnv from '@mars/heroku-js-runtime-env'

const env = runtimeEnv()

export const baseConfig = {
  mailChimpUrl:
    env.MAILCHIMP_URL ||
    'https://alfred-penny.us7.list-manage.com/subscribe/post?u=ff35d5fd8b3877a7bcc4fc23a&amp;id=6b82d8aea2',
}
