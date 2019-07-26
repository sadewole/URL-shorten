import React from 'react';
import AppNavbar from './component/AppNavbar';
import AppContent from './component/contentBody/AppContent';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <AppNavbar />
      <AppContent />
    </div>
  );
}

export default App;
