import { BrowserRouter } from "react-router-dom";
import { AppThemeProvider } from "./contexts";
import { AppRoutes } from "./routes/index";

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppThemeProvider>
  );
};
