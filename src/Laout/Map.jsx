
import { Map } from 'pigeon-maps';
import { osm } from 'pigeon-maps/providers';

const MapComponent = () => {
  return (
    <Map
      provider={osm}
      height={500}
      defaultCenter={[50.879, 4.6997]}
      defaultZoom={11}
    />
  );
};

export default MapComponent;
