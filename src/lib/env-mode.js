import Mode from '../constants/Mode'

export default function() {
  const node_env = process.env.NODE_ENV.split(' ')
  const env = node_env[node_env.length - 1].toLowerCase()

  switch (env) {
    case 'production':
      return Mode.Production
      break
    case 'development':
      return Mode.Development
    case 'testing':
      return Mode.Testing
    default:
      break
  }
}
