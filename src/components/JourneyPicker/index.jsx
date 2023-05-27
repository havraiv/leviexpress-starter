import React, { useEffect, useState } from 'react';
import './style.css';

export const JourneyPicker = ({ onJourneyChange }) => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState('');
  const [cities, setCities] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    fetch('https://apps.kodim.cz/daweb/leviexpress/api/cities')
      .then((response) => response.json())
      .then((cities) => {
        setCities(cities.results);
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
              <DatesOptions />
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
// Podobně jako CityOptions získává seznam měst v property cities, bude i DatesOptions získávat seznam termínů v property dates. V elementech <option> (s výjimkou prvního ručně vloženého s textem „Vyberte“) požijte jako value a key hodnotu dateBasic a jako hodnotu dateCs použíjte jako obsah.
const DatesOptions = () => {
  return (
    <>
      <option value="">Vyberte</option>
      <option value="datum01">Datum 01</option>
      <option value="datum02">Datum 02</option>
      <option value="datum03">Datum 03</option>
      <option value="datum04">Datum 04</option>
      <option value="datum05">Datum 05</option>
    </>
  );
};
