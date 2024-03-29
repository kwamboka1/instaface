import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AlbumDetail({ albums }) {
	const [clicked, setClicked] = useState(false);
	const [photos, setPhotos] = useState([]);

	const fetchPhotos = (albumId) => {
		fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
			.then((response) => response.json())
			.then((data) => {
				setPhotos(data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const albumsList = albums.map((album, index) => (
		<div key={index}>
			<h4>{album.title}</h4>
			<p
				className='cursor-pointer text-blue-700 underline'
				onClick={() => {
					setClicked(true);
					fetchPhotos(album.id);
				}}
			>
				Get photos
			</p>
		</div>
	));

	const postPhotos = (
		<div>
			{photos.map((photo, index) => (
				<figure>
					<figcaption>Photo {index + 1}</figcaption>
					<img src={photo.thumbnailUrl} alt='thumbnail' />
				</figure>
			))}
		</div>
	);

	return (
		<>
			<div className='p-20'>
				<tbody>
					<tr>
						<th>Album Name</th>
						<th>Thumbnail</th>
						<th>View photos</th>
					</tr>
					<tr>
						<td>{albumsList}</td>
						<td>
							<h2> {clicked ? "Selected album's Photos" : ''} </h2>
							{clicked && postPhotos}
						</td>
					</tr>
				</tbody>
			</div>
			<div className='m-12'>
				<div className=''>{albumsList}</div>
				<div className=''>
					<h2>
						{' '}
						{clicked
							? 'title for selected album'
							: 'Click the photo of the album'}{' '}
					</h2>
					<Link to={`/photo/${photos.id}`}>{clicked && postPhotos}</Link>
				</div>
			</div>
		</>
	);
}

export default AlbumDetail;
