import styled from 'styled-components';
import Form from 'react-bootstrap/Form';

export const Container = styled.div`
  background: #fff;
  padding: 30px;
  margin: 0 50px;
`;
export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const RangeForm = styled(Form)`
  border-color: #7159c1;
  color: #7159c1;
  &:hover {
    background: rgba(113, 89, 193, 0.8);
    border-color: #7159c1;
  }
`;
export const TechGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
