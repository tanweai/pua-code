import type { Command } from '../../commands.js'
import { hasPuaApiKeyAuth } from '../../utils/auth.js'
import { isEnvTruthy } from '../../utils/envUtils.js'

export default () =>
  ({
    type: 'local-jsx',
    name: 'login',
    description: hasPuaApiKeyAuth()
      ? 'Switch Pua accounts'
      : 'Sign in with your Pua account',
    isEnabled: () => !isEnvTruthy(process.env.DISABLE_LOGIN_COMMAND),
    load: () => import('./login.js'),
  }) satisfies Command
