import React from 'react';
import { useSelector } from 'react-redux';

const ApiResponse = () => {
  const { loading, data, error, status } = useSelector((state) => state.api);

  return (
    <div className="card shadow mt-4 p-4">
      <h4>📊 API Response</h4>

      {loading && <div className="spinner-border text-primary" />}

      {error && (
        <div className="alert alert-danger mt-3">
          ❌ {error}
        </div>
      )}

      {data && (
        <div className="mt-3">
          <p><strong>Status:</strong> {status}</p>
          <pre className="bg-light p-3 rounded">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default ApiResponse;
