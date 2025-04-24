import { AppProvider } from './AppProvider';
import env from './shared/config/env';
import { initMocks } from './test';
import '@/UI/Layout/global.css';
import { AppRoutes } from '@/routes';
import { initializeFaro } from '@grafana/faro-react';
import '@radix-ui/themes/styles.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

initializeFaro({
  // required: the URL of the Grafana collector
  url: 'my/collector/url',

  // required: the identification label of your application
  app: {
    name: 'my-react-app',
  },
});

initMocks().then(() => {
  // eslint-disable-next-line unicorn/prefer-query-selector,@typescript-eslint/no-non-null-assertion
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </StrictMode>,
  );
});
