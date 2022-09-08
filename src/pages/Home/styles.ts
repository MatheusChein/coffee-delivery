import styled from 'styled-components';

export const BannerContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 544px;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    z-index: -1;
    background-image: url('src/assets/banner-background.svg');
    width: 100%;
    height: 544px;
  }

  aside {
    max-width: 50%;

    h1 {
      font-size: 3rem;
      font-weight: 800;
      font-family: 'Baloo 2', sans-serif;
      color: ${props => props.theme.baseTitle};
      line-height: 1.3;
      margin-bottom: 1rem;
    }

    > span {
      color: ${props => props.theme.baseSubtitle};
      font-size: 1.25rem;
      line-height: 26px;
      display: inline-block;
      margin-bottom: 4.125rem;
    }
  }
`;

export const BannerItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
`;

enum iconColors {
  yellow700,
  baseText,
  purple500,
  yellow500,
}

interface BannerItemProps {
  iconColor: keyof typeof iconColors;
}

export const BannerItem = styled.div<BannerItemProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  max-width: 225px;

  div {
    background: ${props => props.theme[props.iconColor]};
    border-radius: 50%;
    padding: 8px;
    display: flex;
    align-items: center;

    svg {
      color: ${props => props.theme.background};
    }
  }
  span {
    line-height: 1.3;
  }
`;

export const ProductsContainer = styled.section`
  padding: 2rem 0;

  h2 {
    font-weight: 800;
    font-size: 2rem;
    line-height: 41.6px;
    font-family: 'Baloo 2', sans-serif;
    color: ${props => props.theme.baseSubtitle};
    margin-bottom: 3.375rem;
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
  }
`;
