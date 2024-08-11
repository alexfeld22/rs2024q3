import { useState } from 'react';

export default function ErrorBoundaryForm() {
  const [error, setError] = useState<boolean>(false);

  if (error) {
    throw new Error('Error Boundary test error');
  }
  return (
    <div>
      <button
        className="m-1 rounded bg-red-400 p-1"
        onClick={() => setError(true)}
      >
        Throw an error!
      </button>
    </div>
  );
}
