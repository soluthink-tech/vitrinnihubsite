import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import routes from './routes';
import { MAINTENANCE_MODE } from '@/config/siteConfig';
import ComingSoon from '@/pages/ComingSoon';

// Uncomment these imports when using miaoda-auth-react for authentication
// import { AuthProvider, RequireAuth } from 'miaoda-auth-react';
// import { supabase } from 'supabase-js';
// import Header from '@/components/common/Header';

/**
 * ============================================
 * CONTROLE DE MODO DE MANUTENÇÃO
 * ============================================
 * 
 * O site verifica a variável MAINTENANCE_MODE em: src/config/siteConfig.ts
 * 
 * - Se MAINTENANCE_MODE = true  → Exibe página "Em Breve"
 * - Se MAINTENANCE_MODE = false → Exibe site completo normalmente
 * 
 * Para ativar o site após o lançamento:
 * 1. Abra o arquivo: src/config/siteConfig.ts
 * 2. Altere MAINTENANCE_MODE de true para false
 * 3. Salve o arquivo
 * 
 * ============================================
 */

const App: React.FC = () => {
  // Verifica se o site está em modo de manutenção
  if (MAINTENANCE_MODE) {
    return <ComingSoon />;
  }

{/*
    // USING MIAODA-AUTH-REACT (Uncomment when auth is required):
    // =========================================================
    // Replace the current App structure with this when using miaoda-auth-react:

    // 1. Wrap everything with AuthProvider (must be inside Router)
    // 2. Use RequireAuth to protect routes that need authentication
    // 3. Set whiteList prop for public routes that don't require auth

    // Example structure:
    // <Router>
    //   <AuthProvider client={supabase}>
    //     <ScrollToTop />
    //     <Toaster />
    //     <RequireAuth whiteList={["/login", "/403", "/404", "/public/*"]}>
    //       <Header />
    //       <Routes>
    //         ... your routes here ...
    //       </Routes>
    //     </RequireAuth>
    //   </AuthProvider>
    // </Router>

    // IMPORTANT:
    // - AuthProvider must be INSIDE Router (it uses useNavigate)
    // - RequireAuth should wrap Routes, not be inside it
    // - Add all public paths to the whiteList array
    // - Remove the custom PrivateRoute component when using RequireAuth
*/}
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.element}
            />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
