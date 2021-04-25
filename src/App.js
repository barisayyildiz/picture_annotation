import React, {useEffect, useState, useRef} from 'react';

import {
  ReactPictureAnnotation,
  defaultShapeStyle,
  DefaultInputSection
} from "react-picture-annotation";

import './App.scss';
import axios from 'axios';

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
					x : item.mark.x,
					y : item.mark.y,
					width : item.mark.width,
					height : item.mark.height
				}
			)
		})
		// console.log(data);
		axios.post("http://localhost:5000/photos",data)
		.then(res => console.log(res))

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
				/>

				<button onClick={onClick}>Submit</button>

			</div>

    </div>
  );
};

export default App;
