import React from 'react';
import './style.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Reservation = () => {
  const [reservation, setReservation] = useState(null);
  const actualId = useParams().id;
  console.log(actualId);
  useEffect(() => {
    fetch(
      `https://apps.kodim.cz/daweb/leviexpress/api/reservation?id=${actualId}`,
    )
      .then((response) => response.json())
      .then((data) => setReservation(data));
  }, []);
  console.log(reservation);
  return (
    <>
      {reservation !== null ? (
        <div className="reservation container">
          <h2>Vaše e-jízdenka č. {reservation.results.reservationId}</h2>
          <div className="reservation__body">
            <div className="reservation__headings">
              <p>Datum cesty:</p>
              <p>Odjezd:</p>
              <p>Příjezd:</p>
              <p>Sedadlo:</p>
            </div>
            <div className="reservation__info">
              <p>{reservation.results.date}</p>
              <p>
                {reservation.results.fromCity.name},{' '}
                {reservation.results.fromCity.time}
              </p>
              <p>
                {reservation.results.toCity.name},{' '}
                {reservation.results.toCity.time}
              </p>
              <p>{reservation.results.seatNumber}</p>
            </div>
          </div>
        </div>
      ) : (
        false
      )}
    </>
  );
};
