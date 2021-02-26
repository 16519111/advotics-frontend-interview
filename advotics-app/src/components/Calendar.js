import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../styles/Calendar.css';

export default function Filter() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
      />
    </div>
  );
}