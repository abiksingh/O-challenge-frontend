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

export const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1200,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
