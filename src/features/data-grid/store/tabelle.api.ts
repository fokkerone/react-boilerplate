import { TabelleData } from '@/features/data-grid/store/tabelle.type';
import baseApi from '@/shared/store/api';

export const TabelleApi = baseApi
  .enhanceEndpoints({ addTagTypes: ['TabelleData'] })
  .injectEndpoints({
    endpoints: (build) => ({
      getTabelleData: build.query<TabelleData[], void>({
        query: () => 'tabelledata',
      }),
    }),
    overrideExisting: false,
  });

export const { useGetTabelleDataQuery } = TabelleApi;
