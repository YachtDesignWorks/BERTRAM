var APP_DATA = {
  "scenes": [
    {
      "id": "0-39cc-interior",
      "name": "39CC Interior",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.891159603318453,
          "pitch": -0.10362674177732778,
          "rotation": 0,
          "target": "1-28cc-transom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-28cc-transom",
      "name": "28CC Transom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 480,
      "initialViewParameters": {
        "yaw": 3.140143723654935,
        "pitch": 0.2946601159256197,
        "fov": 1.3806389203442926
      },
      "linkHotspots": [
        {
          "yaw": 3.0852441641094144,
          "pitch": 0.19594174066100223,
          "rotation": 0,
          "target": "0-39cc-interior"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "360  Test",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
