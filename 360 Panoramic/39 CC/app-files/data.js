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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.07391568627008027,
          "pitch": 0.02004361117045761,
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 3.1127358110966323,
        "pitch": 0.30925995149880414,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 3.0543018924352108,
          "pitch": 0.07585562118774192,
          "rotation": 0,
          "target": "0-bow"
        },
        {
          "yaw": 2.418796866673123,
          "pitch": 0.49210931556892845,
          "rotation": 0,
          "target": "3-interior"
        },
        {
          "yaw": 0.06725034585883805,
          "pitch": 0.40256672608677135,
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
        "yaw": 3.0984064762760113,
        "pitch": 0.23262893603870793,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -3.085968664818644,
          "pitch": -0.011076256561906916,
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
        "yaw": 0.22080165499308713,
        "pitch": 0.44862228249765757,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 2.4184160031942703,
          "pitch": 0.1760359056805143,
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
