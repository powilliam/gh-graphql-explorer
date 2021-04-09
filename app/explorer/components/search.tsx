import styled from 'styled-components/native';

export const Search = styled.TextInput.attrs({
  placeholderTextColor: '#8E8E93',
})`
  width: 100%;
  font-size: 17px;
  font-family: Mulish-Regular;
  text-align: center;
  letter-spacing: 0.5px;
  padding: 16px;
  color: ${({ theme }) => theme.colors.onBackground};
`;
