// client/src/hooks/useApi.js
import { useState, useCallback } from 'react';
import api from '../api/axios';

export default function useApi() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(async ({ url, method='get', data=null, params=null, headers={} })=>{
    setLoading(true); setError(null);
    try {
      const res = await api({ url, method, data, params, headers });
      return res.data;
    } catch(err) {
      setError(err.response?.data || err.message);
      throw err;
    } finally { setLoading(false); }
  },[]);

  return { loading, error, request };
}
