import { isNil } from 'lodash'

function getEnv(name: string, defaultValue?: string): string {
  const key = `REACT_APP_${name}`
  const env = process.env[key] ?? defaultValue

  if (isNil(env)) {
    throw new Error(`undefined ENV ${name}`)
  }

  return env
}

export const Configurations = {
  uris: {
    SERVICE: getEnv('API_URL'),
  },
  links: {
    PERSONAL: 'https://github.com/LuizSSB',
  },
}
