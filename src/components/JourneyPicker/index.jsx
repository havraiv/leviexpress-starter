import React, { useEffect, useState } from 'react';
import './style.css';
// Ve funkci handleSubmit v komponentě JourneyPicker máte nyní výpis nalezených spojení do konzole prohlížeče. Tento výpis nahraďte voláním funkce uložené v property onJourneyChange, které jako paramter předáte data získaná z volání API pod klíčem results.
export const JourneyPicker = ({ onJourneyChange }) => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState('');
  const [cities, setCities] = useState([]);
  const [dates, setDates] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fromCity, toCity, date);
    fetch(
      `https://apps.kodim.cz/daweb/leviexpress/api/journey?fromCity=${fromCity}&toCity=${toCity}&date=${date}`,
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
      });
  };
  useEffect(() => {
    fetch('https://apps.kodim.cz/daweb/leviexpress/api/cities')
      .then((response) => response.json())
      .then((cities) => {
        setCities(cities.results);
      });
    fetch('https://apps.kodim.cz/daweb/leviexpress/api/dates')
      .then((response) => response.json())
      .then((dates) => {
        setDates(dates.results);
      });
  }, []);

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
              <DatesOptions dates={dates} />
            </select>
          </label>
          <div className="journey-picker__controls">
            <button
              className="btn"
              type="submit"
              disabled={
                fromCity === '' || toCity === '' || date === '' ? true : false
              }
            >
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
          <option key={city.code} value={city.code}>
            {city.name}
          </option>
        );
      })}
    </>
  );
};

const DatesOptions = ({ dates }) => {
  return (
    <>
      <option value="">Vyberte</option>
      {dates.map((date) => {
        return (
          <option key={date.dateBasic} value={date.dateBasic}>
            {date.dateCs}
          </option>
        );
      })}
    </>
  );
};
