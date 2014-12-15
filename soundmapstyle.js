	var minimalMapStyles = [
	{
	featureType: "all",
    elementType: "geometry",
		stylers: [
			{ visibility: "simplified" },
			{ lightness: 0 },
			{ saturation: -100 }			
		]
	},
	{
	featureType: "all",
    elementType: "labels",
		stylers: [
			{ visibility: "off" },
			{ lightness: 0 },
			{ saturation: 100 }
		]
	},
	{
	featureType: "water",
    elementType: "geometry",
		stylers: [
			{ visibility: "on" },
		 { hue: "#19e6e6" },
	 	 { lightness: 30 },
	 	 { saturation: -20 }
		]
	}	
];