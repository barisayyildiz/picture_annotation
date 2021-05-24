import React, {useEffect, useState, useRef} from 'react';

import {
  ReactPictureAnnotation,
  defaultShapeStyle,
  DefaultInputSection
} from "react-picture-annotation";

import './App.scss';

const App = () => {

	const myRef = useRef();
	
  const [pageSize, setPageSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

	const [image, setImage] = useState(null);

  const onResize = () => {
    setPageSize({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    // window.addEventListener('resize', onResize);
    // return () => window.removeEventListener('resize', onResize);

		setImage("https://source.unsplash.com/random/800x600");

  }, []);

  const onSelect = selectedId => {
		// console.log(selectedId)
	};
  const onChange = data => {
		// console.log(data)
	};

	const onClick = () => {

		const data = myRef.current.currentAnnotationData.map(item => {
			return(
				{
					tag : item.comment,
					xmin : item.mark.x,
					ymin : item.mark.y,
					xmax : item.mark.x + item.mark.width,
					ymax : item.mark.x + item.mark.height
				}
			)
		})
		console.log(data);

	}

  return (
    <div className="App">

			<div className="wrapper">

				<ReactPictureAnnotation
					ref={myRef}
					image = {image}
					onSelect={onSelect}
					onChange={onChange}
					width={800}
					height={600}
					scrollSpeed={0}
					dropdownOptions={
						[
							"car",
							"animal",
							"human"
						]
					}
				/>

				<button onClick={onClick}>Submit</button>

			</div>

    </div>
  );
};

export default App;
