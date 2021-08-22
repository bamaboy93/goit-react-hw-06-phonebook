import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const addContactPhone = createAction('phonebook/addContactPhone', (name, number) => ({
    payload: {
      id: shortid.generate(),
      name,
      number,
    },
  }));
  
  const deleteContact = createAction('phonebook/deleteContact');
  
  const changeFilter = createAction('phonebook/changeFilter');
  
  const actions = { addContactPhone, deleteContact, changeFilter };
  
  export default actions;