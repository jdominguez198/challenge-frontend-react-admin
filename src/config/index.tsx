const globalConfig = {
  versionHash: process.env.REACT_APP_HASH_VERSION || '',
  appStateKey: 'appState',
  googleOAuthClientId: process.env.REACT_APP_GOOGLE_OAUTH_ID || ''
};

export default globalConfig;
