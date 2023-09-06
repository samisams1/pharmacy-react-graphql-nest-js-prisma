import React from 'react';
import { useQuery } from '@apollo/client';
import { ME_QUERY } from '../../graphql/Profile';
import { userInterface } from '../../interface/interfaces';

export const Profile = () => {
  const { loading, error, data } = useQuery(ME_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  if (!data || !data.me || !Array.isArray(data.me))
    return <p>No data available</p>;

  return (
    <div>
      {data.me.map((row: userInterface) => (
        <h1 key={row.firstName}>{row.firstName}</h1>
      ))}
    </div>
  );
};

export default Profile;  