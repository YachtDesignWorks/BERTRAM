var APP_DATA = {
  "scenes": [
    {
      "id": "0-transom",
      "name": "Transom",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.5527717385484756,
        "pitch": 0.39431425671821074,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 1.5483458411288815,
          "pitch": 0.1885335372846555,
          "rotation": 0,
          "target": "2-bow"
        },
        {
          "yaw": 1.9450059784977167,
          "pitch": 0.24998463295873385,
          "rotation": 0,
          "target": "1-helm"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-helm",
      "name": "Helm",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.5611189106135956,
        "pitch": 0.5838838527717822,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 1.0813818002482147,
          "pitch": 0.3622864571890325,
          "rotation": 0,
          "target": "2-bow"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bow",
      "name": "Bow",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0839993598593018,
          "pitch": 0.10014489185374842,
          "rotation": 0,
          "target": "1-helm"
        },
        {
          "yaw": 1.4395662456471952,
          "pitch": 0.2711626352762284,
          "rotation": 0,
          "target": "0-transom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "BERTRAM 28DC",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
