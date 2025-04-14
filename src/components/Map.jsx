import axios from "axios";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

const MyMapComponent = () => {
  const [issPosition, setIssPosition] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchISS = async () => {
    try {
      const response = await axios.get(
        `https://api.wheretheiss.at/v1/satellites/25544`
      );
      console.log(response);
      const { latitude, longitude } = response.data;
      setIssPosition([latitude, longitude]);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchISS();
  }, []);

  console.log(loading)

  if(loading) return <p>Loading...</p>

  return (
    <div>
    <MapContainer center={issPosition} zoom={7} scrollWheelZoom={false} style={{ width: "600px", height: "600px"}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={issPosition} />
       
    </MapContainer>
    </div>
  );
};

export default MyMapComponent;
