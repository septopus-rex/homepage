import React from 'react';
import Layout from '@theme/Layout';

export default function Production() {
  return (
    <Layout title="Septopus Money In" description="Assets list of septopus res.">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        
        <ul>
          <li>W3OS</li>
          <li>Hash Lottery</li>
          <li>LuckySig</li>
        </ul>
      </div>
    </Layout>
  );
}