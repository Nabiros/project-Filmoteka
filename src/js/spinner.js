import 'js-loading-overlay';


JsLoadingOverlay.show({
  "overlayBackgroundColor": "#733A3A",
  "overlayOpacity": "0.5",
  "spinnerIcon": "ball-fall",
  "spinnerColor": "#41120A",
  "spinnerSize": "1x",
  "overlayIDName": "overlay",
  "spinnerIDName": "spinner",
  "offsetX": 0,
  "offsetY": 0,
  "containerID": null,
  "lockScroll": false,
  "overlayZIndex": 9998,
  "spinnerZIndex": 9999
});

setTimeout(() => {
    JsLoadingOverlay.show(configs);
}, 0);



setTimeout(() => {
    JsLoadingOverlay.hide();
}, 2000);

// JsLoadingOverlay.hide();


