import styled from 'styled-components';
import { device } from './MediaQuery';

export const CardButtonWrapper = styled.div`
  display: flex;
  align-items: space-around;
  justify-content: space-between;
  margin-top: 2rem;
  margin-bottom: 2rem;
  @media ${device.xs} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media ${device.sm} {
    flex-direction: row;
    align-items: space-around;
    justify-content: space-between;
  }

  @media ${device.lg} {
    flex-direction: row;
    align-items: space-around;
    justify-content: space-between;
  }
`;
