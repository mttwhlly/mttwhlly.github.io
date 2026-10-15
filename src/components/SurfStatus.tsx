import React, { useEffect, useState } from 'react';

const SURF_API = 'https://swells.surf/api/now';
const TIMEOUT_MS = 3000;

// Renders ", where the waves are currently clean and waist-high" from swells.surf. The API
// returns { status: null } overnight; that, a failed or slow request, or bad JSON all render
// nothing, so the surrounding sentence stands on its own.
const SurfStatus: React.FC = () => {
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

    fetch(SURF_API, { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        const value = data?.status;
        if (typeof value === 'string' && value.trim()) setStatus(value.trim());
      })
      .catch(() => {})
      .finally(() => clearTimeout(timeout));

    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, []);

  if (!status) return null;

  return (
    <span>
      , where{' '}
      <a
        href="https://swells.surf"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline underline-offset-2"
      >
        the waves
      </a>{' '}
      are currently {status}
    </span>
  );
};

export default SurfStatus;
