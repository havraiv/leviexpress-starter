import React, { useEffect, useState } from 'react';
import './style.css';
// Do hlavní komponenty JourneyPicker přidejte useEffect, který se bude volat při prvním zobrazení komponenty. Přesuňte do něj nastavení stavu cities – naše dvě testovací města. Výchozí stav pro cities tedy bude prázdné pole, teprve useEffect nastaví seznam měst na Prahu a Brno. Ověřte v prohlížeči, že se v selectech stále zobrazují obě města. Dejte pozor na to, aby se efekt volal opravdu jen při prvním zobrazení komponenty – můžete si to ověřit pomocným výpisem do konzole prohlížeče, který se musí objevit jen jednou – když budete překlikávat na jiná města, výpis už se nebude opakovat.
export const JourneyPicker = ({ onJourneyChange }) => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState('');
  const [cities, setCities] = useState([
    { name: 'Praha', code: 'CZ-PRG' },
    { name: 'Brno', code: 'CZ-BRQ' },
  ]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {}, []);

  return (
    <div className="journey-picker container">
      <h2 className="journey-picker__head">Kam chcete jet?</h2>
      <div className="journey-picker__body">
        <form className="journey-picker__form" onSubmit={handleSubmit}>
          <label>
            <div className="journey-picker__label">Odkud:</div>
            <select
              onChange={(e) => {
                setFromCity(e.target.value);
              }}
            >
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Kam:</div>
            <select
              onChange={(e) => {
                setToCity(e.target.value);
              }}
            >
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Datum:</div>
            <select
              onChange={(e) => {
                setDate(e.target.value);
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

const CityOptions = ({ cities }) => {
  return (
    <>
      <option value="">Vyberte</option>
      {cities.map((city) => {
        return (
          <option key={city.code} value={city.name}>
            {city.name}
          </option>
        );
      })}
    </>
  );
};
