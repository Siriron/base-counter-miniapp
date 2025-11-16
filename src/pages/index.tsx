'use client';

import { useCounter } from '../hooks/useCounter';
import { useState } from 'react';

export default function Home() {
  const { count, increment } = useCounter();
  const [loading, setLoading] = useState(false);

  const handleIncrement = async () => {
    setLoading(true);
    try {
      await increment?.();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">Base Counter Mini App</h1>
      <p className="text-xl mb-4">Current Count: {count?.toString() ?? 0}</p>
      <button
        onClick={handleIncrement}
        disabled={loading}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Processing...' : 'Increment Counter'}
      </button>
    </div>
  );
}
