import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routeConfig } from 'shared/routes/routeConfig';
import { PageLoader } from 'widgets/PageLoader/PageLoader';

export function AppRouter() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map((route) => (
          <Route
            path={route.path}
            element={<div className="page-wrapper">{route.element}</div>}
            key={route.path}
          />
        ))}
      </Routes>
    </Suspense>
  );
}
