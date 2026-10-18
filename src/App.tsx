import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Scorecard from './components/Scorecard';
import TargetMarket from './components/TargetMarket';
import Stats from './components/Stats';
import Pricing from './components/Pricing';
import Comparison from './components/Comparison';
import TechStack from './components/TechStack';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Deploy from './pages/Deploy';
import DashboardLayout from './components/DashboardLayout';
import Inbox from './pages/dashboard/Inbox';
import Knowledge from './pages/dashboard/Knowledge';
import Analytics from './pages/dashboard/Analytics';
import Channels from './pages/dashboard/Channels';
import Settings from './pages/dashboard/Settings';
import { ReactNode } from 'react';

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Scorecard />
      <TargetMarket />
      <Stats />
      <Pricing />
      <Comparison />
      <TechStack />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}

function ProtectedRoute({ children }: { children: ReactNode }) {
  const { isAuthenticated, isDeployed } = useAuth();
  if (!isAuthenticated) return <Navigate to="/signin" replace />;
  if (!isDeployed) return <Navigate to="/deploy" replace />;
  return <>{children}</>;
}

function DeployRoute({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/signup" replace />;
  return <>{children}</>;
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/deploy" element={
            <DeployRoute>
              <Deploy />
            </DeployRoute>
          } />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }>
            <Route index element={<Navigate to="/dashboard/inbox" replace />} />
            <Route path="inbox" element={<Inbox />} />
            <Route path="knowledge" element={<Knowledge />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="channels" element={<Channels />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
