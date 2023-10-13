import {memo, FC} from 'react';
import { useNavigate } from 'react-router-dom';
import { CountryInfo } from 'types';

import { List } from 'components/List';
import { Card } from 'components/Card';
import { useCountries } from './use-countries';

const CountryListImpl: FC = () => {
  const navigate = useNavigate();

  const [countries, { error, status }] = useCountries();

  return (
    <>
      {error && <h2>Can't fetch data</h2>}
      {status === 'loading' && <h2>Loading...</h2>}

      {status === 'received' && (
        <List>
          {countries.map((c) => {
            const countryInfo: CountryInfo = {
              img: c.flags.png,
              name: c.name,
              info: [
                {
                  title: 'Population',
                  descrition: c.population.toLocaleString(),
                },
                {
                  title: 'Region',
                  descrition: c.region,
                },
                {
                  title: 'Capital',
                  descrition: c.capital,
                },
              ],
            };

            return (
              <Card
                key={c.name}
                onClick={() => void navigate(`/country/${c.name}`)}
                {...countryInfo}
              />
            );
          })}
        </List>
      )}
    </>
  );
};

export const  CountryList = memo(CountryListImpl)