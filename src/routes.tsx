import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import type { ReactNode } from 'react';

interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
}

const routes: RouteConfig[] = [
  {
    name: 'Home',
    path: '/',
    element: <Home />
  },
  {
    name: 'Privacy Policy',
    path: '/politica-de-privacidade',
    element: <PrivacyPolicy />,
    visible: false
  },
  {
    name: 'Terms of Use',
    path: '/termos-de-uso',
    element: <TermsOfUse />,
    visible: false
  }
];

export default routes;
