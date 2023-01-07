import React from "react";


export default function Projects() {
  return (
    <section id="Projects" className="text-gray-400 bg-gray-900 body-font">
      <h3 className="headings">Current Projects</h3>
        <details className="collapsible">
          <summary>Wearable Inertial-based Motion Tracking Application for Capturing Exercise Repetitions (January 2022 -)</summary>
          <span>
            <p>I began working on a novel motion tracking application during my software engineering internship at IkkiWorks. The application is to be integrated into the ikkiMoov system, their latest product in development. The application serves to generate accurate and drift free estimates of a single MEMS IMU's POSE (position and orientation) and send this to a smartphone-based gesture recognition system in real time.</p>
            <strong>Position estimates fall within our error budget of less than 10cm accumulated error over 3-5s. </strong>
            <p></p>
            <iframe width="1063" height="480" src="https://www.youtube.com/embed/jr9Yq0Gf_nY" title="Inertial Motion Tracker for Exercise Repetitions - Intro/Demonstration 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </span>
        </details>
        <br></br>
        <details className="collapsible">
          <summary>Resampling techniques to address imbalanced time series data for regression problems (November 2022 -)</summary>
          <p>TODO</p>
        </details>
      <h3 className="headings">Past Projects</h3>
      <details className="collapsible">
          <summary>Optimizing Inertial-based Sensor Fusion for Accurate Orientation Tracking (January 2021 - December 2021)</summary>
          <p>This was essentially my Software Engineering thesis. I completed this project in collaboration with IkkiWorks. They presented me with a problem where the orientation information generated from an IMU was inaccurate and slow to respond.</p>
          <p><a href="https://drive.google.com/file/d/1O3DPQPNuFrq1QDuoNBO9zluNS5Z1ES5F/view?usp=sharing">Link to thesis paper</a></p>
          <p>I was able to complete the following project goals:</p>
          <ul>
            <li><a>Inovating a unique inertial sensor calibration technique which uses ellipsoid fitting and ellipsoidal affine transformations along with preprocessing techniques that use z-score outlier removal and spherical regularization </a>
            <br></br>
            <a href="https://github.com/Jon-bon-Jono/IMU-Sensor-Calibration">Link to Github repo</a></li>
            <li><a>Performing highly accurate calibration of a magnetometer with hard iron ferromagnetic interference caused by a battery</a>
            <br></br><a href="https://github.com/Jon-bon-Jono/IMU-Sensor-Calibration#readme">Link to results</a></li>
            <li><a>Optimizing and tuning the hardware and Madgwick sensor fusion parameters on an Arduino Nano 33 BLE to compensate for ~0.5s delay</a><br></br><a href="https://drive.google.com/file/d/1O3DPQPNuFrq1QDuoNBO9zluNS5Z1ES5F/edit?disco=AAAAlfC5xUc"> Linkt to thesis chapter</a></li>
          </ul>
      </details>
      <br></br>
      <details className="collapsible">
        <summary>Climate Model (July 2022 - August 2022)</summary>
        <p>TODO</p>
      </details>
      <br></br>
      <details className="collapsible">
        <summary>Inertial-based Gesture Classifier for Handwashing Techniques (November 2020 - December 2020)</summary>
        <p>TODO</p>
      </details>
    </section>
  );
}