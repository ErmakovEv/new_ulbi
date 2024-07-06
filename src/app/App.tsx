import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNamesHelper/classNames';
import { UseTheme } from './providers/themeProvider';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

function App() {
  const { theme } = UseTheme();

  return (
    <div className={classNames('app', [theme])}>
      <Suspense>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
