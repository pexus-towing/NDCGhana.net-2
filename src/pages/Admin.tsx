import { useState } from 'react';
import { AdminSidebar } from '../components/Admin/AdminSidebar';
import { AdminHeader } from '../components/Admin/AdminHeader';
import { AdminOverview } from '../components/Admin/AdminOverview';
import { AdminAnalytics } from '../components/Admin/AdminAnalytics';
import { AdminMPs } from '../components/Admin/AdminMPs';
import { AdminProjects } from '../components/Admin/AdminProjects';
import { AdminTransparency } from '../components/Admin/AdminTransparency';
import { AdminCommunity } from '../components/Admin/AdminCommunity';
import { AdminDiaspora } from '../components/Admin/AdminDiaspora';
import { AdminVerification } from '../components/Admin/AdminVerification';
import { AdminContent } from '../components/Admin/AdminContent';
import { AdminSettings } from '../components/Admin/AdminSettings';

export default function Admin() {
  const [activeTab, setActiveTab] = useState('Dashboard Overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'Dashboard Overview': return <AdminOverview />;
      case 'Analytics Center': return <AdminAnalytics />;
      case 'MPs': return <AdminMPs />;
      case 'Project Tracker': return <AdminProjects />;
      case 'Transparency Score': return <AdminTransparency />;
      case 'Community Statistics': return <AdminCommunity />;
      case 'Diaspora Hub': return <AdminDiaspora />;
      case 'Verification Center': return <AdminVerification />;
      case 'News & Updates': return <AdminContent />;
      case 'Settings': return <AdminSettings />;
      default: return <div className="p-8 text-center text-gray-500">Module under construction</div>;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#F8F9FA] text-[#1e293b] font-sans">
      <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col h-full overflow-hidden">
         <AdminHeader />
         <main className="flex-1 overflow-y-auto p-4 md:p-8">
            <div className="max-w-7xl mx-auto w-full">
              {renderContent()}
            </div>
         </main>
      </div>
    </div>
  );
}
