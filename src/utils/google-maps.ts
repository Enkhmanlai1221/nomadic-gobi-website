/**
 * Opens Google Maps with the given latitude and longitude coordinates
 * @param latitude - The latitude coordinate
 * @param longitude - The longitude coordinate
 * @param openInNewTab - Whether to open in a new tab (default: true)
 */
export const openGoogleMaps = (
  latitude: number,
  longitude: number,
  openInNewTab: boolean = true,
): void => {
  const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

  if (openInNewTab) {
    window.open(googleMapsUrl, "_blank");
  } else {
    window.location.href = googleMapsUrl;
  }
};
