import React from 'react';
import { JourneyPicker } from '../JourneyPicker';
// V komponentě Home si připravte funkci handleJourneyChange. Funkce handleJourneyChange bude očekávat jeden parametr – objekt s údaji o nalezeném spojení. Nazvěte jej třeba journey. Ve funkci zatím vypište tento parametr do konzole. Funkce se zatím nebude nikde volat – volání zajistíme v následujících krocích, kde bude funkce handleJourneyChange sloužit jako callback předaný do komponenty JourneyPicker.
export const Home = () => {
  const handleJourneyChange = ({ journey }) => {
    console.log(journey);
  };
  return (
    <main>
      <JourneyPicker />
    </main>
  );
};
