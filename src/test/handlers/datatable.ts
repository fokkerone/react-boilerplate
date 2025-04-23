import { config } from '../config';
import { dataMockList } from '@/features/data-grid/store/tabelle.mocks.spec';
import { http, HttpResponse } from 'msw';

export const datatableHandlers = [
  http.get<any, any>(`${config.API_URL}/tabelledata`, () => {
    try {
      return HttpResponse.json(dataMockList);
    } catch (error: any) {
      return HttpResponse.json(
        { message: error?.message || 'Server Error' },
        { status: 400 },
      );
    }
  }),
];
