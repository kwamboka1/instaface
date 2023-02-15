import React from 'react';
import { useParams } from 'react-router-dom';
import { Menu, Footer } from '..';
import useGetdata from '../../hooks/useGetdata';
import { Link } from 'react-router-dom';

function User({ albums }) {
	const logout = () => {
		localStorage.removeItem('user');
		window.location.reload();
	};

	const { id } = useParams();
	const [user] = useGetdata(`/users/${id}`);
	const userAlbums = albums.filter((album) => album.userId === user.id);
	const [photos] = useGetdata(`/albums/${id}/photos`);
	// console.log(user);

	return (
		<div className='w-full'>
			<Menu />
			<button
				onClick={logout}
				className='float-right bg-white hover:text-red-800 mr-4 px-8 py-2 cursor-pointer border border-1'
			>
				Logout
			</button>

			{/* {albums.map(album => <p>{album.title}</p>)} */}
			<div className='max-w-[1440px] mx-auto py-4 px-10 flex-col justify-between text-center md:flex-row'>
				<h1 className='text-3xl text-purple-900 pt-20'>{user.name}'s Album</h1>
				<h1 className='text-purple-500 underline text-l'>{user.email}</h1>{' '}
				<hr />
				<br />
				<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
					{userAlbums.map(({ id, title }) => (
						<div key={id}>
							<Link to={`/album/${'album'}`}>
								<h3 className=' font-semibold text-center'>{title}</h3>
							</Link>
							<div>
								{photos.map(({ id, title, thumbnailUrl }) => (
									<div key={id}>
										<h4>{title}</h4>
										<img src={thumbnailUrl} alt={title} />
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default User;
