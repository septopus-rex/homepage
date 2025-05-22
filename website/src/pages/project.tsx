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
          <li>Rules Center</li>
          <li>Septopus World</li>
          <li>King Center</li>
          <li>AI Center</li>
        </ul>
      </div>
    </Layout>
  );
}