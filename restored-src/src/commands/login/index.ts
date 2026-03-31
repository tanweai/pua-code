import type { Command } from '../../commands.js'
import { hasPUAApiKeyAuth } from '../../utils/auth.js'
import { isEnvTruthy } from '../../utils/envUtils.js'

export default () =>
  ({
    type: 'local-jsx',
    name: 'login',
    description: hasPUAApiKeyAuth()
      ? 'Switch PUA accounts'
      : 'Sign in with your PUA account',
    isEnabled: () => !isEnvTruthy(process.env.DISABLE_LOGIN_COMMAND),
    load: () => import('./login.js'),
  }) satisfies Command
