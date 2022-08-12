import { useGeolocated } from 'react-geolocated'
import { FC, useEffect, useState } from 'react'

// const accessKey = 'a8166ebd541c05a85a5239570229f9c0'
const apiKey = '5049a4b9741b4f4c8875380224d363f3'

export const Geolocator: FC = () => {
	const [location, setLocation] = useState('')
	const { coords, isGeolocationAvailable, isGeolocationEnabled } =
		useGeolocated({
			positionOptions: {
				enableHighAccuracy: false,
			},
			userDecisionTimeout: 5000,
		})

	const fetchLocation = async (long: number, lat: number) => {
		const response = await fetch(
			`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${long}&type=country&apiKey=${apiKey}`,
			// `http://api.positionstack.com/v1/forward?access_key=${accessKey}&query=${lat},${long}`,
			{
				method: 'GET',
				headers: {
					'Access-Control-Allow-Origin': '*',
					contentType: 'application/json',
				},
			}
		)

		const data = await response.json()
		console.log(data)
	}

	useEffect(() => {
		if (isGeolocationAvailable && isGeolocationEnabled) {
			console.log(coords)
		}

		if (coords) {
			fetchLocation(coords?.longitude, coords?.latitude)
		}
	}, [coords])

	return <h3 className=''>{location}</h3>
}
