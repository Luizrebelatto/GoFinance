import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';

import { Modal, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { Button } from '../../components/Form/Button';
import { InputForm } from '../../components/Form/InputForm'; 
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { CategorySelectButton } from '../../components/Form/CategorySelectButton';
import { CategorySelect } from '../CategorySelect';


import { Container, Header, Title, Form, Fields, TransactionTypes } from './styles';

interface FormData {
  name:string;
  amount: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatorio'),
  amount: Yup.number().typeError('Informe um valor numérico').positive('O valor não pode ser negativo').required('Preço é obrigatório')
})

export function Register(){
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const dataKey = "@gofinance:transaction";

  const [category, setCategory] = useState({
    key: 'category',
    name: 'categoria',
  });

  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const { control, handleSubmit, reset, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

  function handleTransactionTypeSelect(type: 'up' | 'down'){
    setTransactionType(type);
  }

  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true);
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false);
  }

  async function handleRegister(form: FormData){
    if(!transactionType)
      return Alert.alert('Selecione o tipo de transação')
    
      if(category.key === 'category')
      return Alert.alert('Selecione o tipo de categoria')

    const newTransaction = {
      id: String(uuid.v4()),
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key,
      date: new Date()
    }
  
    try {
      const data = await AsyncStorage.getItem(dataKey);
      const currentData = data ? JSON.parse(data) : [];

      const dataFormatted = [
        ...currentData,
        newTransaction
      ]

      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));


      reset();
      setTransactionType('');
      setCategory({
        key: 'category',
        name: 'categoria',
      });

      navigation.navigate("Listagem");

    } catch (error) {
      console.log(error);
      Alert.alert("Não foi Possivel Salvar");
    }
  }

  return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>

        <Form>
          <Fields>
            <InputForm
              name="name"
              control={control} 
              placeholder='Nome'
              autoCapitalize='sentences'
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />

            <InputForm
              name="amount"
              control={control} 
              placeholder='Preço'
              keyboardType='numeric'
              error={errors.amount && errors.amount.message}
            />

            <TransactionTypes>
              <TransactionTypeButton 
                title='Income' 
                type='up' 
                onPress={() => handleTransactionTypeSelect('up')}
                isActive={transactionType === 'up'}
              />

              <TransactionTypeButton 
                title='Outcome' 
                type='down' 
                onPress={() => handleTransactionTypeSelect('down')}
                isActive={transactionType === 'down'}
              />
            </TransactionTypes>

            <CategorySelectButton 
              title={category.name}
              onPress={handleOpenSelectCategoryModal}
            />
          </Fields>

          <Button title='Enviar' onPress={handleSubmit(handleRegister)}/>
        </Form>

        <Modal visible={categoryModalOpen}>
          <CategorySelect
            category={category}
            setCategory={setCategory} 
            closeSelectCategory={handleCloseSelectCategoryModal}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  );
}