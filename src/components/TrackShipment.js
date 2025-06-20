import React, { useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { motion } from 'framer-motion';

const TrackShipment = () => {
  const [trackingId, setTrackingId] = useState('');
  const [shipmentData, setShipmentData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTrack = async (e) => {
    e.preventDefault();
    if (!trackingId.trim()) return;
    
    setLoading(true);
    try {
      const docRef = doc(db, 'shipments', trackingId);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        setShipmentData(docSnap.data());
      } else {
        setShipmentData({ error: 'Shipment not found' });
      }
    } catch (error) {
      setShipmentData({ error: 'Error fetching shipment data' });
    }
    setLoading(false);
  };

  return (
    <section id="track" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Track Your Shipment</h2>
          <p className="text-xl text-gray-600">Enter your tracking ID to get real-time updates</p>
        </motion.div>
        
        <form onSubmit={handleTrack} className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              placeholder="Enter Tracking ID"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-primary hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50"
            >
              {loading ? 'Tracking...' : 'Track'}
            </button>
          </div>
        </form>
        
        {shipmentData && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            {shipmentData.error ? (
              <p className="text-red-600 text-center">{shipmentData.error}</p>
            ) : (
              <div>
                <h3 className="text-xl font-bold mb-4">Shipment Status</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p><strong>Status:</strong> {shipmentData.status}</p>
                    <p><strong>Origin:</strong> {shipmentData.origin}</p>
                    <p><strong>Destination:</strong> {shipmentData.destination}</p>
                  </div>
                  <div>
                    <p><strong>Estimated Delivery:</strong> {shipmentData.estimatedDelivery}</p>
                    <p><strong>Current Location:</strong> {shipmentData.currentLocation}</p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TrackShipment;