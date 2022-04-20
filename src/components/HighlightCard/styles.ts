import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

interface TypeProps {
  type: 'up' | 'down' | 'total';
}

export const Container = styled.View<TypeProps>`
  background-color: ${({ theme }) => theme.colors.shape};
  width: ${RFValue(300)}px;
  border-radius: 5px;
  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
`;

export const Header = styled.View``;

export const Title = styled.Text<TypeProps>``;

export const Icon = styled(Feather)<TypeProps>``;

export const Footer = styled.View``;

export const Amount = styled.Text<TypeProps>``;

export const LastTransaction = styled.Text<TypeProps>``;