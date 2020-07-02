import React from 'react';
import HeaderBarTemplate from '../../Shared/HeaderBarTemplate';

///// Live Stats \\\\\\
const Index = () => {
  return (
    <div>
      <HeaderBarTemplate title={'live stats'} showLinks={true} />
      <div
        style={{
          color: 'red',
          padding: '20%',
          fontSize: '2em',
          height: '2em',
          fontWeight: '900',
          textAlign: 'center',
        }}>
        Live Stats Are COMING SOON...
      </div>
    </div>
  );
};

export default Index;
