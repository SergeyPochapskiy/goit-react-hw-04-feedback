import styled from 'styled-components';

export const Button = styled.button`
  box-shadow: inset 0px 1px 0px 0px #d9fbbe;
  border-radius: 6px;
  border: 1px solid #212121;
  display: inline-block;
  cursor: pointer;
  color: #212121;
  background: rgba(245, 206, 39, 0.8);
  font-family: Georgia;
  font-size: 16px;
  font-weight: bold;
  padding: 15px 15px;
  text-decoration: none;
  margin-right: 15px;
  &:hover {
    color: #808080;
    background: rgba(124, 111, 51, 0.3);
  }
`;