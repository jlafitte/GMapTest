import { createViewModel } from './main-view-model';
import { Dialogs } from "@nativescript/core";

export function onNavigatingTo(args) {
  const page = args.object;
  page.bindingContext = createViewModel();
}

export function onReady(args) {
  Dialogs.alert("Map ready.");
  let map = args.map;
  let polylineOptions = {
    width: 3,
    points: [
      {
        lat: 29,
        lng: -95
      },
      {
        lat: 28,
        lng: -94
      },
      {
        lat: 27,
        lng: -93
      }
    ],
    tappable: true,
    visible: true,
    color: "red"
  }
  map.addPolyline(polylineOptions);
}

export function onTap(args) {
  Dialogs.alert("Map tapped.");
}

export function onPolyline(args) {
  Dialogs.alert("Polyline tapped.");
}
