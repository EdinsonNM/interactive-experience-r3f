export default function World({ url }) {
  return (
    <>
      <iframe
        className="w-screen h-screen"
        title="Forsaken Desert - Low poly Stylized Environment"
        allowfullscreen
        allow="autoplay; fullscreen; xr-spatial-tracking"
        src={url}
      ></iframe>
    </>
  );
}
