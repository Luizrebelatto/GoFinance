import React from 'react';

import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

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

export interface DataListProps extends TransactionCardProps {
  id: String;
}

export function DashBoard(){
  const data : DataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title: 'Desenvolvimento de sites',
      amount: 'R$ 12.000,00',
      category: {
        name:'Vendas',
        icon: 'dollar-sign'
      },
      date: '13/05/2022'
    },
    {
      id: '2',
      type: 'negative',
      title: 'Hamburgueria Pizzy',
      amount: 'R$ 59,00',
      category: {
        name:'Alimentação',
        icon: 'coffee'
      },
      date: '13/05/2022'
    },
    {
      id: '3',
      type: 'negative',
      title: 'Aluguel do apartamento',
      amount: 'R$ 12.000,00',
      category: {
        name:'Casa',
        icon: 'shopping-bag'
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
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item}/> }
        />
      </Transactions>
    </Container>
    
  )
}