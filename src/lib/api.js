const UrlAPI = {
  Production: 'https://api.openrates.io/latest?base=USD&symbols=BRL',
  Development: 'http://localhost:1300/currencies/1',
  Testing: 'http://localhost:1300/currencies/1',
}

import Mode from '../constants/Mode'
import envMode from './env-mode'

export default function api() {
  switch (envMode()) {
    case Mode.Development:
      return UrlAPI.Development
      break
    case Mode.Production:
      return UrlAPI.Production
    case Mode.Testing:
      return UrlAPI.Testing
      break
    default:
      return UrlAPI.Development
      break
  }
}
