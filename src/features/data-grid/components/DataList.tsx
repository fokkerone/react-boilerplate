import { TabelleApi, TabelleSelectors } from '../store';
import { useAppSelector } from '@/shared/store/types';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';

//import { subtract } from 'ramda';

// React Data Grid Component

ModuleRegistry.registerModules([AllCommunityModule]);

export function DataList() {
  const { isLoading } = TabelleApi.useGetTabelleDataQuery();
  const subscription = useAppSelector(TabelleSelectors.getTabelleListFiltered);

  if (isLoading) {
    return 'loading';
  }
  return (
    <div>
      <div
        style={{ height: 500 }}
        className="block w-full bg-amber-400/20"
      >
        <AgGridReact
          rowData={subscription}
          columnDefs={[
            { field: 'id' },

            { field: 'text' },
            { field: 'likesCount' },
            { field: 'normalizedHash' },
          ]}
        />
      </div>
      <div className="block bg-amber-400/20 font-mono">
        <pre>{JSON.stringify(subscription, undefined, '\t')}</pre>
      </div>
    </div>
  );
}
