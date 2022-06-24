import React from 'react';
import logo from './logo.svg';
import './App.css';
import ETC, { Camera } from 'easy-ts-camera';
import CameraBuilder, { CameraUtils } from 'easy-ts-camera';
import { queryAllByTitle } from '@testing-library/react';
CameraUtils.isCameraSupported();

var video = document.getElementsByTagName('video')[0];
var canvas = document.getElementsByTagName('canvas')[0];
ETC.initWithUserCamera()
  .streamFrom(video)
  .drawInto(canvas)
  .getCameraAsync()
  .then(camera => {
    camera.startAsync()
  })
  .catch(error => {
    // Mostly happens if the user blocks the camera or the media devices are not supported
  });


function switchCamera(tryAgain = false) {
  console.log('switch camera');
  // camera.switchAsync(tryAgain)
  //   .catch(() => {
  //     if (tryAgain) return; // This line prevents loops. Because the tryAgain may also fail
  //     switchCamera(true);
  //   });
}

function StopCamera() {
  console.log('Stop camera');

  ETC.initWithUserCamera()
    .streamFrom(video)
    .drawInto(canvas)
    .getCameraAsync()
    .then(camera => {
      camera.stop()
    })
    .catch(error => {
      // Mostly happens if the user blocks the camera or the media devices are not supported
    });

}

function StartCamera() {
  console.log('Start camera');

  ETC.initWithUserCamera()
    .streamFrom(video)
    .drawInto(canvas)
    .getCameraAsync()
    .then(camera => {
      camera.startAsync()
    })
    .catch(error => {
      // Mostly happens if the user blocks the camera or the media devices are not supported
    });

}

function SnapCamera() {
  console.log('Snap camera');

  ETC.initWithUserCamera()
    .streamFrom(video)
    .drawInto(canvas)
    .getCameraAsync()
    .then(camera => {
      let olha = camera.snap()
      console.log('retorno do snap: ', olha);
      var dataURL = olha.toDataURL();
      console.log('retorno do dataURL: ', dataURL);
    })
    .catch(error => {
      // Mostly happens if the user blocks the camera or the media devices are not supported
    });

}

function App() {
  return (
    <div>
      <p>oi</p>
      <video autoPlay playsInline></video>
      <canvas></canvas>

      <button onClick={() => switchCamera}>switch camera</button>

      <button onClick={StopCamera}>STOP camera</button>
      <button onClick={StartCamera}>Start camera</button>
      <button onClick={SnapCamera}>Snap camera</button>
    </div>
  );
}

export default App;
