import React from 'react'
import {Map} from 'pigeon-maps'
import {maptiler} from 'pigeon-maps/providers'

const maptilerProvider = maptiler('MY_API_KEY', 'streets')

    return (
        <div>
            <Map
                provider={maptilerProvider}
                dprs={[1, 2]} // this provider supports HiDPI tiles
                height={200}
                defaultCenter={[50.879, 4.6997]}
                defaultZoom={11}
            />
        </div>
    );

export default Map;
