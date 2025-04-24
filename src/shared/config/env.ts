import { version } from '../../../package.json';

const env = {
  VERSION: version,
  FARO_URL: import.meta.env.VITE_FARO_URL,
  FARO_APP_NAME: import.meta.env.VITE_FARO_APP_NAME,
  NODE_ENV: import.meta.env.MODE,
  IS_DEV: import.meta.env.MODE === 'development',
  APP_NAME: 'my_app',
  API_URL: import.meta.env.VITE_API_URL,
};

export default env;
