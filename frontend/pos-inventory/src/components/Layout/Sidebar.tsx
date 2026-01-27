// Sidebar.tsx - UPDATED WITH BETTER DESIGN
import React from 'react';
import { PageType } from '../../types/navigation';

interface SidebarProps {
  activePage: PageType;
  setActivePage: (page: PageType) => void;
  onMobileItemClick?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage, setActivePage, onMobileItemClick }) => {
  const menuItems = [
    { id: 'dashboard' as PageType, label: 'Dashboard', icon: '📊' },
    { id: 'pos' as PageType, label: 'Point of Sale', icon: '💳' },
    { id: 'inventory' as PageType, label: 'Inventory', icon: '📦' },
    { id: 'SalesHistory' as PageType, label: 'Sales History', icon: '🛒' },
    { id: 'Ledger' as PageType, label: 'Ledger', icon: '💰' },
    { id: 'services' as PageType, label: 'Services', icon: '🛠️' },
    { id: 'admin' as PageType, label: 'Admin', icon: '🔒' },
    { id: 'account' as PageType, label: 'Account', icon: '👤' },
    { id: 'settings' as PageType, label: 'Settings', icon: '⚙️' },
  ];

  const handleItemClick = (page: PageType) => {
    setActivePage(page);
    if (onMobileItemClick) {
      onMobileItemClick();
    }
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-full flex flex-col shadow-lg">
      {/* Close Button - Mobile Only */}
      <div className="lg:hidden p-4 border-b border-gray-100 flex justify-end bg-white">
        <button
          onClick={onMobileItemClick}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Close menu"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Store Status */}
      <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="flex items-center">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
          <span className="text-xs text-green-600 font-medium">Online • v1.0.0</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 px-3">
        <div className="mb-4 px-3">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Navigation</h3>
        </div>
        
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleItemClick(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all text-left group ${
                  activePage === item.id
                    ? 'bg-green-50 border border-green-200 text-green-700 shadow-sm'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900 border border-transparent'
                }`}
              >
                <span className={`text-xl flex-shrink-0 transition-transform group-hover:scale-110 ${
                  activePage === item.id ? 'text-green-600' : 'text-gray-500 group-hover:text-green-500'
                }`}>
                  {item.icon}
                </span>
                <span className="font-medium">{item.label}</span>
                {activePage === item.id && (
                  <div className="ml-auto w-2 h-2 bg-green-500 rounded-full"></div>
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div className="my-6 px-3">
          <div className="border-t border-gray-100"></div>
        </div>

      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-100 bg-white">
        <div className="flex items-center justify-between">
          <div className="text-left">
            <p className="text-sm font-medium text-gray-700">Stop to Shop</p>
            <p className="text-xs text-gray-500">© 2026 • v1.0.0</p>
          </div>
          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-transparent">
            <span className="font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">ST</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;