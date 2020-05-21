var APP_DATA = {
  "scenes": [
    {
      "id": "0-bow",
      "name": "BOW",
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
        "yaw": 3.134363598552305,
        "pitch": 0.40106791936434405,
        "fov": 1.4256478217424775
      },
      "linkHotspots": [
        {
          "yaw": -0.0749061689098518,
          "pitch": 0.012870153350947433,
          "rotation": 0,
          "target": "1-helm"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-helm",
      "name": "HELM",
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
        "yaw": 3.1193279780642964,
        "pitch": 0.57777209208502,
        "fov": 1.4256478217424775
      },
      "linkHotspots": [
        {
          "yaw": 2.413545748259031,
          "pitch": 0.510821106207807,
          "rotation": 0,
          "target": "2-head-line"
        },
        {
          "yaw": 3.0742859289903848,
          "pitch": 0.08128148647719158,
          "rotation": 0,
          "target": "0-bow"
        },
        {
          "yaw": 0.06533717281832274,
          "pitch": 0.3938966069057166,
          "rotation": 0,
          "target": "3-transom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-head-line",
      "name": "HEAD LINE",
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
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "3-transom",
      "name": "TRANSOM",
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
          "yaw": -3.0608898370598414,
          "pitch": 0.05917203730344056,
          "rotation": 0,
          "target": "1-helm"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "BERTRAM 39CC",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
