import { TabelleApi } from '@/features/data-grid/store/tabelle.api';
import { TabelleData } from '@/features/data-grid/store/tabelle.type';
import { SettingsSelectors } from '@/features/settings/store';
import { SettingsKey } from '@/features/settings/store/settings.type';
import { SubscriptionFilters } from '@/features/subscriptions/components/subscription.types';
import { createSelector } from '@reduxjs/toolkit';
import { curry, filter } from 'ramda';

const matchSubscriptionFilters = (
  Tabelle: TabelleData,
  f: SubscriptionFilters,
) => {
  const dic = {
    [SubscriptionFilters.Subscription]: SubscriptionType.Subscription,
    [SubscriptionFilters.OneTimePurchase]: SubscriptionType.OneTimePurchase,
  };
  return dic[f] === subscription.type;
};

export const getTabelleListFiltered = createSelector(
  TabelleApi.endpoints.getTabelleData.select(),
  (state) => SettingsSelectors.getSettingByKey(state)(SettingsKey.filters),
  (s: { data: TabelleData[] }, f): TabelleData[] => {
    if (!s.data) {
      return [];
    }
    if (f.filterSubscriptionsBy === SubscriptionFilters.All) {
      return s.data;
    }

    const filterBySettings = curry(
      filter((i: TabelleData) =>
        matchSubscriptionFilters(i, f.filterSubscriptionsBy),
      ),
    );

    return filterBySettings(s.data);
  },
);
