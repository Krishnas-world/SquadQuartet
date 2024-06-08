import React, { useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

function Chat() {
  const [loading, setLoading] = useState(true);

  const handleIframeLoad = () => {
    setLoading(false);
  };

  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      {loading && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <ClipLoader color={'#123abc'} loading={loading} size={150} />
        </div>
      )}
      <iframe
        src="http://localhost:3002" // Replace with the port of your other localhost application
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="External Application"
        onLoad={handleIframeLoad}
      ></iframe>
    </div>
  );
}

export default Chat;
