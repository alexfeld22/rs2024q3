import { useState } from 'react';

export default function ErrorBoundaryForm() {
  const [error, setError] = useState<boolean>(false);

  if (error) {
    throw new Error('Error Boundary test error');
  }
  return (
    <div>
      <button className="rounded bg-red-400 p-2" onClick={() => setError(true)}>
        Throw an error!
      </button>
    </div>
  );
}
