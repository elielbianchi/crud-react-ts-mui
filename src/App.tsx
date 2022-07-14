import { BrowserRouter } from 'react-router-dom';
import { MenuLateral } from './components';
import { AppThemeProvider, DrawerProvider } from './contexts';
import { AppRoutes } from './routes/index';

export const App = () => {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>
          <MenuLateral>
            <AppRoutes />
          </MenuLateral>
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
};
