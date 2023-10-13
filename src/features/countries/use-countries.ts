import { useSelector} from 'react-redux';
import {useEffect} from 'react';

import { selectControls } from '../controls/controls-slice';
import { selectCountriesInfo, selectVisibleCountries } from './countries-selecrors';
import {RootState, useAppDispatch} from 'store';
import {loadCountries} from './countries-slice';
import {Country} from 'types';

export const useCountries = (): [
  Country[], 
  ReturnType<typeof selectCountriesInfo>
] => {
  const dispatch = useAppDispatch();
  const controls = useSelector(selectControls);
  const countries = useSelector((state: RootState) => selectVisibleCountries(state, controls));
  const {status, error, qty} = useSelector(selectCountriesInfo);

  useEffect(() => {
    if (!qty) {
      dispatch(loadCountries());
    }
  }, [qty, dispatch]);

  return [countries, {status, error, qty}];
}
