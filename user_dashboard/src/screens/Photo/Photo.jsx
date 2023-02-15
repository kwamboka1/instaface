import React from 'react';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';
// import AlbumDetail from '../Album/AlbumList';

function Photo(photos) {
	return (
		<div>
			<Menu />
			<div>
				<h1 className='p-20'>
					Let's change the title and caption of Our Photo
				</h1>
				<br />
				<br />
				<br />
				{/* <AlbumDetail photos={photos}/> */}
			</div>

			<Footer />
		</div>
	);
}

export default Photo;
