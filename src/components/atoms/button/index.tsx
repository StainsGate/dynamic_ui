import React, { useState } from 'react';

interface ButtonProps {
  name: string;
}

export const Button = ({ name }: ButtonProps) => {
	const [number, setNumber] = useState(0);

	return (
		<button className='dynamic_button' onClick={() => setNumber(number + 1)}>
			{name}
			{`click count:${number}`}
		</button>
	);
};
