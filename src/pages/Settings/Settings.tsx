import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IAppState } from '../../store/store';
import { fetchSettingsItems } from '../../store/dummy/actions';
import SettingsItemList from '../../components/SettingsItemList/SettingsItemList';

function Settings() {
  const { settingsItems } = useSelector((state: IAppState) => state.dummy);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!settingsItems || !settingsItems.length || settingsItems.length === 0) {
      dispatch(fetchSettingsItems());
    }
  }, [ dispatch, settingsItems ]);

  return (
    <div className="page page__settings">
      <SettingsItemList items={settingsItems} />
    </div>
  );
}

export default Settings;
