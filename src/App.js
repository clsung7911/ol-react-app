import React, { useState } from 'react';
import Map from "./Map";
import { Layers, TileLayer } from "./Layers";
import { xyz } from "./Source";

import { Controls, FullScreenControl } from "./Controls";

const App = () => {
	
	const [center, setCenter] = useState([14243425.793355, 4342305.8698004]); 	// eslint-disable-next-line
	const [zoom, setZoom] = useState(7); 										// eslint-disable-next-line

	const resolutions = [ 32768, 16384, 8192, 4096, 2048, 1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1, 0.5, 0.25 ];
	
	return (
		<div>
			<h1 style={{margin:"50px"}}>OpenLayers React (feat.Vworld)</h1>
			<Map center={center} zoom={zoom}>
				<Layers>
					<TileLayer
						source={xyz({url: 'http://xdworld.vworld.kr:8080/2d/Base/service/{z}/{x}/{y}.png', maxZoom: resolutions.length - 1})}
						zIndex={0}
					/>					
				</Layers>
				<Controls>
					<FullScreenControl />
				</Controls>
			</Map>
			
		</div>
	);
}

export default App;