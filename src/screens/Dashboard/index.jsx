import React from 'react';
import { getBottomSpace } from 'react-native-iphone-x-helper';


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
  Title,
  TransactionList
} from './styles';

export function DashBoard(){

  const data = [
    {
      title: 'Desenvolvimento de sites',
      amount: 'R$ 12.000,00',
      category: {
        name:'Vendas',
        icon: 'dollar-sign'
      },
      date: '13/05/2022'
    },
    {
      title: 'Desenvolvimento de sites',
      amount: 'R$ 12.000,00',
      category: {
        name:'Vendas',
        icon: 'dollar-sign'
      },
      date: '13/05/2022'
    },
    {
      title: 'Desenvolvimento de sites',
      amount: 'R$ 12.000,00',
      category: {
        name:'Vendas',
        icon: 'dollar-sign'
      },
      date: '13/05/2022'
    }
  ] 

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

        <TransactionList 
          data={data}
          renderItem={({ item }) => <TransactionCard data={item}/> }
        />
      </Transactions>
    </Container>
    
  )
}