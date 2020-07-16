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
        "yaw": 1.5610917175564722,
        "pitch": 0.3271978607277788,
        "fov": 1.4256478217424775
      },
      "linkHotspots": [
        {
          "yaw": 1.5479996002970706,
          "pitch": 0.25262990035206734,
          "rotation": 0,
          "target": "2-bow"
        },
        {
          "yaw": 1.8668707305541563,
          "pitch": 0.2689476150535519,
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
        "yaw": 1.558982556360105,
        "pitch": 0.33772363140432304,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0950005968224374,
          "pitch": 0.35006536116165954,
          "rotation": 0,
          "target": "2-bow"
        },
        {
          "yaw": -1.3312519703956909,
          "pitch": 0.4038116536188774,
          "rotation": 0,
          "target": "0-transom"
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
        "yaw": 1.5696697779782216,
        "pitch": 0.2836382320354538,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1492414419276162,
          "pitch": 0.21262171048425316,
          "rotation": 0,
          "target": "1-helm"
        },
        {
          "yaw": 1.5428409994917622,
          "pitch": 0.2872164429349571,
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
