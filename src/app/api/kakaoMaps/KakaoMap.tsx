import { useEffect } from 'react'
import 'react-kakao-maps-sdk'

const KakaoMap = ({ location }: { location: string }) => {
  useEffect(() => {
    kakao.maps.load(() => {
      const container = document.getElementById('map')
      const options = {
        center: new kakao.maps.LatLng(35.182352, 126.67302),
        level: 3,
      }
      const map = new kakao.maps.Map(container as HTMLElement, options)

      let geocoder = new kakao.maps.services.Geocoder()

      geocoder.addressSearch(location, function (result, status) {
        if (status === kakao.maps.services.Status.OK) {
          const latitude: number = Number(result[0].y)
          const longitude: number = Number(result[0].x)

          let coords = new kakao.maps.LatLng(latitude, longitude)

          let marker = new kakao.maps.Marker({
            map: map,
            position: coords,
          })

          var infowindow = new kakao.maps.InfoWindow({
            content: `<div style="width:200px;text-align:center;padding:6px 0;">${location}</div>`,
          })
          infowindow.open(map, marker)

          map.setCenter(coords)
        }
      })
    })
  }, [location])

  return (
    <div id="mapWrapper">
      <div className="flex items-center justify-center pt-2">
        <div id="map" className="w-[100%] h-72" />
      </div>
    </div>
  )
}

export default KakaoMap
