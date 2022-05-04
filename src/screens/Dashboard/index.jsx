import React from 'react';


import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard } from '../../components/TransactionCard';

import { 
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title
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

      <HighlightCards>
        <HighlightCard type={'up'} title='Entradas' amount='R$ 17.400,00' lastTransaction='Última entrada 13 de abril'/>
        <HighlightCard type={'down'} title='Entradas' amount='R$ 17.400,00' lastTransaction='Última entrada 13 de abril'/>
        <HighlightCard type={'total'} title='Entradas' amount='R$ 17.400,00' lastTransaction='Última entrada 13 de abril'/>
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>
        <TransactionCard />
      </Transactions>
    </Container>
    
  )
}