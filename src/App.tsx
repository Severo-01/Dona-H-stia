import React from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { CategoriesPage } from './pages/CategoriesPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';

const AppContent: React.FC = () => {
  const { currentPath } = useNavigation();

  // Render current view based on path
  const renderCurrentView = () => {
    if (currentPath === '/' || currentPath === '') {
      return <HomePage />;
    }
    if (currentPath === '/produtos') {
      return <ProductsPage />;
    }
    if (currentPath === '/categorias') {
      return <CategoriesPage />;
    }
    if (currentPath.startsWith('/produto/')) {
      const slug = currentPath.replace('/produto/', '');
      return <ProductDetailPage slug={slug} />;
    }
    if (currentPath === '/sobre') {
      return <AboutPage />;
    }
    if (currentPath === '/contato') {
      return <ContactPage />;
    }
    if (currentPath === '/politica-de-privacidade') {
      return <PrivacyPolicyPage />;
    }
    if (currentPath === '/termos') {
      return <TermsPage />;
    }
    return <HomePage />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F0E8] text-[#1C242B]">
      {/* Sticky Top Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1">
        {renderCurrentView()}
      </main>

      {/* Search Overlay Modal */}
      <SearchModal />

      {/* Brand Footer */}
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}
