import { useState } from 'react';
import { adressService } from '../services/adressinfo';

export function useAdress() {
  const [info, setInfo] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function getAdressInfoRequest(adress) {

    if (adress.trim() !== ''){
      setLoading(true);

      try {
        const infoData = await adressService.getInfo(adress);
        
  
        setTimeout(() => {
          setInfo(infoData);
          setLoading(false);
          infoData.map((items, index) => {
            console.log("index",index);
            Object.keys(items).map((key) => {
              console.log("index key",key);
            })
          })    

        }, 1000);
      } catch (error) {
        setError(error);
      }
    }  
  
    }

  return {
    info,
    error,
    isLoading,
    getAdressInfoRequest,
  }
  
}
