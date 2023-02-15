import React from 'react';

const { useEffect, useState } = React;
function useGetdata(path) {
	const [data, setData] = useState([]);
	const [errors, setErrors] = useState(null);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com${path}`)
			.then((response) => response.json())
			.then((data) => {
				setData(data);
			})
			.catch((error) => {
				setErrors(error);
				console.log(error);
			});
	}, [path]);
	return [data, errors];
}

export default useGetdata;
