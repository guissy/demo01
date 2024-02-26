import React, { useEffect } from 'react';
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes
} from 'react-router-dom';
import Theme from './theme/Theme.tsx';
import { useLocation } from 'react-use';
import CurrentUserProvider from './CurrentUserProvider.tsx';
import SysOptionProvider from './SysOptionProvider.tsx';
import HomePage from './home/HomePage.tsx';

const App: React.FC = () => {
  const base = `/web`;
  const pathname = useLocation().pathname;
  const router = React.useMemo(
    () =>
      createBrowserRouter(
        createRoutesFromElements(
          <Route>
            {/*<Route path="/login" key={base} element={<LoginRoute/>}/>*/}
            <Route path="/*" element={<HomePage/>}/>
          </Route>,
        ),
        { basename: base },
      ),
    [base],
  );
  useEffect(() => {
    if (!pathname?.startsWith(`/${base}`)) {
      const rest = pathname?.split('/').slice(4).join('/');
      router.navigate(`/${rest ?? 'login'}`);
    }
  }, [pathname, router]);
  return (
    <SysOptionProvider>
      <Theme>
        <CurrentUserProvider>
          <div style={{
            // background: 'linear-gradient(45deg, rgb(43, 110, 177) 0%, rgb(10, 38, 67) 100%) center bottom / cover no-repeat rgb(239, 245, 233)',
            // height: '100vh'
          }}
          >
            {window.Cypress ? (
              <BrowserRouter basename={base}>
                <Routes>
                  {/*<Route path="/login" element={<LoginRoute/>}/>*/}
                  <Route path="/*" element={<HomePage/>}/>
                </Routes>
              </BrowserRouter>
            ) : (
              <RouterProvider router={router}/>
            )}
          </div>
        </CurrentUserProvider>
      </Theme>
    </SysOptionProvider>
  );
};

export default App;
