'use client';

import React, { createContext, useState, useContext } from 'react';
import Storage from '@/services/supabase';

export const LixeirasContext = createContext({});

export function LixeirasProvider({ children }) {
  const initialLixeirasFormData = {
    type: '',
    name: '',
    about: '',
    
  };

  const [lixeiras, setLixeiras] = useState([]);

  const [isShowLixeirasForm, setIsShowcardForm] = useState(false);

  const [cardFormData, setCardFormData] = useState(initialLixeirasFormData);

  const handleCreateCard = async () => {
    setCardFormData(initialLixeirasFormData);

    toggleShowCardForm();
  };

  const toggleShowCardForm = () => {
    setIsShowcardForm(!isShowLixeirasForm);
  };

  const loadLixeiras = async () => {
    const lixeiras = await Storage.read('lixeiras');

    setLixeiras(lixeiras);
  };

  const createLixeiras = async (card) => {
    const newLixeira = await Storage.create('lixeiras', card);

    setLixeiras([...lixeiras, newCard]);
  };

  const removeCard = (type) => {
    const newCard = lixeiras.filter(
      (card) => card.type !== type
    );

    setLixeiras(newCard);

    Storage.remove('Lixeiras', type);
  };

  
  return (
    <LixeirasContext.Provider
      value={{
        lixeiras,
        setLixeiras,
        isShowLixeirasForm,
        setIsShowcardForm,
        cardFormData,
        setCardFormData,
        toggleShowCardForm,
        loadLixeiras,
        createcard,
        removeCard,
        handleCreateCard,


      }}
    >
      {children}
    </LixeirasContext.Provider>
  );
}

export function useLixeiras() {
  return useContext(LixeirasContext);
}