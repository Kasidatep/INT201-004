export function init(lat,lon) {
    const latitude = Number(lat)
    const longitude = Number(lon)

    const map = new longdo.Map({
        placeholder: document.getElementById('map')
    });
    const mark = new longdo.Marker(
        { lon: longitude, lat: latitude },
        {
          title: 'Mark',
          icon: {
            url: 'https://map.longdo.com/mmmap/images/pin_mark.png',
            offset: { x: 12, y: 45 }
          },
          detail: 'Drag me',
          visibleRange: { min: 0, max: 13 },
          draggable: true,
          weight: longdo.OverlayWeight.Top,
        }
        );
    map.Overlays.add(mark);
    map.Overlays.bounce(mark)
    map.location({ lon:longitude, lat:latitude }, true);
    map.zoom(9, true);
    map.Ui.Zoombar.visible(false);
    map.Ui.DPad.visible(false);
    map.Ui.LayerSelector.visible(false);
    map.Ui.Crosshair.visible(false);

}
