import React from 'react';

import { 
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
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
        </UserWrapper>
      </Header>
    </Container>
  )
}