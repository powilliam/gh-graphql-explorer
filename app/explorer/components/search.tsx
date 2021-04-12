import styled from 'styled-components/native';

export const Search = styled.TextInput.attrs({
  placeholderTextColor: '#8E8E93',
})`
  font-size: 17px;
  font-family: Mulish-Regular;
  letter-spacing: 0.5px;
  padding: 12px 16px;
  margin-bottom: 8px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.onBackground};
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.surface};
`;
