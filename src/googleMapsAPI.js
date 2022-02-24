import React, { useEffect } from 'react'

const GoogleMapsAPI = () => {
    useEffect(() => {
        const script = document.createElement("script");
    
        // create an .env.local file with REACT_APP_GOOGLE_MAPS_API_KEY="key"
        script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places`
        // script.async = true;
    
        document.body.appendChild(script);
        return () => {
          document.body.removeChild(script);
        }
      }, []);
    return <></>
}
    
export default GoogleMapsAPI