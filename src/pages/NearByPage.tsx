import React, { useRef, useEffect } from 'react';

// interface ILocation {
//   latitude: number;
//   longitude: number;
// }

const locations = [
  { latitude: 37.018009, longitude: 127.108566 },
  { latitude: 37.02009, longitude: 127.4808876 },
  { latitude: 37.3180094, longitude: 127.8808776 },
  { latitude: 37.1180093, longitude: 127.2808576 }
];

const NearByPage: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { naver } = window;

    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude } = position.coords;
      const { longitude } = position.coords;

      const location = new naver.maps.LatLng(latitude, longitude);
      const mapOptions = {
        center: location,
        zoom: 16,
        zoomControl: true,
        zoomControlOptions: {
          position: naver.maps.Position.TOP_RIGHT
        }
      };

      if (mapRef.current) {
        const map = new naver.maps.Map(mapRef.current, mapOptions);
        map.setOptions('mapTypeControl', true);

        new naver.maps.Marker({
          position: new naver.maps.LatLng(latitude, longitude),
          map
          // icon: {
          //   url: 'https://as1.ftcdn.net/v2/jpg/03/08/58/44/1000_F_308584468_mUXpKY1mzIQOmV5PhOG0fCBHXtJnC8Lo.jpg',
          //   size: new naver.maps.Size(50, 52),
          //   origin: new naver.maps.Point(0, 0),
          //   anchor: new naver.maps.Point(25, 26)
          // }
        });

        // 주변 마커 나타내기
        locations.map((loc) => {
          new naver.maps.Marker({
            position: new naver.maps.LatLng(loc.latitude, loc.longitude),
            map
            // icon: {
            //   url: 'https://as1.ftcdn.net/v2/jpg/03/08/58/44/1000_F_308584468_mUXpKY1mzIQOmV5PhOG0fCBHXtJnC8Lo.jpg',
            //   size: new naver.maps.Size(50, 52),
            //   origin: new naver.maps.Point(0, 0),
            //   anchor: new naver.maps.Point(25, 26)
            // }
          });
        });
      }
    });
  }, [navigator]);

  // console.log(myLocation.latitude, myLocation.longitude);
  return <div ref={mapRef} className='w-full h-full'></div>;
};

export default NearByPage;
