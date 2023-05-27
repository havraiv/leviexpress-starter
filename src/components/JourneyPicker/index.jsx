import React, { useEffect, useState } from 'react';
import './style.css';
// Napojte každý ze stavů na správý <select> tak, aby select zobrazoval vybraný stav a změna v selectu se promítla do stavu. Vytvoříte tedy dvoucestný databinding, kdy se např. stav fromCity bude promítat do value příslušného selectu, a při události onChange na selectu se nová hodnota zapíše do stavu fromCity. Obdobně i pro další dva selecty a stavy toCity a date.
export const JourneyPicker = ({ onJourneyChange }) => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Město odkud je: ${fromCity}, město kam je ${toCity} a datum je: ${date}`,
    );
  };
  return (
    <div className="journey-picker container">
      <h2 className="journey-picker__head">Kam chcete jet?</h2>
      <div className="journey-picker__body">
        <form className="journey-picker__form" onSubmit={handleSubmit}>
          <label>
            <div className="journey-picker__label">Odkud:</div>
            <select
              onChange={(e) => {
                const cityValue = e.target.value;
                setFromCity(cityValue);
                console.log(cityValue);
              }}
            >
              <option value="">Vyberte</option>
              <option value="mesto01">Město 01</option>
              <option value="mesto02">Město 02</option>
              <option value="mesto03">Město 03</option>
              <option value="mesto04">Město 04</option>
              <option value="mesto05">Město 05</option>
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Kam:</div>
            <select
              onChange={(e) => {
                const cityValue = e.target.value;
                setToCity(cityValue);
                console.log(cityValue);
              }}
            >
              <option value="">Vyberte</option>
              <option value="mesto01">Město 01</option>
              <option value="mesto02">Město 02</option>
              <option value="mesto03">Město 03</option>
              <option value="mesto04">Město 04</option>
              <option value="mesto05">Město 05</option>
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Datum:</div>
            <select
              onChange={(e) => {
                const dateValue = e.target.value;
                setDate(dateValue);
                console.log(dateValue);
              }}
            >
              <option value="">Vyberte</option>
              <option value="datum01">Datum 01</option>
              <option value="datum02">Datum 02</option>
              <option value="datum03">Datum 03</option>
              <option value="datum04">Datum 04</option>
              <option value="datum05">Datum 05</option>
            </select>
          </label>
          <div className="journey-picker__controls">
            <button className="btn" type="submit">
              Vyhledat spoj
            </button>
          </div>
        </form>
        <img className="journey-picker__map" src="/map.svg" />
      </div>
    </div>
  );
};
