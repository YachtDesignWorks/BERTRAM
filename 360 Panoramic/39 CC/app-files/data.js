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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 3.1205612065537656,
        "pitch": 0.7291062570998186,
        "fov": 1.4256478217424775
      },
      "linkHotspots": [],
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 3.1021608792117874,
        "pitch": 0.477886062129695,
        "fov": 1.4256478217424775
      },
      "linkHotspots": [
        {
          "yaw": 3.069660200651021,
          "pitch": 0.11028638363570309,
          "rotation": 0,
          "target": "2-transom"
        },
        {
          "yaw": 2.4169839537890976,
          "pitch": 0.4954129618627814,
          "rotation": 0,
          "target": "3-interior"
        },
        {
          "yaw": 0.07403658801163537,
          "pitch": 0.39345250958065847,
          "rotation": 0,
          "target": "2-transom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-transom",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 3.104181214064538,
        "pitch": 0.4094692444898307,
        "fov": 1.4256478217424775
      },
      "linkHotspots": [
        {
          "yaw": -3.0893611970010166,
          "pitch": 0.003062897758823624,
          "rotation": 0,
          "target": "1-helm"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-interior",
      "name": "INTERIOR",
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
        "yaw": 1.7126385357874216,
        "pitch": 0.03754278532664301,
        "fov": 1.4256478217424775
      },
      "linkHotspots": [
        {
          "yaw": 1.507568789333499,
          "pitch": -0.15801602292633632,
          "rotation": 0,
          "target": "1-helm"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "BERTRAM 39 CC",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
