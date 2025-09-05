const out = document.getElementById('out');
function log(s){ out.textContent += (out.textContent ? '\n' : '') + s; }

// 1) PROVE THE BUNDLE LOADED
if (!window.ESPLoader) {
  // Extra hints: print what we actually got back
  log('ERROR: ESPLoader missing. Keys on window: ' + Object.keys(window).slice(0,50).join(', '));
  log('Check that esptooljs.bundle.js is at the SAME PATH as index.html, and not HTML.');
} else {
  log('OK: ESPLoader present (bundle loaded).');
}

// OPTIONAL: also verify transport class names exposed by this bundle
const TransportCtor = window.TransportWebSerial || window.WebSerialTransport || window.Transport;
log('Transport class = ' + (TransportCtor ? TransportCtor.name : 'NOT FOUND'));

// 2) If both are present, you can now attach your real app code
//    (You can paste the full flasher here once the diagnostics say OK.)
