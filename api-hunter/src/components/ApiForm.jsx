import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchApi, axiosApi } from "../apiSlice";

const ApiForm = () => {
  const dispatch = useDispatch();

  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("GET");
  const [body, setBody] = useState("");

  const handleFetch = () => {
    dispatch(
      fetchApi({
        url,
        method,
        body: JSON.parse(body || "{}"),
      })
    );
  };

  const handleAxios = () => {
    dispatch(
      axiosApi({
        url,
        method,
        body: JSON.parse(body || "{}"),
      })
    );
  };

  return (
    <div className="card shadow p-4">
      <h3 className="text-center mb-3">API Hunter</h3>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Enter API URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <select
        className="form-select mb-3"
        value={method}
        onChange={(e) => setMethod(e.target.value)}
      >
        <option value="GET">GET</option>
        <option value="POST">POST</option>
      </select>

      {method === "POST" && (
        <textarea
          className="form-control mb-3"
          rows="4"
          placeholder="Enter JSON body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      )}

      <div className="d-flex gap-2 justify-content-center">
        <button className="btn btn-primary" onClick={handleFetch}>
          Use fetch()
        </button>

        <button className="btn btn-success" onClick={handleAxios}>
          Use axios
        </button>
      </div>
    </div>
  );
};

export default ApiForm;