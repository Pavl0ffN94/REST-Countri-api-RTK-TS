import styled from 'styled-components';
import { memo, FC } from 'react';
import { Link } from 'react-router-dom';
import { ThemeSwitcher } from '../features/theme/ThemeSwitcher';
import { Container } from './Container';
import { useCleanup } from '../features/controls/use-cleanup';

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled(Link).attrs({
  to: '/',
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

const HeaderImpl: FC = () => {
  const cleanUp = useCleanup();

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title onClick={cleanUp}>Where is the world?</Title>
          <ThemeSwitcher />
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};

export const Header = memo(HeaderImpl);
