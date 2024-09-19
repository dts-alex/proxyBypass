function FindProxyForURL(url, host) {

	if (shExpMatch(host, 'whatismyip.com') || shExpMatch(host, '*.whatismyip.com'))
		return "PROXY proxy02.datacorps.com:3128";
	
	if (shExpMatch(host, 'google.com') || shExpMatch(host, '*.google.com'))
		return "PROXY proxy02.datacorps.com:3128";
	
	if (shExpMatch(host, 'lowes.com') || shExpMatch(host, '*.lowes.com'))
		return "PROXY proxy02.datacorps.com:3128";
	
	if (shExpMatch(host, 'reddit.com') || shExpMatch(host, '*.reddit.com'))
		return "PROXY proxy02.datacorps.com:3128";
	
	if (shExpMatch(host, 'spiceworks.com') || shExpMatch(host, '*.spiceworks.com'))
		return "PROXY proxy02.datacorps.com:3128";

	if (shExpMatch(host, 'ridgewoodnj.net') || shExpMatch(host, '*.ridgewoodnj.net'))
		return "PROXY proxy02.datacorps.com:3128";
	
	if (shExpMatch(host, 'tranesupply.com') || shExpMatch(host, '*.tranesupply.com'))
		return "PROXY proxy02.datacorps.com:3128";
	
	if (shExpMatch(host, 'princetonnj.gov') || shExpMatch(host, '*.princetonnj.gov'))
		return "PROXY proxy02.datacorps.com:3128";

	if (shExpMatch(host, 'mygreatrooms.com') || shExpMatch(host, '*.mygreatrooms.com'))
		return "PROXY proxy02.datacorps.com:3128";

    // by default use no proxy
    return "DIRECT";
}