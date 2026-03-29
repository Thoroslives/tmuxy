import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './machines/AppContext';
import { applyTheme, loadThemeFromStorage } from './utils/themeManager';
import './fonts/nerd-font.css';
import './standalone.css';
import './components/widgets/init';

// Apply default theme before first render to avoid FOUC
const saved = loadThemeFromStorage(); applyTheme(saved?.theme ?? 'default', saved?.mode ?? 'dark');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppProvider>
    <App />
  </AppProvider>,
);
