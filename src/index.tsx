import ReactDOM from 'react-dom/client';
import App from './app/App';
import './app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/themeProvider';

import 'shared/i18n/i18n';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorPage } from 'widgets/ErrorPage/ui/ErrorPage';
import { Suspense } from 'react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense>
    <ErrorBoundary fallback={<ErrorPage />}>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </ErrorBoundary>
  </Suspense>
);
