import React from 'react';
import AppNavbar from './component/AppNavbar';
import AppContent from './component/contentBody/AppContent';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <div>
        <AppNavbar />
        <AppContent />
      </div>
    </Provider>
  );
}

export default App;
