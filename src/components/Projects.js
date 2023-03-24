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
          <p>ToDo</p>
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
          <p>By the end of the project I had managed to significantly reduce delay and eliminated noticeable drift from an IMU quaternion rotation signal </p>
          <iframe width="1063" height="480" src="https://www.youtube.com/embed/meowvbAdjhs" title="Thesis Demonstration" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </details>
      <br></br>
      <details className="collapsible">
        <summary>Climate Model (July 2022 - August 2022)</summary>
        <p>Group project completed for the course MATH3041: Mathematical Modelling for Real World Systems.</p>
        <p>Built an interactive climate model using differential equations in Jupyter/Python.</p>
        <p>The model simulates the Earth's surface and deep ocean temperature anomalies (from the year 1850) with a mean absolute error of 0.154°C</p>
        <ul>
          <li><a href="https://colab.research.google.com/drive/1-nZWwWlL7LP2gufw53lPwOfqHAHtMM0D?usp=sharing">Try it yourself!</a></li>
        </ul>
      </details>
      <br></br>
      
      <details className="collapsible">
        <summary>REST API for Global Economic Indicators (March 2020 - April 2020)</summary>
        <p>
        <ul>
            <li><a>Built a Flask-Restplus data service in Python accessible through a REST API</a> 
            <br></br>
            <a href="https://github.com/Jon-bon-Jono/World-Bank-Economic-Indicators-REST-API">Link to Github repo</a>
            </li>
            <li><a>Allows clients to read and store global economic indicator data from </a> <a href="http://api.worldbank.org/v2/">Worldbank</a> </li>
            
            <li><a>Stores data from a remote server to a local database using SQLite</a> </li>
            <li><a>Automatically generates swagger documentation for testing endpoints</a> </li>
        </ul>
        </p>
      </details>
    </section>
  );
}