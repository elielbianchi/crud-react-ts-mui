import { BrowserRouter } from 'react-router-dom';
import { MenuLateral } from './components';
import { AppThemeProvider } from './contexts';
import { AppRoutes } from './routes/index';

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <MenuLateral>
          <AppRoutes />
        </MenuLateral>
      </BrowserRouter>
    </AppThemeProvider>
  );
};
