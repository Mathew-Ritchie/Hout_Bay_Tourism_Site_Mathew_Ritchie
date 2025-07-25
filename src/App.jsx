// src/App.jsx
import { useState, useEffect } from "react";
import "./App.css"; // Assuming you have some basic styling or remove if not used

function App() {
  const [establishments, setEstablishments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  // Function to fetch all establishments (no filters now)
  const fetchEstablishments = async () => {
    setLoading(true);
    setError(null);
    setMessage("");
    try {
      const url = `http://localhost:5173/api/establishments`;

      console.log(`App.jsx: Attempting to fetch from: ${url}`);
      const response = await fetch(url);
      console.log("App.jsx: Fetch response received.", response);

      if (!response.ok) {
        console.error("App.jsx: Fetch response not OK. Status:", response.status);
        const errorData = await response
          .json()
          .catch(() => ({ message: "No detailed error message" }));
        throw new Error(`HTTP error! Status: ${response.status} - ${errorData.message}`);
      }
      const data = await response.json();
      console.log("App.jsx: Data received:", data);
      setEstablishments(data);
      setMessage(`All establishments fetched successfully! (${data.length} found)`);
    } catch (err) {
      console.error("App.jsx: Error fetching establishments:", err);
      setError(err.message);
      setMessage("Failed to fetch establishments.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch all establishments when the component mounts
  useEffect(() => {
    console.log("App.jsx: useEffect triggered, calling fetchEstablishments.");
    fetchEstablishments();
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="App">
      <h1>Hout Bay Establishments</h1>

      {message && <p style={{ color: error ? "red" : "green" }}>{message}</p>}
      {error && <p className="error-message">Error: {error}</p>}

      <h2>All Establishments</h2>
      {loading ? (
        <p>Loading establishments...</p>
      ) : establishments.length === 0 ? (
        <p>No establishments available.</p>
      ) : (
        <div className="establishment-grid">
          {establishments.map((establishment) => (
            <div key={establishment.id} className="establishment-item">
              <h3>{establishment.name}</h3>
              {establishment.imageUrl && (
                <img
                  src={establishment.imageUrl}
                  alt={establishment.name}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "5px",
                    marginBottom: "10px",
                  }}
                />
              )}
              <p>
                <strong>Type:</strong>{" "}
                {establishment.type
                  ? establishment.type.charAt(0).toUpperCase() + establishment.type.slice(1)
                  : "N/A"}
              </p>
              <p>
                <strong>Category:</strong> {establishment.category}
              </p>
              <p>
                <strong>Hours:</strong> {establishment.tradingHours}
              </p>
              <p>
                <strong>Rating:</strong>{" "}
                {establishment.rating ? `${establishment.rating}/5` : "N/A"}
              </p>
              {/* Removed "View Details" button */}
            </div>
          ))}
        </div>
      )}

      {/* Removed "Selected Establishment Details" section */}
    </div>
  );
}

export default App;
