import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatDashboard from "../pages/ChatDashboard";
import ProfileCard from "../components/profile/ProfileCard";
import SidebarCall from "../components/calllog/SidebarCall";
import Group from "../components/group/Group";
import UpdatesPage from "../components/updates/UpdatesPage";
import ArchivePage from "../components/updates/ArchivePage";
import UnreadPage from "../components/updates/UnreadPage";
import Settings from "../components/settings/Settings";
import Notification from "../components/settings/NotificationSettings";
import Privacy from "../components/settings/Privacy";
import Security from "../components/settings/Security";
import Help from "../components/settings/Help";
import RequestAccountInfo from "../components/settings/RequestAccountInfo";
import ChatWallpaper from "../components/settings/ChatWallpaper";
import PrivacyLastSeen from "../components/settings/PrivacyLastSeen";
import ProfilePhoto from "../components/settings/ProfilePhoto";
import ProfileAbout from "../components/settings/ProfileAbout";
import GroupSetting from "../components/settings/GroupSetting";
import BlockedContacts from "../components/settings/BlockedContacts";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProfileCard />} />
        <Route path="/chat" element={<ChatDashboard />} />
        <Route path="/profile" element={<ProfileCard />} />
        <Route path="/calllog" element={<SidebarCall />} />
        <Route path="/group" element={<Group />} />
        <Route path="/updates" element={<UpdatesPage />} />
        <Route path="/unread" element={<UnreadPage />} />
        <Route path="/archive" element={<ArchivePage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/security" element={<Security />} />
        <Route path="/help" element={<Help />} />
        <Route path="/requestinfo" element={<RequestAccountInfo />} />
        <Route path="/wallpaper" element={<ChatWallpaper />} />
        <Route path="/privacy/last-seen" element={<PrivacyLastSeen />} />
        <Route path="/privacy/profile-photo" element={<ProfilePhoto />} />
        <Route path="/privacy/profile-about" element={<ProfileAbout />} />
        <Route path="/privacy/groups" element={<GroupSetting />} />
        <Route path="/privacy/blocked-contacts" element={<BlockedContacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
