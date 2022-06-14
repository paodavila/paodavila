(function(){
    var script = {
 "definitions": [{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -180,
  "pitch": 3.67
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_7C9DB37D_5E34_8974_41D3_0492407D33CA",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "items": [
  {
   "media": "this.panorama_28F4614B_25DB_AF5D_41BC_EBDC584FF9B4",
   "camera": "this.panorama_28F4614B_25DB_AF5D_41BC_EBDC584FF9B4_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2E9A3B06_25DB_7CD7_41B1_06572092405D",
   "camera": "this.panorama_2E9A3B06_25DB_7CD7_41B1_06572092405D_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2E8BF37A_25D4_B33F_41B5_61E7D351E235",
   "camera": "this.panorama_2E8BF37A_25D4_B33F_41B5_61E7D351E235_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2E8A1B64_25D4_934B_41AB_BC932A14C204",
   "camera": "this.panorama_2E8A1B64_25D4_934B_41AB_BC932A14C204_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2E8AA3A0_25D4_93CB_41B7_D8ED54B2D7DF",
   "camera": "this.panorama_2E8AA3A0_25D4_93CB_41B7_D8ED54B2D7DF_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2E844C45_25D4_B555_41B1_B9826A694330",
   "camera": "this.panorama_2E844C45_25D4_B555_41B1_B9826A694330_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2E8534D9_25D5_757D_41B6_17C3D88A75EC",
   "camera": "this.panorama_2E8534D9_25D5_757D_41B6_17C3D88A75EC_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2E896D44_25D5_974B_41BC_77D74E9117F1",
   "camera": "this.panorama_2E896D44_25D5_974B_41BC_77D74E9117F1_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2E8BB5E0_25D5_974B_41B9_BCF09EF56A82",
   "camera": "this.panorama_2E8BB5E0_25D5_974B_41B9_BCF09EF56A82_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2E8ABE95_25D5_F5F5_4169_3683D1301C56",
   "camera": "this.panorama_2E8ABE95_25D5_F5F5_4169_3683D1301C56_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2E8A06F3_25D5_B54D_41B8_17A40A969F14",
   "camera": "this.panorama_2E8A06F3_25D5_B54D_41B8_17A40A969F14_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2E884FD9_25D5_937D_41A4_210C4345D7C1",
   "camera": "this.panorama_2E884FD9_25D5_937D_41A4_210C4345D7C1_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2E8A2838_25D4_9D3B_41AF_72DD7449D2A5",
   "camera": "this.panorama_2E8A2838_25D4_9D3B_41AF_72DD7449D2A5_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2E8BE095_25D4_ADF4_41A6_2EFA257EE3C9",
   "camera": "this.panorama_2E8BE095_25D4_ADF4_41A6_2EFA257EE3C9_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2E85F8E5_25D4_FD54_41B6_97ED709A00E2",
   "camera": "this.panorama_2E85F8E5_25D4_FD54_41B6_97ED709A00E2_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2E841131_25D4_ACCD_41B8_5A71351B8A03",
   "camera": "this.panorama_2E841131_25D4_ACCD_41B8_5A71351B8A03_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 0)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_2E8534D9_25D5_757D_41B6_17C3D88A75EC_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2E841131_25D4_ACCD_41B8_5A71351B8A03"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2E8BE095_25D4_ADF4_41A6_2EFA257EE3C9"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_2E85F8E5_25D4_FD54_41B6_97ED709A00E2",
 "thumbnailUrl": "media/panorama_2E85F8E5_25D4_FD54_41B6_97ED709A00E2_t.jpg",
 "label": "Foto 15",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E85F8E5_25D4_FD54_41B6_97ED709A00E2_0/f/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E85F8E5_25D4_FD54_41B6_97ED709A00E2_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E85F8E5_25D4_FD54_41B6_97ED709A00E2_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E85F8E5_25D4_FD54_41B6_97ED709A00E2_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E85F8E5_25D4_FD54_41B6_97ED709A00E2_0/u/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E85F8E5_25D4_FD54_41B6_97ED709A00E2_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E85F8E5_25D4_FD54_41B6_97ED709A00E2_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E85F8E5_25D4_FD54_41B6_97ED709A00E2_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E85F8E5_25D4_FD54_41B6_97ED709A00E2_0/r/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E85F8E5_25D4_FD54_41B6_97ED709A00E2_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E85F8E5_25D4_FD54_41B6_97ED709A00E2_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E85F8E5_25D4_FD54_41B6_97ED709A00E2_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E85F8E5_25D4_FD54_41B6_97ED709A00E2_0/b/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E85F8E5_25D4_FD54_41B6_97ED709A00E2_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E85F8E5_25D4_FD54_41B6_97ED709A00E2_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E85F8E5_25D4_FD54_41B6_97ED709A00E2_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E85F8E5_25D4_FD54_41B6_97ED709A00E2_0/d/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E85F8E5_25D4_FD54_41B6_97ED709A00E2_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E85F8E5_25D4_FD54_41B6_97ED709A00E2_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E85F8E5_25D4_FD54_41B6_97ED709A00E2_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E85F8E5_25D4_FD54_41B6_97ED709A00E2_0/l/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E85F8E5_25D4_FD54_41B6_97ED709A00E2_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E85F8E5_25D4_FD54_41B6_97ED709A00E2_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E85F8E5_25D4_FD54_41B6_97ED709A00E2_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2E85F8E5_25D4_FD54_41B6_97ED709A00E2_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3CF911B3_25DF_6FCD_4189_C1D1BF34D5C1",
  "this.overlay_3FFC3C21_25DC_B4CD_41A6_57FD50A6AA24"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -88.9,
  "pitch": 1.47
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_7D1E821E_5E34_8AB5_41C1_70899FF4FD00",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 96.24,
  "pitch": 8.82
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_7C64B435_5E34_8EF4_41C9_33B0FB7177F8",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -180,
  "pitch": -11.02
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_7CE7F31B_5E34_8ABC_41B9_BC7DB5FB90D4",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -89.63,
  "pitch": -1.47
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_7CDC62ED_5E34_8B94_41C3_9FB458077F98",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "items": [
  {
   "media": "this.panorama_28F4614B_25DB_AF5D_41BC_EBDC584FF9B4",
   "camera": "this.panorama_28F4614B_25DB_AF5D_41BC_EBDC584FF9B4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2E9A3B06_25DB_7CD7_41B1_06572092405D",
   "camera": "this.panorama_2E9A3B06_25DB_7CD7_41B1_06572092405D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2E8BF37A_25D4_B33F_41B5_61E7D351E235",
   "camera": "this.panorama_2E8BF37A_25D4_B33F_41B5_61E7D351E235_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2E8A1B64_25D4_934B_41AB_BC932A14C204",
   "camera": "this.panorama_2E8A1B64_25D4_934B_41AB_BC932A14C204_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2E8AA3A0_25D4_93CB_41B7_D8ED54B2D7DF",
   "camera": "this.panorama_2E8AA3A0_25D4_93CB_41B7_D8ED54B2D7DF_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2E844C45_25D4_B555_41B1_B9826A694330",
   "camera": "this.panorama_2E844C45_25D4_B555_41B1_B9826A694330_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2E8534D9_25D5_757D_41B6_17C3D88A75EC",
   "camera": "this.panorama_2E8534D9_25D5_757D_41B6_17C3D88A75EC_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2E896D44_25D5_974B_41BC_77D74E9117F1",
   "camera": "this.panorama_2E896D44_25D5_974B_41BC_77D74E9117F1_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2E8BB5E0_25D5_974B_41B9_BCF09EF56A82",
   "camera": "this.panorama_2E8BB5E0_25D5_974B_41B9_BCF09EF56A82_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2E8ABE95_25D5_F5F5_4169_3683D1301C56",
   "camera": "this.panorama_2E8ABE95_25D5_F5F5_4169_3683D1301C56_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2E8A06F3_25D5_B54D_41B8_17A40A969F14",
   "camera": "this.panorama_2E8A06F3_25D5_B54D_41B8_17A40A969F14_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2E884FD9_25D5_937D_41A4_210C4345D7C1",
   "camera": "this.panorama_2E884FD9_25D5_937D_41A4_210C4345D7C1_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2E8A2838_25D4_9D3B_41AF_72DD7449D2A5",
   "camera": "this.panorama_2E8A2838_25D4_9D3B_41AF_72DD7449D2A5_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2E8BE095_25D4_ADF4_41A6_2EFA257EE3C9",
   "camera": "this.panorama_2E8BE095_25D4_ADF4_41A6_2EFA257EE3C9_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2E85F8E5_25D4_FD54_41B6_97ED709A00E2",
   "camera": "this.panorama_2E85F8E5_25D4_FD54_41B6_97ED709A00E2_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2E841131_25D4_ACCD_41B8_5A71351B8A03",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_2E841131_25D4_ACCD_41B8_5A71351B8A03_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 0)",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -87.43,
  "pitch": 2.2
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_7C4C13E4_5E34_8994_41D8_3ADBE91B9942",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2E896D44_25D5_974B_41BC_77D74E9117F1"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2E9A3B06_25DB_7CD7_41B1_06572092405D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2E8A1B64_25D4_934B_41AB_BC932A14C204"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_2E8BF37A_25D4_B33F_41B5_61E7D351E235",
 "thumbnailUrl": "media/panorama_2E8BF37A_25D4_B33F_41B5_61E7D351E235_t.jpg",
 "label": "Foto 3",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8BF37A_25D4_B33F_41B5_61E7D351E235_0/f/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8BF37A_25D4_B33F_41B5_61E7D351E235_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8BF37A_25D4_B33F_41B5_61E7D351E235_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8BF37A_25D4_B33F_41B5_61E7D351E235_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8BF37A_25D4_B33F_41B5_61E7D351E235_0/u/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8BF37A_25D4_B33F_41B5_61E7D351E235_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8BF37A_25D4_B33F_41B5_61E7D351E235_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8BF37A_25D4_B33F_41B5_61E7D351E235_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8BF37A_25D4_B33F_41B5_61E7D351E235_0/r/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8BF37A_25D4_B33F_41B5_61E7D351E235_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8BF37A_25D4_B33F_41B5_61E7D351E235_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8BF37A_25D4_B33F_41B5_61E7D351E235_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8BF37A_25D4_B33F_41B5_61E7D351E235_0/b/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8BF37A_25D4_B33F_41B5_61E7D351E235_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8BF37A_25D4_B33F_41B5_61E7D351E235_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8BF37A_25D4_B33F_41B5_61E7D351E235_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8BF37A_25D4_B33F_41B5_61E7D351E235_0/d/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8BF37A_25D4_B33F_41B5_61E7D351E235_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8BF37A_25D4_B33F_41B5_61E7D351E235_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8BF37A_25D4_B33F_41B5_61E7D351E235_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8BF37A_25D4_B33F_41B5_61E7D351E235_0/l/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8BF37A_25D4_B33F_41B5_61E7D351E235_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8BF37A_25D4_B33F_41B5_61E7D351E235_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8BF37A_25D4_B33F_41B5_61E7D351E235_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2E8BF37A_25D4_B33F_41B5_61E7D351E235_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_2B1CE152_25F5_6F4F_41BE_D3F8D35B2D37",
  "this.overlay_2ABCE3C1_25F5_934D_41B3_2E3937641579",
  "this.overlay_2A7D72D8_25F5_AD7B_41A0_7E89CAB85AFE"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2E8BE095_25D4_ADF4_41A6_2EFA257EE3C9"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2E8A2838_25D4_9D3B_41AF_72DD7449D2A5"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2E8ABE95_25D5_F5F5_4169_3683D1301C56"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_2E884FD9_25D5_937D_41A4_210C4345D7C1",
 "thumbnailUrl": "media/panorama_2E884FD9_25D5_937D_41A4_210C4345D7C1_t.jpg",
 "label": "Foto 12",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E884FD9_25D5_937D_41A4_210C4345D7C1_0/f/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E884FD9_25D5_937D_41A4_210C4345D7C1_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E884FD9_25D5_937D_41A4_210C4345D7C1_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E884FD9_25D5_937D_41A4_210C4345D7C1_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E884FD9_25D5_937D_41A4_210C4345D7C1_0/u/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E884FD9_25D5_937D_41A4_210C4345D7C1_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E884FD9_25D5_937D_41A4_210C4345D7C1_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E884FD9_25D5_937D_41A4_210C4345D7C1_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E884FD9_25D5_937D_41A4_210C4345D7C1_0/r/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E884FD9_25D5_937D_41A4_210C4345D7C1_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E884FD9_25D5_937D_41A4_210C4345D7C1_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E884FD9_25D5_937D_41A4_210C4345D7C1_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E884FD9_25D5_937D_41A4_210C4345D7C1_0/b/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E884FD9_25D5_937D_41A4_210C4345D7C1_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E884FD9_25D5_937D_41A4_210C4345D7C1_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E884FD9_25D5_937D_41A4_210C4345D7C1_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E884FD9_25D5_937D_41A4_210C4345D7C1_0/d/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E884FD9_25D5_937D_41A4_210C4345D7C1_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E884FD9_25D5_937D_41A4_210C4345D7C1_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E884FD9_25D5_937D_41A4_210C4345D7C1_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E884FD9_25D5_937D_41A4_210C4345D7C1_0/l/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E884FD9_25D5_937D_41A4_210C4345D7C1_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E884FD9_25D5_937D_41A4_210C4345D7C1_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E884FD9_25D5_937D_41A4_210C4345D7C1_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2E884FD9_25D5_937D_41A4_210C4345D7C1_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_33C02618_25D4_B4FB_4198_B959799E6AF4",
  "this.overlay_3399AEAD_25D4_95D5_41BD_447E4FE44355",
  "this.overlay_33605DCD_25D4_9754_41C2_3C3C6A1F46E3"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 180,
  "pitch": -2.2
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_7C40F3FF_5E34_8974_41D3_DA4C10F1CD23",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_2E85F8E5_25D4_FD54_41B6_97ED709A00E2_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2E844C45_25D4_B555_41B1_B9826A694330"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2E8A06F3_25D5_B54D_41B8_17A40A969F14"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_2E8534D9_25D5_757D_41B6_17C3D88A75EC",
 "thumbnailUrl": "media/panorama_2E8534D9_25D5_757D_41B6_17C3D88A75EC_t.jpg",
 "label": "Foto 7",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8534D9_25D5_757D_41B6_17C3D88A75EC_0/f/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8534D9_25D5_757D_41B6_17C3D88A75EC_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8534D9_25D5_757D_41B6_17C3D88A75EC_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8534D9_25D5_757D_41B6_17C3D88A75EC_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8534D9_25D5_757D_41B6_17C3D88A75EC_0/u/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8534D9_25D5_757D_41B6_17C3D88A75EC_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8534D9_25D5_757D_41B6_17C3D88A75EC_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8534D9_25D5_757D_41B6_17C3D88A75EC_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8534D9_25D5_757D_41B6_17C3D88A75EC_0/r/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8534D9_25D5_757D_41B6_17C3D88A75EC_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8534D9_25D5_757D_41B6_17C3D88A75EC_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8534D9_25D5_757D_41B6_17C3D88A75EC_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8534D9_25D5_757D_41B6_17C3D88A75EC_0/b/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8534D9_25D5_757D_41B6_17C3D88A75EC_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8534D9_25D5_757D_41B6_17C3D88A75EC_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8534D9_25D5_757D_41B6_17C3D88A75EC_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8534D9_25D5_757D_41B6_17C3D88A75EC_0/d/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8534D9_25D5_757D_41B6_17C3D88A75EC_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8534D9_25D5_757D_41B6_17C3D88A75EC_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8534D9_25D5_757D_41B6_17C3D88A75EC_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8534D9_25D5_757D_41B6_17C3D88A75EC_0/l/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8534D9_25D5_757D_41B6_17C3D88A75EC_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8534D9_25D5_757D_41B6_17C3D88A75EC_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8534D9_25D5_757D_41B6_17C3D88A75EC_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2E8534D9_25D5_757D_41B6_17C3D88A75EC_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3758564F_25FC_B554_41C0_7062B8319303",
  "this.overlay_37132193_25FB_6FCD_41BA_DCFE6D9C04FA"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_2E8A06F3_25D5_B54D_41B8_17A40A969F14_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -93.31,
  "pitch": 9.55
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_7D24F284_5E34_8B94_41C5_6C9C4B75CBF2",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 91.84,
  "pitch": -1.47
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_7CF8033D_5E34_8AF4_41D2_F174D71C7FC8",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -91.84,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_7CD0F304_5E34_8A94_41B8_1D5D731644FE",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 96.24,
  "pitch": 11.76
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_7CC8B2D4_5E34_8BB4_4194_B9C921BA4C2E",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_2E841131_25D4_ACCD_41B8_5A71351B8A03_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -180,
  "pitch": 0.73
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_7D158238_5E34_8AFE_41CF_605C9398159C",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -180,
  "pitch": -2.2
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_7D3FE2A2_5E34_8B8C_41C8_BA1F237F0D47",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_2E8BE095_25D4_ADF4_41A6_2EFA257EE3C9_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -180,
  "pitch": -2.2
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_7CA503B0_5E34_898D_41D7_ACDD2543FA30",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2E8534D9_25D5_757D_41B6_17C3D88A75EC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2E8A2838_25D4_9D3B_41AF_72DD7449D2A5"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_2E8A06F3_25D5_B54D_41B8_17A40A969F14",
 "thumbnailUrl": "media/panorama_2E8A06F3_25D5_B54D_41B8_17A40A969F14_t.jpg",
 "label": "Foto 11",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8A06F3_25D5_B54D_41B8_17A40A969F14_0/f/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8A06F3_25D5_B54D_41B8_17A40A969F14_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8A06F3_25D5_B54D_41B8_17A40A969F14_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8A06F3_25D5_B54D_41B8_17A40A969F14_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8A06F3_25D5_B54D_41B8_17A40A969F14_0/u/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8A06F3_25D5_B54D_41B8_17A40A969F14_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8A06F3_25D5_B54D_41B8_17A40A969F14_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8A06F3_25D5_B54D_41B8_17A40A969F14_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8A06F3_25D5_B54D_41B8_17A40A969F14_0/r/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8A06F3_25D5_B54D_41B8_17A40A969F14_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8A06F3_25D5_B54D_41B8_17A40A969F14_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8A06F3_25D5_B54D_41B8_17A40A969F14_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8A06F3_25D5_B54D_41B8_17A40A969F14_0/b/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8A06F3_25D5_B54D_41B8_17A40A969F14_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8A06F3_25D5_B54D_41B8_17A40A969F14_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8A06F3_25D5_B54D_41B8_17A40A969F14_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8A06F3_25D5_B54D_41B8_17A40A969F14_0/d/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8A06F3_25D5_B54D_41B8_17A40A969F14_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8A06F3_25D5_B54D_41B8_17A40A969F14_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8A06F3_25D5_B54D_41B8_17A40A969F14_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8A06F3_25D5_B54D_41B8_17A40A969F14_0/l/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8A06F3_25D5_B54D_41B8_17A40A969F14_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8A06F3_25D5_B54D_41B8_17A40A969F14_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8A06F3_25D5_B54D_41B8_17A40A969F14_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2E8A06F3_25D5_B54D_41B8_17A40A969F14_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_30514F04_25ED_B4CB_417F_798F71905F5C",
  "this.overlay_302538C9_25ED_FD5D_41AA_7C479F9964B5"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2E9A3B06_25DB_7CD7_41B1_06572092405D"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_28F4614B_25DB_AF5D_41BC_EBDC584FF9B4",
 "thumbnailUrl": "media/panorama_28F4614B_25DB_AF5D_41BC_EBDC584FF9B4_t.jpg",
 "label": "Foto 1",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_28F4614B_25DB_AF5D_41BC_EBDC584FF9B4_0/f/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_28F4614B_25DB_AF5D_41BC_EBDC584FF9B4_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_28F4614B_25DB_AF5D_41BC_EBDC584FF9B4_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_28F4614B_25DB_AF5D_41BC_EBDC584FF9B4_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_28F4614B_25DB_AF5D_41BC_EBDC584FF9B4_0/u/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_28F4614B_25DB_AF5D_41BC_EBDC584FF9B4_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_28F4614B_25DB_AF5D_41BC_EBDC584FF9B4_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_28F4614B_25DB_AF5D_41BC_EBDC584FF9B4_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_28F4614B_25DB_AF5D_41BC_EBDC584FF9B4_0/r/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_28F4614B_25DB_AF5D_41BC_EBDC584FF9B4_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_28F4614B_25DB_AF5D_41BC_EBDC584FF9B4_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_28F4614B_25DB_AF5D_41BC_EBDC584FF9B4_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_28F4614B_25DB_AF5D_41BC_EBDC584FF9B4_0/b/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_28F4614B_25DB_AF5D_41BC_EBDC584FF9B4_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_28F4614B_25DB_AF5D_41BC_EBDC584FF9B4_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_28F4614B_25DB_AF5D_41BC_EBDC584FF9B4_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_28F4614B_25DB_AF5D_41BC_EBDC584FF9B4_0/d/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_28F4614B_25DB_AF5D_41BC_EBDC584FF9B4_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_28F4614B_25DB_AF5D_41BC_EBDC584FF9B4_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_28F4614B_25DB_AF5D_41BC_EBDC584FF9B4_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_28F4614B_25DB_AF5D_41BC_EBDC584FF9B4_0/l/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_28F4614B_25DB_AF5D_41BC_EBDC584FF9B4_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_28F4614B_25DB_AF5D_41BC_EBDC584FF9B4_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_28F4614B_25DB_AF5D_41BC_EBDC584FF9B4_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_28F4614B_25DB_AF5D_41BC_EBDC584FF9B4_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_28077DC7_25F4_B754_419B_EF0CB7D44EDE"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2E8BB5E0_25D5_974B_41B9_BCF09EF56A82"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2E8BF37A_25D4_B33F_41B5_61E7D351E235"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_2E896D44_25D5_974B_41BC_77D74E9117F1",
 "thumbnailUrl": "media/panorama_2E896D44_25D5_974B_41BC_77D74E9117F1_t.jpg",
 "label": "Foto 8",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E896D44_25D5_974B_41BC_77D74E9117F1_0/f/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E896D44_25D5_974B_41BC_77D74E9117F1_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E896D44_25D5_974B_41BC_77D74E9117F1_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E896D44_25D5_974B_41BC_77D74E9117F1_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E896D44_25D5_974B_41BC_77D74E9117F1_0/u/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E896D44_25D5_974B_41BC_77D74E9117F1_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E896D44_25D5_974B_41BC_77D74E9117F1_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E896D44_25D5_974B_41BC_77D74E9117F1_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E896D44_25D5_974B_41BC_77D74E9117F1_0/r/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E896D44_25D5_974B_41BC_77D74E9117F1_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E896D44_25D5_974B_41BC_77D74E9117F1_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E896D44_25D5_974B_41BC_77D74E9117F1_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E896D44_25D5_974B_41BC_77D74E9117F1_0/b/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E896D44_25D5_974B_41BC_77D74E9117F1_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E896D44_25D5_974B_41BC_77D74E9117F1_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E896D44_25D5_974B_41BC_77D74E9117F1_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E896D44_25D5_974B_41BC_77D74E9117F1_0/d/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E896D44_25D5_974B_41BC_77D74E9117F1_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E896D44_25D5_974B_41BC_77D74E9117F1_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E896D44_25D5_974B_41BC_77D74E9117F1_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E896D44_25D5_974B_41BC_77D74E9117F1_0/l/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E896D44_25D5_974B_41BC_77D74E9117F1_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E896D44_25D5_974B_41BC_77D74E9117F1_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E896D44_25D5_974B_41BC_77D74E9117F1_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2E896D44_25D5_974B_41BC_77D74E9117F1_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3612A552_25F7_974F_4177_C9F8148B3CA8",
  "this.overlay_31C08E49_25F7_B55D_41B7_E34415177B06"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 93.31,
  "pitch": -5.88
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_7C8F4362_5E34_8A8C_41D4_F0AFC9DD00E4",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_2E8A1B64_25D4_934B_41AB_BC932A14C204_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -83.76,
  "pitch": 11.02
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_7C963395_5E34_89B7_41D7_89F889E33EC0",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_28F4614B_25DB_AF5D_41BC_EBDC584FF9B4_camera",
 "displayMovements": [
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 1000,
   "easing": "linear"
  },
  {
   "targetPitch": 0,
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 3000,
   "targetStereographicFactor": 0,
   "easing": "cubic_in_out"
  }
 ],
 "automaticZoomSpeed": 10,
 "displayOriginPosition": {
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "yaw": 0,
  "stereographicFactor": 1,
  "pitch": -90
 }
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 77.14,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_7D110250_5E34_8A8C_41C4_B49A1F3FAB2D",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2E8AA3A0_25D4_93CB_41B7_D8ED54B2D7DF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2E8BF37A_25D4_B33F_41B5_61E7D351E235"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_2E8A1B64_25D4_934B_41AB_BC932A14C204",
 "thumbnailUrl": "media/panorama_2E8A1B64_25D4_934B_41AB_BC932A14C204_t.jpg",
 "label": "Foto 4",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8A1B64_25D4_934B_41AB_BC932A14C204_0/f/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8A1B64_25D4_934B_41AB_BC932A14C204_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8A1B64_25D4_934B_41AB_BC932A14C204_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8A1B64_25D4_934B_41AB_BC932A14C204_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8A1B64_25D4_934B_41AB_BC932A14C204_0/u/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8A1B64_25D4_934B_41AB_BC932A14C204_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8A1B64_25D4_934B_41AB_BC932A14C204_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8A1B64_25D4_934B_41AB_BC932A14C204_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8A1B64_25D4_934B_41AB_BC932A14C204_0/r/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8A1B64_25D4_934B_41AB_BC932A14C204_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8A1B64_25D4_934B_41AB_BC932A14C204_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8A1B64_25D4_934B_41AB_BC932A14C204_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8A1B64_25D4_934B_41AB_BC932A14C204_0/b/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8A1B64_25D4_934B_41AB_BC932A14C204_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8A1B64_25D4_934B_41AB_BC932A14C204_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8A1B64_25D4_934B_41AB_BC932A14C204_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8A1B64_25D4_934B_41AB_BC932A14C204_0/d/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8A1B64_25D4_934B_41AB_BC932A14C204_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8A1B64_25D4_934B_41AB_BC932A14C204_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8A1B64_25D4_934B_41AB_BC932A14C204_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8A1B64_25D4_934B_41AB_BC932A14C204_0/l/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8A1B64_25D4_934B_41AB_BC932A14C204_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8A1B64_25D4_934B_41AB_BC932A14C204_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8A1B64_25D4_934B_41AB_BC932A14C204_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2E8A1B64_25D4_934B_41AB_BC932A14C204_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_35B1B96F_25FC_9F55_41BC_DFE446BB1885",
  "this.overlay_3579F53D_25FC_9735_4190_2D511F372F5F"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2E884FD9_25D5_937D_41A4_210C4345D7C1"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2E85F8E5_25D4_FD54_41B6_97ED709A00E2"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_2E8BE095_25D4_ADF4_41A6_2EFA257EE3C9",
 "thumbnailUrl": "media/panorama_2E8BE095_25D4_ADF4_41A6_2EFA257EE3C9_t.jpg",
 "label": "Foto 14",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8BE095_25D4_ADF4_41A6_2EFA257EE3C9_0/f/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8BE095_25D4_ADF4_41A6_2EFA257EE3C9_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8BE095_25D4_ADF4_41A6_2EFA257EE3C9_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8BE095_25D4_ADF4_41A6_2EFA257EE3C9_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8BE095_25D4_ADF4_41A6_2EFA257EE3C9_0/u/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8BE095_25D4_ADF4_41A6_2EFA257EE3C9_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8BE095_25D4_ADF4_41A6_2EFA257EE3C9_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8BE095_25D4_ADF4_41A6_2EFA257EE3C9_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8BE095_25D4_ADF4_41A6_2EFA257EE3C9_0/r/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8BE095_25D4_ADF4_41A6_2EFA257EE3C9_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8BE095_25D4_ADF4_41A6_2EFA257EE3C9_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8BE095_25D4_ADF4_41A6_2EFA257EE3C9_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8BE095_25D4_ADF4_41A6_2EFA257EE3C9_0/b/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8BE095_25D4_ADF4_41A6_2EFA257EE3C9_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8BE095_25D4_ADF4_41A6_2EFA257EE3C9_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8BE095_25D4_ADF4_41A6_2EFA257EE3C9_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8BE095_25D4_ADF4_41A6_2EFA257EE3C9_0/d/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8BE095_25D4_ADF4_41A6_2EFA257EE3C9_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8BE095_25D4_ADF4_41A6_2EFA257EE3C9_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8BE095_25D4_ADF4_41A6_2EFA257EE3C9_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8BE095_25D4_ADF4_41A6_2EFA257EE3C9_0/l/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8BE095_25D4_ADF4_41A6_2EFA257EE3C9_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8BE095_25D4_ADF4_41A6_2EFA257EE3C9_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8BE095_25D4_ADF4_41A6_2EFA257EE3C9_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2E8BE095_25D4_ADF4_41A6_2EFA257EE3C9_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3DF8E04C_25DC_ED5B_4178_32F18F7CB7F5",
  "this.overlay_3DCCD5BA_25DC_B73F_41A4_860E3C7437AB"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_2E8BB5E0_25D5_974B_41B9_BCF09EF56A82_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -180,
  "pitch": -6.61
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_7C78444E_5E34_8E94_41AE_DE538A366FE2",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_2E896D44_25D5_974B_41BC_77D74E9117F1_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2E8A06F3_25D5_B54D_41B8_17A40A969F14"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2E884FD9_25D5_937D_41A4_210C4345D7C1"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_2E8A2838_25D4_9D3B_41AF_72DD7449D2A5",
 "thumbnailUrl": "media/panorama_2E8A2838_25D4_9D3B_41AF_72DD7449D2A5_t.jpg",
 "label": "Foto 13",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8A2838_25D4_9D3B_41AF_72DD7449D2A5_0/f/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8A2838_25D4_9D3B_41AF_72DD7449D2A5_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8A2838_25D4_9D3B_41AF_72DD7449D2A5_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8A2838_25D4_9D3B_41AF_72DD7449D2A5_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8A2838_25D4_9D3B_41AF_72DD7449D2A5_0/u/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8A2838_25D4_9D3B_41AF_72DD7449D2A5_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8A2838_25D4_9D3B_41AF_72DD7449D2A5_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8A2838_25D4_9D3B_41AF_72DD7449D2A5_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8A2838_25D4_9D3B_41AF_72DD7449D2A5_0/r/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8A2838_25D4_9D3B_41AF_72DD7449D2A5_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8A2838_25D4_9D3B_41AF_72DD7449D2A5_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8A2838_25D4_9D3B_41AF_72DD7449D2A5_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8A2838_25D4_9D3B_41AF_72DD7449D2A5_0/b/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8A2838_25D4_9D3B_41AF_72DD7449D2A5_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8A2838_25D4_9D3B_41AF_72DD7449D2A5_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8A2838_25D4_9D3B_41AF_72DD7449D2A5_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8A2838_25D4_9D3B_41AF_72DD7449D2A5_0/d/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8A2838_25D4_9D3B_41AF_72DD7449D2A5_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8A2838_25D4_9D3B_41AF_72DD7449D2A5_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8A2838_25D4_9D3B_41AF_72DD7449D2A5_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8A2838_25D4_9D3B_41AF_72DD7449D2A5_0/l/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8A2838_25D4_9D3B_41AF_72DD7449D2A5_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8A2838_25D4_9D3B_41AF_72DD7449D2A5_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8A2838_25D4_9D3B_41AF_72DD7449D2A5_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2E8A2838_25D4_9D3B_41AF_72DD7449D2A5_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3283BFEF_25D5_9355_4190_C5196B220D29",
  "this.overlay_325F575D_25D4_9375_419B_FE1EBD981436"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2E8534D9_25D5_757D_41B6_17C3D88A75EC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2E8AA3A0_25D4_93CB_41B7_D8ED54B2D7DF"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_2E844C45_25D4_B555_41B1_B9826A694330",
 "thumbnailUrl": "media/panorama_2E844C45_25D4_B555_41B1_B9826A694330_t.jpg",
 "label": "Foto 6",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E844C45_25D4_B555_41B1_B9826A694330_0/f/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E844C45_25D4_B555_41B1_B9826A694330_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E844C45_25D4_B555_41B1_B9826A694330_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E844C45_25D4_B555_41B1_B9826A694330_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E844C45_25D4_B555_41B1_B9826A694330_0/u/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E844C45_25D4_B555_41B1_B9826A694330_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E844C45_25D4_B555_41B1_B9826A694330_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E844C45_25D4_B555_41B1_B9826A694330_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E844C45_25D4_B555_41B1_B9826A694330_0/r/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E844C45_25D4_B555_41B1_B9826A694330_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E844C45_25D4_B555_41B1_B9826A694330_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E844C45_25D4_B555_41B1_B9826A694330_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E844C45_25D4_B555_41B1_B9826A694330_0/b/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E844C45_25D4_B555_41B1_B9826A694330_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E844C45_25D4_B555_41B1_B9826A694330_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E844C45_25D4_B555_41B1_B9826A694330_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E844C45_25D4_B555_41B1_B9826A694330_0/d/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E844C45_25D4_B555_41B1_B9826A694330_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E844C45_25D4_B555_41B1_B9826A694330_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E844C45_25D4_B555_41B1_B9826A694330_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E844C45_25D4_B555_41B1_B9826A694330_0/l/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E844C45_25D4_B555_41B1_B9826A694330_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E844C45_25D4_B555_41B1_B9826A694330_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E844C45_25D4_B555_41B1_B9826A694330_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2E844C45_25D4_B555_41B1_B9826A694330_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_340DFD32_25FD_B4CF_41BA_19F1BA06ADF1",
  "this.overlay_37C8AA87_25FD_FDD5_41A7_34C8D1CA9C3D"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2E8BB5E0_25D5_974B_41B9_BCF09EF56A82"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2E8A06F3_25D5_B54D_41B8_17A40A969F14"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_2E8ABE95_25D5_F5F5_4169_3683D1301C56",
 "thumbnailUrl": "media/panorama_2E8ABE95_25D5_F5F5_4169_3683D1301C56_t.jpg",
 "label": "Foto 10",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8ABE95_25D5_F5F5_4169_3683D1301C56_0/f/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8ABE95_25D5_F5F5_4169_3683D1301C56_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8ABE95_25D5_F5F5_4169_3683D1301C56_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8ABE95_25D5_F5F5_4169_3683D1301C56_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8ABE95_25D5_F5F5_4169_3683D1301C56_0/u/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8ABE95_25D5_F5F5_4169_3683D1301C56_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8ABE95_25D5_F5F5_4169_3683D1301C56_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8ABE95_25D5_F5F5_4169_3683D1301C56_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8ABE95_25D5_F5F5_4169_3683D1301C56_0/r/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8ABE95_25D5_F5F5_4169_3683D1301C56_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8ABE95_25D5_F5F5_4169_3683D1301C56_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8ABE95_25D5_F5F5_4169_3683D1301C56_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8ABE95_25D5_F5F5_4169_3683D1301C56_0/b/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8ABE95_25D5_F5F5_4169_3683D1301C56_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8ABE95_25D5_F5F5_4169_3683D1301C56_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8ABE95_25D5_F5F5_4169_3683D1301C56_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8ABE95_25D5_F5F5_4169_3683D1301C56_0/d/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8ABE95_25D5_F5F5_4169_3683D1301C56_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8ABE95_25D5_F5F5_4169_3683D1301C56_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8ABE95_25D5_F5F5_4169_3683D1301C56_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8ABE95_25D5_F5F5_4169_3683D1301C56_0/l/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8ABE95_25D5_F5F5_4169_3683D1301C56_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8ABE95_25D5_F5F5_4169_3683D1301C56_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8ABE95_25D5_F5F5_4169_3683D1301C56_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2E8ABE95_25D5_F5F5_4169_3683D1301C56_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_30FA1B0A_25EF_BCDF_41BB_EC21923689EB",
  "this.overlay_30CDA334_25EF_6CCB_41B1_43AEDD2A877D"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2E896D44_25D5_974B_41BC_77D74E9117F1"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2E8ABE95_25D5_F5F5_4169_3683D1301C56"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_2E8BB5E0_25D5_974B_41B9_BCF09EF56A82",
 "thumbnailUrl": "media/panorama_2E8BB5E0_25D5_974B_41B9_BCF09EF56A82_t.jpg",
 "label": "Foto 9",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8BB5E0_25D5_974B_41B9_BCF09EF56A82_0/f/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8BB5E0_25D5_974B_41B9_BCF09EF56A82_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8BB5E0_25D5_974B_41B9_BCF09EF56A82_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8BB5E0_25D5_974B_41B9_BCF09EF56A82_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8BB5E0_25D5_974B_41B9_BCF09EF56A82_0/u/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8BB5E0_25D5_974B_41B9_BCF09EF56A82_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8BB5E0_25D5_974B_41B9_BCF09EF56A82_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8BB5E0_25D5_974B_41B9_BCF09EF56A82_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8BB5E0_25D5_974B_41B9_BCF09EF56A82_0/r/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8BB5E0_25D5_974B_41B9_BCF09EF56A82_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8BB5E0_25D5_974B_41B9_BCF09EF56A82_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8BB5E0_25D5_974B_41B9_BCF09EF56A82_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8BB5E0_25D5_974B_41B9_BCF09EF56A82_0/b/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8BB5E0_25D5_974B_41B9_BCF09EF56A82_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8BB5E0_25D5_974B_41B9_BCF09EF56A82_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8BB5E0_25D5_974B_41B9_BCF09EF56A82_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8BB5E0_25D5_974B_41B9_BCF09EF56A82_0/d/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8BB5E0_25D5_974B_41B9_BCF09EF56A82_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8BB5E0_25D5_974B_41B9_BCF09EF56A82_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8BB5E0_25D5_974B_41B9_BCF09EF56A82_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8BB5E0_25D5_974B_41B9_BCF09EF56A82_0/l/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8BB5E0_25D5_974B_41B9_BCF09EF56A82_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8BB5E0_25D5_974B_41B9_BCF09EF56A82_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8BB5E0_25D5_974B_41B9_BCF09EF56A82_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2E8BB5E0_25D5_974B_41B9_BCF09EF56A82_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_30CD10F8_25ED_AD3B_41A3_EDF89DBD4976",
  "this.overlay_30825B51_25ED_734D_419B_85AA7F4D97F5"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_2E8BF37A_25D4_B33F_41B5_61E7D351E235_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2E85F8E5_25D4_FD54_41B6_97ED709A00E2"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_2E841131_25D4_ACCD_41B8_5A71351B8A03",
 "thumbnailUrl": "media/panorama_2E841131_25D4_ACCD_41B8_5A71351B8A03_t.jpg",
 "label": "Foto 16",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E841131_25D4_ACCD_41B8_5A71351B8A03_0/f/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E841131_25D4_ACCD_41B8_5A71351B8A03_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E841131_25D4_ACCD_41B8_5A71351B8A03_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E841131_25D4_ACCD_41B8_5A71351B8A03_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E841131_25D4_ACCD_41B8_5A71351B8A03_0/u/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E841131_25D4_ACCD_41B8_5A71351B8A03_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E841131_25D4_ACCD_41B8_5A71351B8A03_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E841131_25D4_ACCD_41B8_5A71351B8A03_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E841131_25D4_ACCD_41B8_5A71351B8A03_0/r/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E841131_25D4_ACCD_41B8_5A71351B8A03_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E841131_25D4_ACCD_41B8_5A71351B8A03_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E841131_25D4_ACCD_41B8_5A71351B8A03_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E841131_25D4_ACCD_41B8_5A71351B8A03_0/b/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E841131_25D4_ACCD_41B8_5A71351B8A03_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E841131_25D4_ACCD_41B8_5A71351B8A03_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E841131_25D4_ACCD_41B8_5A71351B8A03_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E841131_25D4_ACCD_41B8_5A71351B8A03_0/d/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E841131_25D4_ACCD_41B8_5A71351B8A03_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E841131_25D4_ACCD_41B8_5A71351B8A03_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E841131_25D4_ACCD_41B8_5A71351B8A03_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E841131_25D4_ACCD_41B8_5A71351B8A03_0/l/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E841131_25D4_ACCD_41B8_5A71351B8A03_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E841131_25D4_ACCD_41B8_5A71351B8A03_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E841131_25D4_ACCD_41B8_5A71351B8A03_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2E841131_25D4_ACCD_41B8_5A71351B8A03_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_3C3F588F_25DD_BDD5_41B6_99F2F51FEECF"
 ]
},
{
 "class": "PanoramaPlayer",
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "mouseControlMode": "drag_rotation"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_2E844C45_25D4_B555_41B1_B9826A694330_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 92.57,
  "pitch": 2.94
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_7CB923CB_5E34_899C_41D7_88D8D09CEE28",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_2E8ABE95_25D5_F5F5_4169_3683D1301C56_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_2E884FD9_25D5_937D_41A4_210C4345D7C1_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -96.98,
  "pitch": -3.67
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_7C57441D_5E34_8EB4_41BC_E33219B28F0D",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2E8BF37A_25D4_B33F_41B5_61E7D351E235"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_28F4614B_25DB_AF5D_41BC_EBDC584FF9B4"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_2E9A3B06_25DB_7CD7_41B1_06572092405D",
 "thumbnailUrl": "media/panorama_2E9A3B06_25DB_7CD7_41B1_06572092405D_t.jpg",
 "label": "Foto 2",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E9A3B06_25DB_7CD7_41B1_06572092405D_0/f/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E9A3B06_25DB_7CD7_41B1_06572092405D_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E9A3B06_25DB_7CD7_41B1_06572092405D_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E9A3B06_25DB_7CD7_41B1_06572092405D_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E9A3B06_25DB_7CD7_41B1_06572092405D_0/u/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E9A3B06_25DB_7CD7_41B1_06572092405D_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E9A3B06_25DB_7CD7_41B1_06572092405D_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E9A3B06_25DB_7CD7_41B1_06572092405D_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E9A3B06_25DB_7CD7_41B1_06572092405D_0/r/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E9A3B06_25DB_7CD7_41B1_06572092405D_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E9A3B06_25DB_7CD7_41B1_06572092405D_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E9A3B06_25DB_7CD7_41B1_06572092405D_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E9A3B06_25DB_7CD7_41B1_06572092405D_0/b/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E9A3B06_25DB_7CD7_41B1_06572092405D_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E9A3B06_25DB_7CD7_41B1_06572092405D_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E9A3B06_25DB_7CD7_41B1_06572092405D_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E9A3B06_25DB_7CD7_41B1_06572092405D_0/d/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E9A3B06_25DB_7CD7_41B1_06572092405D_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E9A3B06_25DB_7CD7_41B1_06572092405D_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E9A3B06_25DB_7CD7_41B1_06572092405D_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E9A3B06_25DB_7CD7_41B1_06572092405D_0/l/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E9A3B06_25DB_7CD7_41B1_06572092405D_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E9A3B06_25DB_7CD7_41B1_06572092405D_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E9A3B06_25DB_7CD7_41B1_06572092405D_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2E9A3B06_25DB_7CD7_41B1_06572092405D_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_2815C020_25F4_ACCB_4195_BCFADCA814F6",
  "this.overlay_2B9DAF9F_25F7_73F5_41B0_2AA1CE287786"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_2E8A2838_25D4_9D3B_41AF_72DD7449D2A5_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2E844C45_25D4_B555_41B1_B9826A694330"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2E8A1B64_25D4_934B_41AB_BC932A14C204"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_2E8AA3A0_25D4_93CB_41B7_D8ED54B2D7DF",
 "thumbnailUrl": "media/panorama_2E8AA3A0_25D4_93CB_41B7_D8ED54B2D7DF_t.jpg",
 "label": "Foto 5",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8AA3A0_25D4_93CB_41B7_D8ED54B2D7DF_0/f/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8AA3A0_25D4_93CB_41B7_D8ED54B2D7DF_0/f/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8AA3A0_25D4_93CB_41B7_D8ED54B2D7DF_0/f/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8AA3A0_25D4_93CB_41B7_D8ED54B2D7DF_0/f/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8AA3A0_25D4_93CB_41B7_D8ED54B2D7DF_0/u/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8AA3A0_25D4_93CB_41B7_D8ED54B2D7DF_0/u/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8AA3A0_25D4_93CB_41B7_D8ED54B2D7DF_0/u/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8AA3A0_25D4_93CB_41B7_D8ED54B2D7DF_0/u/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8AA3A0_25D4_93CB_41B7_D8ED54B2D7DF_0/r/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8AA3A0_25D4_93CB_41B7_D8ED54B2D7DF_0/r/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8AA3A0_25D4_93CB_41B7_D8ED54B2D7DF_0/r/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8AA3A0_25D4_93CB_41B7_D8ED54B2D7DF_0/r/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8AA3A0_25D4_93CB_41B7_D8ED54B2D7DF_0/b/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8AA3A0_25D4_93CB_41B7_D8ED54B2D7DF_0/b/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8AA3A0_25D4_93CB_41B7_D8ED54B2D7DF_0/b/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8AA3A0_25D4_93CB_41B7_D8ED54B2D7DF_0/b/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8AA3A0_25D4_93CB_41B7_D8ED54B2D7DF_0/d/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8AA3A0_25D4_93CB_41B7_D8ED54B2D7DF_0/d/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8AA3A0_25D4_93CB_41B7_D8ED54B2D7DF_0/d/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8AA3A0_25D4_93CB_41B7_D8ED54B2D7DF_0/d/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8AA3A0_25D4_93CB_41B7_D8ED54B2D7DF_0/l/0/{row}_{column}.jpg",
      "width": 2560,
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_2E8AA3A0_25D4_93CB_41B7_D8ED54B2D7DF_0/l/1/{row}_{column}.jpg",
      "width": 1536,
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_2E8AA3A0_25D4_93CB_41B7_D8ED54B2D7DF_0/l/2/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_2E8AA3A0_25D4_93CB_41B7_D8ED54B2D7DF_0/l/3/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2E8AA3A0_25D4_93CB_41B7_D8ED54B2D7DF_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_34F2F225_25FD_ACD5_41A2_970D9BAA3BE1",
  "this.overlay_34BF4C23_25FD_94CD_41B8_C18AB30BD10A"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_2E8AA3A0_25D4_93CB_41B7_D8ED54B2D7DF_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 176.33,
  "pitch": 1.47
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_7D31C2B9_5E34_8BFC_41D7_85BC1986FF71",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_2E9A3B06_25DB_7CD7_41B1_06572092405D_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -180,
  "pitch": 0.73
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_7D2EE26B_5E34_8A9C_419C_03BEEE3D325B",
 "automaticZoomSpeed": 10
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "MainViewer",
 "left": 0,
 "toolTipOpacity": 0.5,
 "minWidth": 100,
 "toolTipFontSize": 13,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "toolTipShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "paddingRight": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderRadius": 0,
 "shadow": false,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "class": "ViewerArea",
 "paddingLeft": 0,
 "minHeight": 50,
 "playbackBarHeadShadow": true,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressBarBackgroundColorDirection": "vertical",
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "progressBottom": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 10,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 7,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 5,
 "data": {
  "name": "Main Viewer"
 },
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0
},
{
 "layout": "absolute",
 "children": [
  "this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
  "this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36"
 ],
 "class": "Container",
 "id": "Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
 "left": "0%",
 "paddingLeft": 0,
 "width": 300,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 0,
 "data": {
  "name": "--- LEFT PANEL"
 },
 "propagateClick": false,
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "class": "Container",
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "paddingLeft": 0,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarMargin": 2,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "--INFO photo"
 },
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "class": "Container",
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "paddingLeft": 0,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarMargin": 2,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "class": "Container",
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "paddingLeft": 0,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarMargin": 2,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "--LOCATION"
 },
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "class": "Container",
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "paddingLeft": 0,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarMargin": 2,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "--FLOORPLAN"
 },
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "class": "Container",
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "paddingLeft": 0,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarMargin": 2,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "--PHOTOALBUM"
 },
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "class": "Container",
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "paddingLeft": 0,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "right": "0%",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarMargin": 2,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "--REALTOR"
 },
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 28.41,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -36.84,
   "yaw": 0.97,
   "image": "this.AnimatedImageResource_3D770D41_262B_974D_41B2_058C312A6DDC",
   "distance": 100
  }
 ],
 "id": "overlay_3CF911B3_25DF_6FCD_4189_C1D1BF34D5C1",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 28.41,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E85F8E5_25D4_FD54_41B6_97ED709A00E2_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -36.84
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E841131_25D4_ACCD_41B8_5A71351B8A03, this.camera_7CD0F304_5E34_8A94_41B8_1D5D731644FE); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 29.15,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -34.78,
   "yaw": -91.35,
   "image": "this.AnimatedImageResource_3D777D42_262B_974F_41C0_4FF88E882D93",
   "distance": 100
  }
 ],
 "id": "overlay_3FFC3C21_25DC_B4CD_41A6_57FD50A6AA24",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 29.15,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -91.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E85F8E5_25D4_FD54_41B6_97ED709A00E2_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -34.78
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E8A1B64_25D4_934B_41AB_BC932A14C204, this.camera_7C963395_5E34_89B7_41D7_89F889E33EC0); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 26.67,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -41.3,
   "yaw": -88.26,
   "image": "this.AnimatedImageResource_3D6FCD30_262B_94CB_419F_44F9C80C90BC",
   "distance": 100
  }
 ],
 "id": "overlay_2B1CE152_25F5_6F4F_41BE_D3F8D35B2D37",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 26.67,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -88.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8BF37A_25D4_B33F_41B5_61E7D351E235_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -41.3
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E896D44_25D5_974B_41BC_77D74E9117F1, this.camera_7C8F4362_5E34_8A8C_41D4_F0AFC9DD00E4); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 26.38,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -41.99,
   "yaw": 92.25,
   "image": "this.AnimatedImageResource_3D703D30_262B_94CB_41C2_2F9760738AD9",
   "distance": 100
  }
 ],
 "id": "overlay_2ABCE3C1_25F5_934D_41B3_2E3937641579",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 26.38,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 92.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8BF37A_25D4_B33F_41B5_61E7D351E235_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -41.99
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E9A3B06_25DB_7CD7_41B1_06572092405D, this.camera_7C9DB37D_5E34_8974_41D3_0492407D33CA); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 26.81,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -40.96,
   "yaw": -179.55,
   "image": "this.AnimatedImageResource_3D706D31_262B_94CD_41AA_A89E318343ED",
   "distance": 100
  }
 ],
 "id": "overlay_2A7D72D8_25F5_AD7B_41A0_7E89CAB85AFE",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 26.81,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8BF37A_25D4_B33F_41B5_61E7D351E235_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -40.96
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 28.15,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -37.53,
   "yaw": 4.4,
   "image": "this.AnimatedImageResource_3D749D3D_262B_9735_41C0_A44CAB3308A0",
   "distance": 100
  }
 ],
 "id": "overlay_33C02618_25D4_B4FB_4198_B959799E6AF4",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 28.15,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 4.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E884FD9_25D5_937D_41A4_210C4345D7C1_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -37.53
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E8ABE95_25D5_F5F5_4169_3683D1301C56, this.camera_7CDC62ED_5E34_8B94_41C3_9FB458077F98); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 26.67,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -41.3,
   "yaw": -89.29,
   "image": "this.AnimatedImageResource_3D74FD3E_262B_9737_4186_01AB3EBBBF2E",
   "distance": 100
  }
 ],
 "id": "overlay_3399AEAD_25D4_95D5_41BD_447E4FE44355",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 26.67,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -89.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E884FD9_25D5_937D_41A4_210C4345D7C1_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -41.3
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E8BE095_25D4_ADF4_41A6_2EFA257EE3C9, this.camera_7CC8B2D4_5E34_8BB4_4194_B9C921BA4C2E); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 27.76,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -38.56,
   "yaw": 93.28,
   "image": "this.AnimatedImageResource_3D755D3E_262B_9737_415F_7C3B4186F463",
   "distance": 100
  }
 ],
 "id": "overlay_33605DCD_25D4_9754_41C2_3C3C6A1F46E3",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 27.76,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 93.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E884FD9_25D5_937D_41A4_210C4345D7C1_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -38.56
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E8A06F3_25D5_B54D_41B8_17A40A969F14, this.camera_7CB923CB_5E34_899C_41D7_88D8D09CEE28); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 29.39,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -34.1,
   "yaw": 88.82,
   "image": "this.AnimatedImageResource_3D72DD36_262B_9737_41AA_A7A277D3B816",
   "distance": 100
  }
 ],
 "id": "overlay_3758564F_25FC_B554_41C0_7062B8319303",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 29.39,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 88.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8534D9_25D5_757D_41B6_17C3D88A75EC_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -34.1
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E844C45_25D4_B555_41B1_B9826A694330, this.camera_7CA503B0_5E34_898D_41D7_ACDD2543FA30); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 28.53,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -36.5,
   "yaw": -179.55,
   "image": "this.AnimatedImageResource_3D730D36_262B_9734_41AA_353FEA263967",
   "distance": 100
  }
 ],
 "id": "overlay_37132193_25FB_6FCD_41BA_DCFE6D9C04FA",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 28.53,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8534D9_25D5_757D_41B6_17C3D88A75EC_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -36.5
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E8534D9_25D5_757D_41B6_17C3D88A75EC, this.camera_7C57441D_5E34_8EB4_41BC_E33219B28F0D); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 28.53,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -36.5,
   "yaw": -89.98,
   "image": "this.AnimatedImageResource_3D73ED3C_262B_973B_41C0_D146F2070C34",
   "distance": 100
  }
 ],
 "id": "overlay_30514F04_25ED_B4CB_417F_798F71905F5C",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 28.53,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -89.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8A06F3_25D5_B54D_41B8_17A40A969F14_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -36.5
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E8A2838_25D4_9D3B_41AF_72DD7449D2A5, this.camera_7C64B435_5E34_8EF4_41C9_33B0FB7177F8); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 27.35,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -39.59,
   "yaw": 91.22,
   "image": "this.AnimatedImageResource_3D742D3C_262B_973B_41B1_35F1F3B51C8C",
   "distance": 100
  }
 ],
 "id": "overlay_302538C9_25ED_FD5D_41AA_7C479F9964B5",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 27.35,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 91.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8A06F3_25D5_B54D_41B8_17A40A969F14_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -39.59
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 29.15,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -34.78,
   "yaw": -19.97,
   "image": "this.AnimatedImageResource_3D6DAD2B_262B_94DD_41C0_06AC3457BD02",
   "distance": 100
  }
 ],
 "id": "overlay_28077DC7_25F4_B754_419B_EF0CB7D44EDE",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 29.15,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -19.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_28F4614B_25DB_AF5D_41BC_EBDC584FF9B4_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -34.78
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E8BF37A_25D4_B33F_41B5_61E7D351E235, this.camera_7C4C13E4_5E34_8994_41D8_3ADBE91B9942); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 28.91,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -35.47,
   "yaw": -89.98,
   "image": "this.AnimatedImageResource_3D736D37_262B_9735_419D_1ABF2F2769E2",
   "distance": 100
  }
 ],
 "id": "overlay_3612A552_25F7_974F_4177_C9F8148B3CA8",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 28.91,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -89.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E896D44_25D5_974B_41BC_77D74E9117F1_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -35.47
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 28.15,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -37.53,
   "yaw": 2.68,
   "image": "this.AnimatedImageResource_3D73BD38_262B_973B_41B8_DE2A395E9B3D",
   "distance": 100
  }
 ],
 "id": "overlay_31C08E49_25F7_B55D_41B7_E34415177B06",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 28.15,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E896D44_25D5_974B_41BC_77D74E9117F1_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -37.53
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 29.63,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -33.41,
   "yaw": 3.02,
   "image": "this.AnimatedImageResource_3D70DD32_262B_94CF_4189_9667A6BA1C3E",
   "distance": 100
  }
 ],
 "id": "overlay_35B1B96F_25FC_9F55_41BC_DFE446BB1885",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 29.63,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 3.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8A1B64_25D4_934B_41AB_BC932A14C204_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -33.41
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E8BF37A_25D4_B33F_41B5_61E7D351E235, this.camera_7CF8033D_5E34_8AF4_41D2_F174D71C7FC8); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 29.51,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -33.75,
   "yaw": 93.63,
   "image": "this.AnimatedImageResource_3D710D32_262B_94CF_41B6_310346F86B39",
   "distance": 100
  }
 ],
 "id": "overlay_3579F53D_25FC_9735_4190_2D511F372F5F",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 29.51,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 93.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8A1B64_25D4_934B_41AB_BC932A14C204_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -33.75
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E884FD9_25D5_937D_41A4_210C4345D7C1, this.camera_7D1E821E_5E34_8AB5_41C1_70899FF4FD00); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 28.15,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -37.53,
   "yaw": -84.83,
   "image": "this.AnimatedImageResource_3D767D40_262B_974B_419B_4B10D5738606",
   "distance": 100
  }
 ],
 "id": "overlay_3DF8E04C_25DC_ED5B_4178_32F18F7CB7F5",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 28.15,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -84.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8BE095_25D4_ADF4_41A6_2EFA257EE3C9_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -37.53
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E85F8E5_25D4_FD54_41B6_97ED709A00E2, this.camera_7D158238_5E34_8AFE_41CF_605C9398159C); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 28.78,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -35.81,
   "yaw": -179.55,
   "image": "this.AnimatedImageResource_3D76AD41_262B_974D_41C0_3B86A8531224",
   "distance": 100
  }
 ],
 "id": "overlay_3DCCD5BA_25DC_B73F_41A4_860E3C7437AB",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 28.78,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8BE095_25D4_ADF4_41A6_2EFA257EE3C9_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -35.81
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E8A06F3_25D5_B54D_41B8_17A40A969F14, this.camera_7D24F284_5E34_8B94_41C5_6C9C4B75CBF2); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 30.64,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -30.32,
   "yaw": -89.98,
   "image": "this.AnimatedImageResource_3D758D3F_262B_9735_414A_FF61192B9B6D",
   "distance": 100
  }
 ],
 "id": "overlay_3283BFEF_25D5_9355_4190_C5196B220D29",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 30.64,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -89.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8A2838_25D4_9D3B_41AF_72DD7449D2A5_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -30.32
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E884FD9_25D5_937D_41A4_210C4345D7C1, this.camera_7D3FE2A2_5E34_8B8C_41C8_BA1F237F0D47); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 29.15,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -34.78,
   "yaw": -179.57,
   "image": "this.AnimatedImageResource_3D75FD40_262B_974B_41A2_A7573F2E6BB9",
   "distance": 100
  }
 ],
 "id": "overlay_325F575D_25D4_9375_419B_FE1EBD981436",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 29.15,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8A2838_25D4_9D3B_41AF_72DD7449D2A5_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -34.78
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 27.76,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -38.56,
   "yaw": 9.89,
   "image": "this.AnimatedImageResource_3D720D34_262B_94CB_41A1_AAB53884D5BC",
   "distance": 100
  }
 ],
 "id": "overlay_340DFD32_25FD_B4CF_41BA_19F1BA06ADF1",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 27.76,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 9.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E844C45_25D4_B555_41B1_B9826A694330_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -38.56
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E8AA3A0_25D4_93CB_41B7_D8ED54B2D7DF, this.camera_7C40F3FF_5E34_8974_41D3_DA4C10F1CD23); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 27.89,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -38.21,
   "yaw": -179.55,
   "image": "this.AnimatedImageResource_3D724D35_262B_9735_41C2_3D13F16FBCFA",
   "distance": 100
  }
 ],
 "id": "overlay_37C8AA87_25FD_FDD5_41A7_34C8D1CA9C3D",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 27.89,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E844C45_25D4_B555_41B1_B9826A694330_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -38.21
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 29.75,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -33.07,
   "yaw": 6.11,
   "image": "this.AnimatedImageResource_3D735D3B_262B_973D_41BA_C21E3BF8A277",
   "distance": 100
  }
 ],
 "id": "overlay_30FA1B0A_25EF_BCDF_41BB_EC21923689EB",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 29.75,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 6.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8ABE95_25D5_F5F5_4169_3683D1301C56_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -33.07
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E8BB5E0_25D5_974B_41B9_BCF09EF56A82, this.camera_7C78444E_5E34_8E94_41AE_DE538A366FE2); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 28.66,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -36.15,
   "yaw": -179.55,
   "image": "this.AnimatedImageResource_3D739D3B_262B_973D_41BC_0EA2A94F8581",
   "distance": 100
  }
 ],
 "id": "overlay_30CDA334_25EF_6CCB_41B1_43AEDD2A877D",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 28.66,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8ABE95_25D5_F5F5_4169_3683D1301C56_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -36.15
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 29.39,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -34.1,
   "yaw": 4.4,
   "image": "this.AnimatedImageResource_3D741D39_262B_973D_41C1_009FC9343111",
   "distance": 100
  }
 ],
 "id": "overlay_30CD10F8_25ED_AD3B_41A3_EDF89DBD4976",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 29.39,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 4.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8BB5E0_25D5_974B_41B9_BCF09EF56A82_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -34.1
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E896D44_25D5_974B_41BC_77D74E9117F1, this.camera_7CE7F31B_5E34_8ABC_41B9_BC7DB5FB90D4); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 28.15,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -37.53,
   "yaw": -179.55,
   "image": "this.AnimatedImageResource_3D747D39_262B_973D_41A6_74C421893B73",
   "distance": 100
  }
 ],
 "id": "overlay_30825B51_25ED_734D_419B_85AA7F4D97F5",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 28.15,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8BB5E0_25D5_974B_41B9_BCF09EF56A82_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -37.53
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E85F8E5_25D4_FD54_41B6_97ED709A00E2, this.camera_7D110250_5E34_8A8C_41C4_B49A1F3FAB2D); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 28.91,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -35.47,
   "yaw": 87.1,
   "image": "this.AnimatedImageResource_3D77CD43_262B_974D_41B1_865F47473D81",
   "distance": 100
  }
 ],
 "id": "overlay_3C3F588F_25DD_BDD5_41B6_99F2F51FEECF",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 28.91,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 87.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E841131_25D4_ACCD_41B8_5A71351B8A03_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -35.47
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_28F4614B_25DB_AF5D_41BC_EBDC584FF9B4, this.camera_7D31C2B9_5E34_8BFC_41D7_85BC1986FF71); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 29.86,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -32.72,
   "yaw": 173.95,
   "image": "this.AnimatedImageResource_3D6F3D2D_262B_94D5_41B6_6140684A48DF",
   "distance": 100
  }
 ],
 "id": "overlay_2815C020_25F4_ACCB_4195_BCFADCA814F6",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 29.86,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 173.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E9A3B06_25DB_7CD7_41B1_06572092405D_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -32.72
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 27.35,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -39.59,
   "yaw": -3.84,
   "image": "this.AnimatedImageResource_3D6F6D2F_262B_94D5_41A1_F032129F3E67",
   "distance": 100
  }
 ],
 "id": "overlay_2B9DAF9F_25F7_73F5_41B0_2AA1CE287786",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 27.35,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -3.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E9A3B06_25DB_7CD7_41B1_06572092405D_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -39.59
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 30.42,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -31.01,
   "yaw": -0.41,
   "image": "this.AnimatedImageResource_3D717D33_262B_94CD_41B7_F7F17A9E7ACF",
   "distance": 100
  }
 ],
 "id": "overlay_34F2F225_25FD_ACD5_41A2_970D9BAA3BE1",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 30.42,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8AA3A0_25D4_93CB_41B7_D8ED54B2D7DF_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -31.01
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2E8A1B64_25D4_934B_41AB_BC932A14C204, this.camera_7D2EE26B_5E34_8A9C_419C_03BEEE3D325B); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 30.53,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -30.66,
   "yaw": -179.55,
   "image": "this.AnimatedImageResource_3D71DD34_262B_94CB_41BE_C98161044C58",
   "distance": 100
  }
 ],
 "id": "overlay_34BF4C23_25FD_94CD_41B8_C18AB30BD10A",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 30.53,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E8AA3A0_25D4_93CB_41B7_D8ED54B2D7DF_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -30.66
  }
 ]
},
{
 "layout": "absolute",
 "children": [
  "this.Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
  "this.IconButton_7FF185EF_706F_7FC6_41A5_21B418265412"
 ],
 "class": "Container",
 "id": "Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
 "left": "0%",
 "paddingLeft": 0,
 "width": 66,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 0,
 "data": {
  "name": "- COLLAPSE"
 },
 "visible": false,
 "propagateClick": true,
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "children": [
  "this.Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
  "this.Container_7DBCC382_7065_343F_41D5_9D3C36B5F479",
  "this.Image_7E11B9C7_5E2D_9994_418E_A3CA917C8E02"
 ],
 "class": "Container",
 "id": "Container_7DB20382_7065_343F_4186_6E0B0B3AFF36",
 "paddingLeft": 40,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "width": 300,
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 40,
 "shadow": false,
 "backgroundOpacity": 0.7,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarMargin": 2,
 "gap": 10,
 "paddingTop": 40,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 40,
 "data": {
  "name": "- EXPANDED"
 },
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ]
},
{
 "layout": "horizontal",
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "class": "Container",
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "paddingLeft": 0,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "shadowVerticalLength": 0,
 "scrollBarOpacity": 0.5,
 "top": "10%",
 "contentOpaque": false,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "paddingRight": 0,
 "shadow": true,
 "shadowHorizontalLength": 0,
 "verticalAlign": "top",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "layout": "vertical",
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "class": "Container",
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "paddingLeft": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "15%",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "right",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "top": "10%",
 "contentOpaque": false,
 "bottom": "80%",
 "paddingRight": 20,
 "shadow": false,
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "gap": 10,
 "paddingTop": 20,
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 },
 "propagateClick": false,
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "layout": "absolute",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "class": "Container",
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "paddingLeft": 0,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "center",
 "scrollBarVisible": "rollOver",
 "shadowVerticalLength": 0,
 "scrollBarOpacity": 0.5,
 "top": "10%",
 "contentOpaque": false,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "paddingRight": 0,
 "shadow": true,
 "shadowHorizontalLength": 0,
 "verticalAlign": "top",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "layout": "horizontal",
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "class": "Container",
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "paddingLeft": 0,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "shadowVerticalLength": 0,
 "scrollBarOpacity": 0.5,
 "top": "10%",
 "contentOpaque": false,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "paddingRight": 0,
 "shadow": true,
 "shadowHorizontalLength": 0,
 "verticalAlign": "top",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "layout": "vertical",
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "class": "Container",
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "paddingLeft": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "15%",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "right",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "top": "10%",
 "contentOpaque": false,
 "bottom": "80%",
 "paddingRight": 20,
 "shadow": false,
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "gap": 10,
 "paddingTop": 20,
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 },
 "propagateClick": false,
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "layout": "absolute",
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "class": "Container",
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "paddingLeft": 0,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "center",
 "scrollBarVisible": "rollOver",
 "shadowVerticalLength": 0,
 "scrollBarOpacity": 0.5,
 "top": "10%",
 "contentOpaque": false,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "paddingRight": 0,
 "shadow": true,
 "shadowHorizontalLength": 0,
 "verticalAlign": "top",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "layout": "vertical",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "class": "Container",
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "paddingLeft": 0,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "center",
 "scrollBarVisible": "rollOver",
 "shadowVerticalLength": 0,
 "scrollBarOpacity": 0.5,
 "top": "10%",
 "contentOpaque": false,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "paddingRight": 0,
 "shadow": true,
 "shadowHorizontalLength": 0,
 "verticalAlign": "top",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "layout": "horizontal",
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "class": "Container",
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "15%",
 "paddingLeft": 0,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "shadowVerticalLength": 0,
 "scrollBarOpacity": 0.5,
 "top": "10%",
 "contentOpaque": false,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "paddingRight": 0,
 "shadow": true,
 "shadowHorizontalLength": 0,
 "verticalAlign": "top",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "gap": 10,
 "shadowSpread": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "layout": "vertical",
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "class": "Container",
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "15%",
 "paddingLeft": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "15%",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "right",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "top": "10%",
 "contentOpaque": false,
 "bottom": "80%",
 "paddingRight": 20,
 "shadow": false,
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "gap": 10,
 "paddingTop": 20,
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 },
 "propagateClick": false,
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3D770D41_262B_974D_41B2_058C312A6DDC",
 "levels": [
  {
   "url": "media/panorama_2E85F8E5_25D4_FD54_41B6_97ED709A00E2_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3D777D42_262B_974F_41C0_4FF88E882D93",
 "levels": [
  {
   "url": "media/panorama_2E85F8E5_25D4_FD54_41B6_97ED709A00E2_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3D6FCD30_262B_94CB_419F_44F9C80C90BC",
 "levels": [
  {
   "url": "media/panorama_2E8BF37A_25D4_B33F_41B5_61E7D351E235_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3D703D30_262B_94CB_41C2_2F9760738AD9",
 "levels": [
  {
   "url": "media/panorama_2E8BF37A_25D4_B33F_41B5_61E7D351E235_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3D706D31_262B_94CD_41AA_A89E318343ED",
 "levels": [
  {
   "url": "media/panorama_2E8BF37A_25D4_B33F_41B5_61E7D351E235_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3D749D3D_262B_9735_41C0_A44CAB3308A0",
 "levels": [
  {
   "url": "media/panorama_2E884FD9_25D5_937D_41A4_210C4345D7C1_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3D74FD3E_262B_9737_4186_01AB3EBBBF2E",
 "levels": [
  {
   "url": "media/panorama_2E884FD9_25D5_937D_41A4_210C4345D7C1_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3D755D3E_262B_9737_415F_7C3B4186F463",
 "levels": [
  {
   "url": "media/panorama_2E884FD9_25D5_937D_41A4_210C4345D7C1_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3D72DD36_262B_9737_41AA_A7A277D3B816",
 "levels": [
  {
   "url": "media/panorama_2E8534D9_25D5_757D_41B6_17C3D88A75EC_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3D730D36_262B_9734_41AA_353FEA263967",
 "levels": [
  {
   "url": "media/panorama_2E8534D9_25D5_757D_41B6_17C3D88A75EC_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3D73ED3C_262B_973B_41C0_D146F2070C34",
 "levels": [
  {
   "url": "media/panorama_2E8A06F3_25D5_B54D_41B8_17A40A969F14_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3D742D3C_262B_973B_41B1_35F1F3B51C8C",
 "levels": [
  {
   "url": "media/panorama_2E8A06F3_25D5_B54D_41B8_17A40A969F14_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3D6DAD2B_262B_94DD_41C0_06AC3457BD02",
 "levels": [
  {
   "url": "media/panorama_28F4614B_25DB_AF5D_41BC_EBDC584FF9B4_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3D736D37_262B_9735_419D_1ABF2F2769E2",
 "levels": [
  {
   "url": "media/panorama_2E896D44_25D5_974B_41BC_77D74E9117F1_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3D73BD38_262B_973B_41B8_DE2A395E9B3D",
 "levels": [
  {
   "url": "media/panorama_2E896D44_25D5_974B_41BC_77D74E9117F1_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3D70DD32_262B_94CF_4189_9667A6BA1C3E",
 "levels": [
  {
   "url": "media/panorama_2E8A1B64_25D4_934B_41AB_BC932A14C204_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3D710D32_262B_94CF_41B6_310346F86B39",
 "levels": [
  {
   "url": "media/panorama_2E8A1B64_25D4_934B_41AB_BC932A14C204_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3D767D40_262B_974B_419B_4B10D5738606",
 "levels": [
  {
   "url": "media/panorama_2E8BE095_25D4_ADF4_41A6_2EFA257EE3C9_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3D76AD41_262B_974D_41C0_3B86A8531224",
 "levels": [
  {
   "url": "media/panorama_2E8BE095_25D4_ADF4_41A6_2EFA257EE3C9_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3D758D3F_262B_9735_414A_FF61192B9B6D",
 "levels": [
  {
   "url": "media/panorama_2E8A2838_25D4_9D3B_41AF_72DD7449D2A5_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3D75FD40_262B_974B_41A2_A7573F2E6BB9",
 "levels": [
  {
   "url": "media/panorama_2E8A2838_25D4_9D3B_41AF_72DD7449D2A5_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3D720D34_262B_94CB_41A1_AAB53884D5BC",
 "levels": [
  {
   "url": "media/panorama_2E844C45_25D4_B555_41B1_B9826A694330_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3D724D35_262B_9735_41C2_3D13F16FBCFA",
 "levels": [
  {
   "url": "media/panorama_2E844C45_25D4_B555_41B1_B9826A694330_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3D735D3B_262B_973D_41BA_C21E3BF8A277",
 "levels": [
  {
   "url": "media/panorama_2E8ABE95_25D5_F5F5_4169_3683D1301C56_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3D739D3B_262B_973D_41BC_0EA2A94F8581",
 "levels": [
  {
   "url": "media/panorama_2E8ABE95_25D5_F5F5_4169_3683D1301C56_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3D741D39_262B_973D_41C1_009FC9343111",
 "levels": [
  {
   "url": "media/panorama_2E8BB5E0_25D5_974B_41B9_BCF09EF56A82_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3D747D39_262B_973D_41A6_74C421893B73",
 "levels": [
  {
   "url": "media/panorama_2E8BB5E0_25D5_974B_41B9_BCF09EF56A82_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3D77CD43_262B_974D_41B1_865F47473D81",
 "levels": [
  {
   "url": "media/panorama_2E841131_25D4_ACCD_41B8_5A71351B8A03_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3D6F3D2D_262B_94D5_41B6_6140684A48DF",
 "levels": [
  {
   "url": "media/panorama_2E9A3B06_25DB_7CD7_41B1_06572092405D_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3D6F6D2F_262B_94D5_41A1_F032129F3E67",
 "levels": [
  {
   "url": "media/panorama_2E9A3B06_25DB_7CD7_41B1_06572092405D_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3D717D33_262B_94CD_41B7_F7F17A9E7ACF",
 "levels": [
  {
   "url": "media/panorama_2E8AA3A0_25D4_93CB_41B7_D8ED54B2D7DF_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_3D71DD34_262B_94CB_41BE_C98161044C58",
 "levels": [
  {
   "url": "media/panorama_2E8AA3A0_25D4_93CB_41B7_D8ED54B2D7DF_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "class": "Container",
 "id": "Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
 "left": "0%",
 "paddingLeft": 0,
 "width": 36,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 0.4,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarMargin": 2,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 0,
 "data": {
  "name": "Container black"
 },
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ]
},
{
 "transparencyActive": true,
 "maxWidth": 80,
 "class": "IconButton",
 "id": "IconButton_7FF185EF_706F_7FC6_41A5_21B418265412",
 "left": 10,
 "paddingLeft": 0,
 "width": 50,
 "minWidth": 1,
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412.png",
 "top": "40%",
 "bottom": "40%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "shadow": false,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412_rollover.png",
 "maxHeight": 80,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, true, 0, null, null, false)",
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton arrow"
 },
 "propagateClick": true,
 "cursor": "hand"
},
{
 "layout": "vertical",
 "children": [
  "this.Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
  "this.Button_7DB31382_7065_343F_41D6_641BBE1B2562",
  "this.Container_7DB30382_7065_343F_416C_8610BCBA9F50",
  "this.Button_7DB33382_7065_343F_41B1_0B0F019C1828",
  "this.Container_7DB32382_7065_343F_419E_6594814C420F",
  "this.Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
  "this.Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
  "this.Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
  "this.Container_7DBC9382_7065_343F_41CC_ED357655BB95"
 ],
 "class": "Container",
 "id": "Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "right": "0%",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "middle",
 "top": "25%",
 "contentOpaque": false,
 "bottom": "25%",
 "paddingRight": 0,
 "width": "100%",
 "shadow": false,
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "gap": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "-Container buttons"
 },
 "propagateClick": true,
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "layout": "vertical",
 "children": [
  "this.Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
  "this.HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
  "this.IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4"
 ],
 "class": "Container",
 "id": "Container_7DBCC382_7065_343F_41D5_9D3C36B5F479",
 "paddingLeft": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "bottom",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "bottom": "0%",
 "paddingRight": 0,
 "width": "100%",
 "shadow": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "26.316%",
 "paddingBottom": 0,
 "data": {
  "name": "-Container footer"
 },
 "propagateClick": true,
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "class": "Image",
 "id": "Image_7E11B9C7_5E2D_9994_418E_A3CA917C8E02",
 "left": "0%",
 "paddingLeft": 0,
 "minWidth": 1,
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "center",
 "width": "100%",
 "url": "skin/Image_7E11B9C7_5E2D_9994_418E_A3CA917C8E02.jpg",
 "verticalAlign": "middle",
 "top": "0%",
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "maxHeight": 302,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "31.664%",
 "paddingBottom": 0,
 "data": {
  "name": "Image23997"
 },
 "propagateClick": false,
 "scaleMode": "fit_inside",
 "maxWidth": 316
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "class": "Container",
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "paddingLeft": 0,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "center",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "middle",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "width": "85%",
 "shadow": false,
 "backgroundOpacity": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000"
 ],
 "paddingBottom": 0,
 "data": {
  "name": "-left"
 },
 "height": "100%",
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ]
},
{
 "scrollBarWidth": 10,
 "layout": "vertical",
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "class": "Container",
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "paddingLeft": 50,
 "minWidth": 460,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 50,
 "width": "50%",
 "shadow": false,
 "backgroundOpacity": 1,
 "gap": 0,
 "paddingTop": 20,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 20,
 "data": {
  "name": "-right"
 },
 "height": "100%",
 "propagateClick": false,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "transparencyActive": false,
 "maxWidth": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "paddingLeft": 0,
 "class": "IconButton",
 "minWidth": 50,
 "minHeight": 50,
 "borderSize": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "verticalAlign": "middle",
 "width": "25%",
 "paddingRight": 0,
 "mode": "push",
 "shadow": false,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "maxHeight": 60,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "borderRadius": 0,
 "height": "75%",
 "paddingBottom": 0,
 "data": {
  "name": "X"
 },
 "propagateClick": false,
 "cursor": "hand"
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "class": "Container",
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 140,
 "paddingBottom": 0,
 "data": {
  "name": "header"
 },
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "itemMaxWidth": 1000,
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "itemLabelHorizontalAlign": "center",
 "itemMode": "normal",
 "scrollBarColor": "#04A3E1",
 "itemPaddingRight": 3,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemLabelFontFamily": "Oswald",
 "horizontalAlign": "center",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemThumbnailOpacity": 1,
 "itemMaxHeight": 1000,
 "itemBorderRadius": 0,
 "width": "100%",
 "verticalAlign": "middle",
 "paddingRight": 70,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemOpacity": 1,
 "shadow": false,
 "selectedItemLabelFontColor": "#04A3E1",
 "itemLabelPosition": "bottom",
 "itemLabelFontStyle": "italic",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "backgroundOpacity": 0,
 "height": "92%",
 "itemHorizontalAlign": "center",
 "itemBackgroundOpacity": 0,
 "itemPaddingLeft": 3,
 "itemThumbnailBorderRadius": 0,
 "itemBackgroundColor": [],
 "propagateClick": false,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemWidth": 220,
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "class": "ThumbnailGrid",
 "paddingLeft": 70,
 "minHeight": 1,
 "itemMinHeight": 50,
 "borderSize": 0,
 "itemLabelTextDecoration": "none",
 "rollOverItemLabelFontColor": "#04A3E1",
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemLabelFontWeight": "normal",
 "selectedItemThumbnailShadow": true,
 "selectedItemLabelFontWeight": "bold",
 "rollOverItemThumbnailShadow": true,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "scrollBarMargin": 2,
 "bottom": -0.2,
 "itemLabelFontSize": 16,
 "itemVerticalAlign": "top",
 "itemMinWidth": 50,
 "itemThumbnailScaleMode": "fit_outside",
 "itemHeight": 160,
 "gap": 26,
 "itemThumbnailHeight": 125,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "paddingTop": 10,
 "itemLabelFontColor": "#666666",
 "itemBackgroundColorDirection": "vertical",
 "borderRadius": 5,
 "paddingBottom": 70,
 "data": {
  "name": "ThumbnailList"
 },
 "scrollBarWidth": 10,
 "itemThumbnailShadow": false,
 "itemLabelGap": 7,
 "itemPaddingBottom": 3,
 "itemThumbnailWidth": 220
},
{
 "class": "WebFrame",
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "paddingLeft": 0,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "borderSize": 0,
 "width": "100%",
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182",
 "scrollEnabled": true,
 "paddingRight": 0,
 "shadow": false,
 "insetBorder": false,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame48191"
 },
 "height": "100%",
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ]
},
{
 "transparencyActive": false,
 "maxWidth": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "paddingLeft": 0,
 "class": "IconButton",
 "minWidth": 50,
 "minHeight": 50,
 "borderSize": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "verticalAlign": "middle",
 "width": "25%",
 "paddingRight": 0,
 "mode": "push",
 "shadow": false,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "maxHeight": 60,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "borderRadius": 0,
 "height": "75%",
 "paddingBottom": 0,
 "data": {
  "name": "X"
 },
 "propagateClick": false,
 "cursor": "hand"
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "MapViewer",
 "left": 0,
 "toolTipOpacity": 1,
 "minWidth": 1,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "toolTipShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "paddingRight": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderRadius": 0,
 "shadow": false,
 "height": "99.975%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "class": "ViewerArea",
 "paddingLeft": 0,
 "minHeight": 1,
 "playbackBarHeadShadow": true,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressBarBackgroundColorDirection": "vertical",
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "progressBottom": 2,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "data": {
  "name": "Floor Plan"
 },
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0
},
{
 "layout": "absolute",
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "class": "Container",
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "width": "100%",
 "shadow": false,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 140,
 "paddingBottom": 0,
 "data": {
  "name": "header"
 },
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "propagateClick": false
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "class": "Container",
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "paddingLeft": 0,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "width": "100%",
 "shadow": false,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "data": {
  "name": "Container photo"
 },
 "height": "100%",
 "propagateClick": false,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "class": "Container",
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "paddingLeft": 0,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "center",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "middle",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "width": "55%",
 "shadow": false,
 "backgroundOpacity": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#000000"
 ],
 "paddingBottom": 0,
 "data": {
  "name": "-left"
 },
 "height": "100%",
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ]
},
{
 "scrollBarWidth": 10,
 "layout": "vertical",
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "class": "Container",
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "paddingLeft": 60,
 "minWidth": 460,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.51,
 "scrollBarColor": "#0069A3",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 60,
 "width": "45%",
 "shadow": false,
 "backgroundOpacity": 1,
 "gap": 0,
 "paddingTop": 20,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 20,
 "data": {
  "name": "-right"
 },
 "height": "100%",
 "propagateClick": false,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "transparencyActive": false,
 "maxWidth": 60,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "paddingLeft": 0,
 "class": "IconButton",
 "minWidth": 50,
 "minHeight": 50,
 "borderSize": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "verticalAlign": "middle",
 "width": "25%",
 "paddingRight": 0,
 "mode": "push",
 "shadow": false,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "maxHeight": 60,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "borderRadius": 0,
 "height": "75%",
 "paddingBottom": 0,
 "data": {
  "name": "X"
 },
 "propagateClick": false,
 "cursor": "hand"
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "class": "Container",
 "id": "Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button Tour Info"
 },
 "class": "Button",
 "shadowSpread": 1,
 "id": "Button_7DB31382_7065_343F_41D6_641BBE1B2562",
 "paddingLeft": 10,
 "minWidth": 1,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontColor": "#FFFFFF",
 "shadow": false,
 "fontSize": "36px",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "gap": 5,
 "paddingTop": 0,
 "label": "Instagram",
 "borderRadius": 0,
 "height": 50,
 "click": "this.openLink('https://www.instagram.com/panipaodavila/?igshid=YmMyMTA2M2Y%3D', '_blank')",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "class": "Container",
 "id": "Container_7DB30382_7065_343F_416C_8610BCBA9F50",
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button Panorama List"
 },
 "class": "Button",
 "shadowSpread": 1,
 "id": "Button_7DB33382_7065_343F_41B1_0B0F019C1828",
 "paddingLeft": 10,
 "minWidth": 1,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontColor": "#FFFFFF",
 "shadow": false,
 "fontSize": "36px",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "gap": 23,
 "paddingTop": 0,
 "label": "Telefone",
 "borderRadius": 0,
 "height": 50,
 "click": "this.openLink('tel:04730135966', '_blank')",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "class": "Container",
 "id": "Container_7DB32382_7065_343F_419E_6594814C420F",
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "pressedLabel": "Location",
 "data": {
  "name": "Button Location"
 },
 "class": "Button",
 "shadowSpread": 1,
 "id": "Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
 "paddingLeft": 10,
 "minWidth": 1,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontColor": "#FFFFFF",
 "shadow": false,
 "fontSize": "36px",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "gap": 5,
 "paddingTop": 0,
 "label": "Whatsapp",
 "borderRadius": 0,
 "height": 50,
 "click": "this.openLink('http://wa.me/5547991459717', '_blank')",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "class": "Container",
 "id": "Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "data": {
  "name": "Button Floorplan"
 },
 "class": "Button",
 "shadowSpread": 1,
 "id": "Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
 "paddingLeft": 10,
 "minWidth": 1,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "width": "100%",
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontColor": "#FFFFFF",
 "shadow": false,
 "fontSize": "36px",
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "gap": 5,
 "paddingTop": 0,
 "label": "Localiza\u00e7\u00e3o",
 "borderRadius": 0,
 "height": 50,
 "click": "this.openLink('https://goo.gl/maps/sGpz7B7xV8rLhZpV7', '_blank')",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "normal",
 "cursor": "hand",
 "pressedBackgroundOpacity": 1
},
{
 "scrollBarWidth": 10,
 "layout": "absolute",
 "class": "Container",
 "id": "Container_7DBC9382_7065_343F_41CC_ED357655BB95",
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "class": "Container",
 "id": "Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "width": 40,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 1,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 2,
 "paddingBottom": 0,
 "data": {
  "name": "blue line"
 },
 "propagateClick": true,
 "overflow": "visible",
 "backgroundColorRatios": [
  0
 ]
},
{
 "class": "HTMLText",
 "id": "HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "width": "100%",
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "click": "this.openLink('https://goo.gl/maps/sGpz7B7xV8rLhZpV7', '_blank')",
 "borderRadius": 0,
 "height": 78,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:20px;font-family:'Oswald Regular';\"><I>Rua Jo\u00e3o Miers, 795</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:20px;font-family:'Oswald Regular';\"><I>Vila Nova </I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:20px;font-family:'Oswald Regular';\"><I>Joinville - SC</I></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText47602"
 },
 "scrollBarWidth": 10,
 "propagateClick": true
},
{
 "transparencyActive": true,
 "maxWidth": 80,
 "id": "IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4",
 "paddingLeft": 0,
 "width": 42,
 "class": "IconButton",
 "minWidth": 1,
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "shadow": false,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4_rollover.png",
 "maxHeight": 80,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "borderRadius": 0,
 "height": 42,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton collapse"
 },
 "propagateClick": true,
 "cursor": "hand"
},
{
 "class": "Image",
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "paddingLeft": 0,
 "minWidth": 1,
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "center",
 "width": "100%",
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "verticalAlign": "middle",
 "top": "0%",
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "maxHeight": 1000,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 0,
 "data": {
  "name": "Image"
 },
 "propagateClick": false,
 "scaleMode": "fit_outside",
 "maxWidth": 2000
},
{
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "class": "Container",
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minHeight": 0,
 "borderSize": 0,
 "horizontalAlign": "right",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "100%",
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "gap": 0,
 "paddingTop": 20,
 "borderRadius": 0,
 "height": 50,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "layout": "vertical",
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "class": "Container",
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "paddingLeft": 0,
 "minWidth": 100,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "minHeight": 300,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "width": "100%",
 "shadow": false,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 10,
 "data": {
  "name": "Container text"
 },
 "height": "100%",
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "class": "Container",
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "width": 370,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 30,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "transparencyActive": false,
 "maxWidth": 60,
 "class": "IconButton",
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "paddingLeft": 0,
 "minWidth": 50,
 "right": 20,
 "minHeight": 50,
 "borderSize": 0,
 "horizontalAlign": "right",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "verticalAlign": "top",
 "top": 20,
 "width": "100%",
 "paddingRight": 0,
 "mode": "push",
 "shadow": false,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "maxHeight": 60,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "borderRadius": 0,
 "height": "36.14%",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton X"
 },
 "propagateClick": false,
 "cursor": "hand"
},
{
 "transparencyActive": false,
 "maxWidth": 60,
 "class": "IconButton",
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "paddingLeft": 0,
 "minWidth": 50,
 "right": 20,
 "minHeight": 50,
 "borderSize": 0,
 "horizontalAlign": "right",
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "verticalAlign": "top",
 "top": 20,
 "width": "100%",
 "paddingRight": 0,
 "mode": "push",
 "shadow": false,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "maxHeight": 60,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "borderRadius": 0,
 "height": "36.14%",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton X"
 },
 "propagateClick": false,
 "cursor": "hand"
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "toolTipOpacity": 1,
 "minWidth": 1,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "toolTipShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "paddingRight": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderRadius": 0,
 "shadow": false,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "class": "ViewerArea",
 "paddingLeft": 0,
 "minHeight": 1,
 "playbackBarHeadShadow": true,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressBarBackgroundColorDirection": "vertical",
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "progressBottom": 2,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": "0%",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0
},
{
 "cursor": "hand",
 "class": "IconButton",
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "paddingLeft": 0,
 "minWidth": 50,
 "minHeight": 50,
 "borderSize": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "transparencyActive": false,
 "verticalAlign": "middle",
 "top": "20%",
 "width": "14.22%",
 "bottom": "20%",
 "paddingRight": 0,
 "mode": "push",
 "shadow": false,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "maxHeight": 60,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton <"
 },
 "propagateClick": true,
 "maxWidth": 60
},
{
 "cursor": "hand",
 "class": "IconButton",
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "paddingLeft": 0,
 "minWidth": 50,
 "right": 10,
 "minHeight": 50,
 "borderSize": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "transparencyActive": false,
 "verticalAlign": "middle",
 "top": "20%",
 "width": "14.22%",
 "bottom": "20%",
 "paddingRight": 0,
 "mode": "push",
 "shadow": false,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "maxHeight": 60,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "borderRadius": 0,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton >"
 },
 "propagateClick": true,
 "maxWidth": 60
},
{
 "transparencyActive": false,
 "maxWidth": 60,
 "class": "IconButton",
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "paddingLeft": 0,
 "minWidth": 50,
 "right": 20,
 "minHeight": 50,
 "borderSize": 0,
 "horizontalAlign": "right",
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "verticalAlign": "top",
 "top": 20,
 "width": "10%",
 "paddingRight": 0,
 "mode": "push",
 "shadow": false,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "maxHeight": 60,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "borderRadius": 0,
 "height": "10%",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton X"
 },
 "propagateClick": true,
 "cursor": "hand"
},
{
 "class": "Image",
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "paddingLeft": 0,
 "minWidth": 1,
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "center",
 "width": "100%",
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "verticalAlign": "bottom",
 "top": "0%",
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "maxHeight": 1000,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 0,
 "data": {
  "name": "Image40635"
 },
 "propagateClick": false,
 "scaleMode": "fit_outside",
 "maxWidth": 2000
},
{
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "class": "Container",
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "paddingLeft": 0,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minHeight": 0,
 "borderSize": 0,
 "horizontalAlign": "right",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "width": "100%",
 "shadow": false,
 "backgroundOpacity": 0.3,
 "gap": 0,
 "paddingTop": 20,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "height": "5%",
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "layout": "vertical",
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "class": "Container",
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "paddingLeft": 0,
 "minWidth": 100,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.79,
 "scrollBarColor": "#E73B2C",
 "minHeight": 520,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "width": "100%",
 "shadow": false,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 30,
 "data": {
  "name": "Container text"
 },
 "height": "100%",
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "class": "Container",
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "width": 370,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": 40,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "class": "HTMLText",
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "paddingLeft": 10,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "width": "100%",
 "paddingRight": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 20,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.44vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.86vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.86vh;font-family:'Oswald';\"><B><I>DOLOR SIT AME</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.58vh;font-family:'Oswald';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.14vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.14vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.14vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.14vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.14vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.14vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.14vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.14vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.58vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.14vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.58vh;font-family:'Oswald';\"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.14vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.72vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.14vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.14vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.14vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.14vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.58vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.14vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.58vh;font-family:'Oswald';\"><B><I>LOREM IPSUM:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.72vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText"
 },
 "scrollBarWidth": 10,
 "propagateClick": false
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "class": "Button",
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "paddingLeft": 0,
 "width": 180,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "center",
 "iconHeight": 32,
 "fontColor": "#FFFFFF",
 "pressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "backgroundColor": [
  "#04A3E1"
 ],
 "mode": "push",
 "paddingRight": 0,
 "shadow": false,
 "fontSize": "2.39vh",
 "rollOverBackgroundOpacity": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 0.7,
 "iconBeforeLabel": true,
 "gap": 5,
 "paddingTop": 0,
 "label": "LOREM IPSUM",
 "borderRadius": 50,
 "height": 50,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "shadowSpread": 1,
 "propagateClick": false,
 "pressedBackgroundOpacity": 1,
 "data": {
  "name": "Button31015"
 },
 "fontWeight": "bold",
 "cursor": "hand"
},
{
 "class": "HTMLText",
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "paddingLeft": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0,
 "scrollBarColor": "#04A3E1",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "width": "100%",
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "46%",
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.44vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.86vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.86vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText18899"
 },
 "scrollBarWidth": 10,
 "propagateClick": false
},
{
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "class": "Container",
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "paddingLeft": 0,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "width": "100%",
 "shadow": false,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "data": {
  "name": "- content"
 },
 "height": "75%",
 "propagateClick": false,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "paddingLeft": 0,
 "class": "Image",
 "minWidth": 1,
 "minHeight": 1,
 "borderSize": 0,
 "horizontalAlign": "left",
 "width": "25%",
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "verticalAlign": "top",
 "paddingRight": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "maxHeight": 200,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 0,
 "data": {
  "name": "agent photo"
 },
 "propagateClick": false,
 "scaleMode": "fit_inside",
 "maxWidth": 200
},
{
 "class": "HTMLText",
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "paddingLeft": 10,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "minHeight": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "width": "75%",
 "paddingRight": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.58vh;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.43vh;font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.14vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.86vh;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.14vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.14vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.14vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarWidth": 10,
 "propagateClick": false
}],
 "scrollBarWidth": 10,
 "layout": "absolute",
 "children": [
  "this.MainViewer",
  "this.Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC"
 ],
 "class": "Player",
 "id": "rootPlayer",
 "paddingLeft": 0,
 "vrPolyfillScale": 0.5,
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minHeight": 20,
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarVisible": "rollOver",
 "scripts": {
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getKey": function(key){  return window[key]; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "unregisterKey": function(key){  delete window[key]; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "existsKey": function(key){  return key in window; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "registerKey": function(key, value){  window[key] = value; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } }
 },
 "defaultVRPointer": "laser",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "backgroundPreloadEnabled": true,
 "shadow": false,
 "mobileMipmappingEnabled": false,
 "downloadEnabled": false,
 "start": "this.init(); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList])",
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "mouseWheelEnabled": true,
 "paddingBottom": 0,
 "width": "100%",
 "desktopMipmappingEnabled": false,
 "height": "100%",
 "propagateClick": true,
 "data": {
  "name": "Player468"
 },
 "overflow": "visible"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
