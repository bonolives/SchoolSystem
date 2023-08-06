import React, { useState, useEffect } from 'react';

const API_URL = 'https://school-api-2wqk.onrender.com/api/clubs/';

const Club = () => {
  const [club, setClub] = useState(null);

  useEffect(() => {
    fetchStaffData();
  }, []);

  const fetchStaffData = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setStaffData(data.results);
    } catch (error) {
      console.error('Error fetching staff data:', error);
    }
  };

  return (
    <div>
      {club ? (
        <ul>
          {staffData.map((staff) => (
            <li key={staff.id}>
              {staff.first_name} {staff.second_name} - {staff.gender} - {staff.age} - {staff.email} - {staff.department}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading staff data...</p>
      )}
    </div>
  );
};

export default Staff;