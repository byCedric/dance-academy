import React, {useState, useEffect} from 'react';
import { YoutubeDataAPI } from "youtube-v3-api";
import {Linking} from 'react-native';
import {
    Caption, Icon,
    ImageBackground, Overlay, Row, Text,
    ScrollView, Title, TouchableOpacity, View, Image, Subtitle
} from "@shoutem/ui"

ClassVideosScreen.navigationOptions = {
    title: 'Vídeos',
};


export default function ClassVideosScreen(props) {
    let {navigate} = props.navigation;
    let playlistId = "PLa4kAVTZc-eOgyv9iBdMqKPJN6Ya7vq_Z";
    const classId = props.navigation.getParam('class_id');
    const userInfo = props.navigation.getParam('userInfo');
    const [loading, setLoading] = useState(true);
    const API_KEY = "";
    const api = new YoutubeDataAPI(API_KEY);
    return (
        <ScrollView>
            {
                mockData.items.map((video) => {
                        return <TouchableOpacity key={video.id} onPress={() => Linking.openURL("https://www.youtube.com/watch?v=" + video.snippet.resourceId.videoId)}>
                            <Row>
                                <Image
                                    styleName="small rounded-corners"
                                    source={{uri: video.snippet.thumbnails.default.url}}
                                />
                                <View styleName="vertical stretch space-between">
                                    <Subtitle>{video.snippet.title}</Subtitle>
                                </View>
                            </Row>
                        </TouchableOpacity>
                        
                    }
                )

            }

        </ScrollView>
    );
}
const mockData = {
  "kind": "youtube#playlistItemListResponse",
  "etag": "\"p4VTdlkQv3HQeTEaXgvLePAydmU/njgPAdQaIp88ZgxtiMB30O6IY7E\"",
  "nextPageToken": "CAUQAA",
  "pageInfo": {
    "totalResults": 60,
    "resultsPerPage": 5
  },
  "items": [
    {
      "kind": "youtube#playlistItem",
      "etag": "\"p4VTdlkQv3HQeTEaXgvLePAydmU/fqp9h2bN8UkEUaLzdEnr1sYmE_0\"",
      "id": "UEwzZ0JGUEVGQ0IwYnM3SVNvcVZXV2xZLWxzazhObDNuUi4wMTYxQzVBRDI1NEVDQUZE",
      "snippet": {
        "publishedAt": "2019-09-26T11:14:11.000Z",
        "channelId": "UC9a4_tuqbgaKhsN_tx-W22g",
        "title": "Gatos Graciosos - Los Mejores Videos de Gatos Chistosos #65",
        "description": "Gatos Graciosos - Los Mejores Videos de Gatos Chistosos #65\nhttps://youtu.be/tnHmJb39Kio #GatosGraciosos #GatosChistosos #VideosGraciosos\n\nPara cuestiones de derechos de autor, póngase en contacto con: aposcarpenter71@gmail.com\n\nVer más videos de gatos → https://www.youtube.com/playlist?list=PL3gBFPEFCB0bs7ISoqVWWlY-lsk8Nl3nR\n\nGracias por ver mis videos, si te gustan, por favor, y comparte tus comentarios ♥♥♥\n\nSUSCRÍBETE a mi canal para ver más videos ^ ◡ ^",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/tnHmJb39Kio/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/tnHmJb39Kio/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/tnHmJb39Kio/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/tnHmJb39Kio/sddefault.jpg",
            "width": 640,
            "height": 480
          }
        },
        "channelTitle": "Gatos Graciosos",
        "playlistId": "PL3gBFPEFCB0bs7ISoqVWWlY-lsk8Nl3nR",
        "position": 0,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "tnHmJb39Kio"
        }
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "\"p4VTdlkQv3HQeTEaXgvLePAydmU/-hgyaehfBZQ3fAOCIidQXnqmkT4\"",
      "id": "UEwzZ0JGUEVGQ0IwYnM3SVNvcVZXV2xZLWxzazhObDNuUi4wNEU1MTI4NkZEMzVBN0JF",
      "snippet": {
        "publishedAt": "2019-09-24T13:14:07.000Z",
        "channelId": "UC9a4_tuqbgaKhsN_tx-W22g",
        "title": "Gatos Graciosos - Los Mejores Videos de Gatos Chistosos #64",
        "description": "Gatos Graciosos - Los Mejores Videos de Gatos Chistosos #64\nhttps://youtu.be/1odgPjDrS3Y #GatosGraciosos #GatosChistosos #VideosGraciosos\n\nPara cuestiones de derechos de autor, póngase en contacto con: aposcarpenter71@gmail.com\n\nVer más videos de gatos → https://www.youtube.com/playlist?list=PL3gBFPEFCB0bs7ISoqVWWlY-lsk8Nl3nR\n\nGracias por ver mis videos, si te gustan, por favor, y comparte tus comentarios ♥♥♥\n\nSUSCRÍBETE a mi canal para ver más videos ^ ◡ ^",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/1odgPjDrS3Y/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/1odgPjDrS3Y/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/1odgPjDrS3Y/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/1odgPjDrS3Y/sddefault.jpg",
            "width": 640,
            "height": 480
          }
        },
        "channelTitle": "Gatos Graciosos",
        "playlistId": "PL3gBFPEFCB0bs7ISoqVWWlY-lsk8Nl3nR",
        "position": 1,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "1odgPjDrS3Y"
        }
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "\"p4VTdlkQv3HQeTEaXgvLePAydmU/wG1LPD-T2EDSzapRGi4OrOO0ih0\"",
      "id": "UEwzZ0JGUEVGQ0IwYnM3SVNvcVZXV2xZLWxzazhObDNuUi5CQkEwRDA0MDkwNUM2MDY1",
      "snippet": {
        "publishedAt": "2019-09-21T11:47:41.000Z",
        "channelId": "UC9a4_tuqbgaKhsN_tx-W22g",
        "title": "Gatos Graciosos - Los Mejores Videos de Gatos Chistosos #63",
        "description": "Gatos Graciosos - Los Mejores Videos de Gatos Chistosos #63\nhttps://youtu.be/Ao5u6oduUdA #GatosGraciosos #GatosChistosos #VideosGraciosos\n\nPara cuestiones de derechos de autor, póngase en contacto con: aposcarpenter71@gmail.com\n\nVer más videos de gatos → https://www.youtube.com/playlist?list=PL3gBFPEFCB0bs7ISoqVWWlY-lsk8Nl3nR\n\nGracias por ver mis videos, si te gustan, por favor, y comparte tus comentarios ♥♥♥\n\nSUSCRÍBETE a mi canal para ver más videos ^ ◡ ^",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Ao5u6oduUdA/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Ao5u6oduUdA/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Ao5u6oduUdA/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/Ao5u6oduUdA/sddefault.jpg",
            "width": 640,
            "height": 480
          }
        },
        "channelTitle": "Gatos Graciosos",
        "playlistId": "PL3gBFPEFCB0bs7ISoqVWWlY-lsk8Nl3nR",
        "position": 2,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "Ao5u6oduUdA"
        }
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "\"p4VTdlkQv3HQeTEaXgvLePAydmU/TrbsEpUReRwawoOj4WczWOKheQI\"",
      "id": "UEwzZ0JGUEVGQ0IwYnM3SVNvcVZXV2xZLWxzazhObDNuUi5GNjAwN0Y0QTFGOTVDMEMy",
      "snippet": {
        "publishedAt": "2019-09-19T08:48:42.000Z",
        "channelId": "UC9a4_tuqbgaKhsN_tx-W22g",
        "title": "Gatos Graciosos - Los Mejores Videos de Gatos Chistosos #62",
        "description": "Gatos Graciosos - Los Mejores Videos de Gatos Chistosos #62\nhttps://youtu.be/LHxuiezw814 #GatosGraciosos #GatosChistosos #VideosGraciosos\n\nPara cuestiones de derechos de autor, póngase en contacto con: aposcarpenter71@gmail.com\n\nVer más videos de gatos → https://www.youtube.com/playlist?list=PL3gBFPEFCB0bs7ISoqVWWlY-lsk8Nl3nR\n\nGracias por ver mis videos, si te gustan, por favor, y comparte tus comentarios ♥♥♥\n\nSUSCRÍBETE a mi canal para ver más videos ^ ◡ ^",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/LHxuiezw814/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/LHxuiezw814/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/LHxuiezw814/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/LHxuiezw814/sddefault.jpg",
            "width": 640,
            "height": 480
          }
        },
        "channelTitle": "Gatos Graciosos",
        "playlistId": "PL3gBFPEFCB0bs7ISoqVWWlY-lsk8Nl3nR",
        "position": 3,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "LHxuiezw814"
        }
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "\"p4VTdlkQv3HQeTEaXgvLePAydmU/P_HLJdCRi9yfRQ-sHAo3k81KpzE\"",
      "id": "UEwzZ0JGUEVGQ0IwYnM3SVNvcVZXV2xZLWxzazhObDNuUi43NERCMDIzQzFBMERCMEE3",
      "snippet": {
        "publishedAt": "2019-09-17T09:38:11.000Z",
        "channelId": "UC9a4_tuqbgaKhsN_tx-W22g",
        "title": "Gatos Graciosos - Los Mejores Videos de Gatos Chistosos #61",
        "description": "Gatos Graciosos - Los Mejores Videos de Gatos Chistosos #61\nhttps://youtu.be/5UbJbIFeeGc #GatosGraciosos #GatosChistosos #VideosGraciosos\n\n\nPara cuestiones de derechos de autor, póngase en contacto con: aposcarpenter71@gmail.com\n\nVer más videos de gatos → https://www.youtube.com/playlist?list=PL3gBFPEFCB0bs7ISoqVWWlY-lsk8Nl3nR\n\nGracias por ver mis videos, si te gustan, por favor, y comparte tus comentarios ♥♥♥\n\nSUSCRÍBETE a mi canal para ver más videos ^ ◡ ^",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/5UbJbIFeeGc/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/5UbJbIFeeGc/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/5UbJbIFeeGc/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/5UbJbIFeeGc/sddefault.jpg",
            "width": 640,
            "height": 480
          }
        },
        "channelTitle": "Gatos Graciosos",
        "playlistId": "PL3gBFPEFCB0bs7ISoqVWWlY-lsk8Nl3nR",
        "position": 4,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "5UbJbIFeeGc"
        }
      }
    }
  ]
};