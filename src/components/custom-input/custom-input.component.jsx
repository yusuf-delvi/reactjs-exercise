import React from 'react';

import './custom-input.styles.scss';

const CustomInput = ({label, ...props }) => (
	<div className='input-container'>
		<label className='input-label'>
			{label}
		</label>
		<input {...props} />
	</div>
);

export default CustomInput;