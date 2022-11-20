import { Config } from 'react-native-config';

export const baseURL = Config.DEVELOPMENT_BASE_URL;
export const socketURL = baseURL;
export const socketChatURL = baseURL + '/chat';
export const apiURL = baseURL + '/api/v1';

export const EnvLinkedIn = {
  LI_CLIENT_ID: Config.LI_CLIENT_ID,
  LI_REDIRECT_URI: Config.LI_REDIRECT_URI,
  LI_CLIENT_SECRET: Config.LI_CLIENT_SECRET,
};

export const EnvFacebook = {
  FB_APP_ID: Config.FB_APP_ID,
  FB_APP_SERCET: Config.FB_APP_SERCET,
};

export const EnvTwitter = {
  TWITTER_KEY: Config.TWITTER_KEY,
  TWITTER_SECRET: Config.TWITTER_SECRET,
};

export const headers = {
  'Content-Type': 'application/json',
};

export const timeout = 10000;
