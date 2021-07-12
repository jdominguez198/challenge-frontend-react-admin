const globalConfig = {
  versionHash: process.env.REACT_APP_HASH_VERSION || '',
  appTitle: 'Admin',
  appStateKey: 'appState',
  googleOAuthClientId: process.env.REACT_APP_GOOGLE_OAUTH_ID || '',
  dummyApi: {
    baseUrl: 'https://rickandmortyapi.com/api',
    endpoints: {
      dashboard: 'character',
      settings: 'location'
    }
  }
};

export default globalConfig;
