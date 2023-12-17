'use client'

import {BsArrowRight} from 'react-icons/bs'
import {supabase} from '@/utils/supabase'
import { useEffect, useState } from 'react';

// Componente Card
const Card = ({ imagem,type,about }) => {
  return (
    
    <div className="ml-[90px] mb-8 w-[275px] h-[434.48px] px-[40.99px] py-[29.28px] bg-white rounded-[25.76px] flex-col justify-center items-center gap-[16.40px] inline-flex 2xl:w-[450px] 2xl:h-[690px] 2xl:ml-[100px] 2xl:mt-[50px]">
      <img className="w-[202.60px] h-[193.23px] 2xl:w-[330px] 2xl:h-[290px] 2xl:mt-[50px]" src={imagem} alt={type} />
      <div className="self-stretch text-black text-3xl font-semibold font-['Poppins'] 2xl:text-[52px] 2xl:mt-[30px] 2xl:ml-[30px]">{type}</div>
      <div className="self-stretch text-black text-base font-medium font-['Poppins'] 2xl:text-[28px]/[40px] 2xl:mt-[30px] 2xl:ml-[30px]">{about}</div>
      <a href="./sobre/page1" className='w-[40px] h-[40px] border-none bg-green-600 text-white text-[1.5rem] rounded flex items-center justify-center'>
        <BsArrowRight/>
      </a>
    </div>
  );
};


const CardGallery = () => {
  const [imagens, setImagens] = useState([]);

  useEffect(() => {
    async function fetchImagens() {
      try {
        const { data, error } = await supabase.from('imagens').select('*');
        if (error) {
          throw error;
        }
        setImagens(data);
      } catch (error) {
        console.error('Erro ao recuperar imagens do Supabase:', error.message);
      }
    }

    fetchImagens();
  }, []);

  return (
    <div id='lixeiras' className=" w-[1310px] h-[1100px] pl-[100px] py-[80px] bg-green-600 rounded-tl-[100px] rounded-tr-[100px] 2xl:w-[1910px] 2xl:h-[1700px]">
      {imagens.map((imagem) => (
        <Card
          key={imagem.id}
          imagem={imagem.caminho_local}
          about={imagem.about}
        />
      ))}
    </div>
  );
};

export default CardGallery;
