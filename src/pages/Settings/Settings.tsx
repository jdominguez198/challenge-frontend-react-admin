import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSettingsItems } from '../../store/dummy/actions';

function Settings() {
  const { settingsItems } = useSelector((state: any) => state.dummy);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!settingsItems || !settingsItems.length || settingsItems.length === 0) {
      dispatch(fetchSettingsItems());
    }
  }, [ dispatch, settingsItems ]);

  return (
    <div className="page page__settings">
      <p>This is the Settings page</p>
    </div>
  );
}

export default Settings;
