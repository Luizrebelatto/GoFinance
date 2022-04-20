import React from 'react';


import { HighlightCard } from '../../components/HighlightCard';

import { 
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon
} from './styles';

export function DashBoard(){
  return(
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/62765965?v=4' }}/>
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Luiz</UserName>
            </User>
          </UserInfo>
          <Icon name="power"/>
        </UserWrapper>
      </Header>
      <HighlightCard type={'up'} title='Entradas' amount='R$ 17.400,00' lastTransaction='Última entrada 13 de abril'/>
      <HighlightCard type={'down'}title='Saídas' amount='R$ 1.259,00' lastTransaction='Última saída 03 de abril'/>
      <HighlightCard type={'total'} title='Total' amount='R$ 16.141,00' lastTransaction='01 a 16 de abril'/>
    </Container>
  )
}