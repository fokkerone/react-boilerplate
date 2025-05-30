import { config } from '../config';
import { http, HttpResponse } from 'msw';

export const usersHandlers = [
  http.get<any, any>(`${config.API_URL}/users`, () => {
    try {
      return HttpResponse.json({
        id: '08154711',
        name: 'Maxim',
        surname: 'Chartier',
      });
    } catch (error: any) {
      return HttpResponse.json(
        { message: error?.message || 'Server Error' },
        { status: 400 },
      );
    }
  }),
];
