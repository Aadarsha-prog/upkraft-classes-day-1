const getLocationBtn = document.getElementById("get-location-btn");
const osmMapIframe = document.getElementById("osm-map-iframe");

const permission = Notification.requestPermission()
  .then((data) => {
    console.log("Notification permission:", data);
  })
  .catch((err) => {
    console.error("Notification permission request failed:", err);
  });

const url =
  "https://www.openstreetmap.org/export/embed.html?marker=32.74553345603638,-96.80512635678575";

getLocationBtn.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition((p) => {
    console.log(p.coords.latitude, p.coords.longitude);
    const newUrl = new URL(url);
    newUrl.searchParams.set(
      "marker",
      `${p.coords.latitude},${p.coords.longitude}`,
    );

    console.log(newUrl.href);
    osmMapIframe.src = newUrl.href;

    const notification = new Notification("Location Updated", {
      body: "We have updated your location on the map.",
    });
  });
});
