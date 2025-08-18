import React, {useState} from 'react';
import Meditation from './Meditation';

export default function JourneyMeditations(props) {


  return (
    <>
      {props?.meditations?.length > 0 ? (
        props.meditations.map((meditation, index) => (
          <div className='my-2'
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center', // center vertically within the container
              justifyContent: 'center', // optional: center horizontally
               // or any height you want
            }}
          >
            <Meditation key={meditation._id} meditation={meditation}/>
          </div>
        ))
      ) : (
        <h1>No Meditations Found</h1>
      )}
    </>
  );
}
