import Header from "../components/common/Header";
import ConnectedAccounts from "../components/settings/ConnectedAccounts";
import DangerZone from "../components/settings/DangerZone";
import Notifications from "../components/settings/Notifications";
import Profile from "../components/settings/Profile";
import Security from "../components/settings/Security";

const SettingsPage = () => {
  return (
    <>
      <Header title="Settings" />
      <main className="container py-6">
        <Profile />
        <Notifications />
        <Security />
        <ConnectedAccounts />
        <DangerZone />
      </main>
    </>
  );
};
export default SettingsPage;
