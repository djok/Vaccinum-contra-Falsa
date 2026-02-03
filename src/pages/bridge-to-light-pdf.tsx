import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function BridgeToLightPdf(): JSX.Element {
  const pdfUrl = useBaseUrl('/pdf/bridge-to-light.pdf');

  return (
    <Layout title="Bridge to Light PDF" description="View the original PDF document">
      <div style={{ padding: '1rem', maxWidth: '1400px', margin: '0 auto' }}>
        <h1>Original Source / Оригинален източник</h1>
        <p style={{ marginBottom: '1rem' }}>
          <strong>A Bridge to Light: A Study in Masonic Ritual & Philosophy</strong> — Rex R. Hutchens, 2021
        </p>
        <p style={{ marginBottom: '1.5rem' }}>
          <a
            href={pdfUrl}
            download="Bridge-To-Light.pdf"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              backgroundColor: 'var(--ifm-color-primary)',
              color: 'white',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontWeight: 500,
            }}
          >
            Download PDF / Изтегли PDF
          </a>
        </p>
        <iframe
          src={pdfUrl}
          style={{
            width: '100%',
            height: 'calc(100vh - 280px)',
            border: '1px solid var(--ifm-color-emphasis-300)',
            borderRadius: '0.5rem',
          }}
          title="A Bridge to Light - PDF"
        />
      </div>
    </Layout>
  );
}
