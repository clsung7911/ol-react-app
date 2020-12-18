import * as olSource from "ol/source";

function xyz({ url, maxZoom }) {
	return new olSource.XYZ({ url, maxZoom });
}

export default xyz;