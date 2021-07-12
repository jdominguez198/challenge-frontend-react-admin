import globalConfig from '../config';

const APP_STATE_KEY = globalConfig.appStateKey;
const APP_STATE_HASH = globalConfig.versionHash;

export const loadState = () => {
  try {
    const stateSerialized = localStorage.getItem(`${APP_STATE_KEY}_${APP_STATE_HASH}`);
    if (!stateSerialized) {
      return undefined;
    }

    return JSON.parse(stateSerialized);
  } catch (error) {
    console.error('Load State error: ', error);
    return undefined;
  }
};

export const saveState = (state: any) => {
  try {
    const stateSerialized = JSON.stringify(state);
    localStorage.setItem(`${APP_STATE_KEY}_${APP_STATE_HASH}`, stateSerialized);
  } catch (error) {
    console.error('Save State error: ', error);
  }
};
