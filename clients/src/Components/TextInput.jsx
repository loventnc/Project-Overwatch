import React from 'react';

const TextInput = React.forwardRef(
    (
        {type, placeholder, style, label, labelStyle, register, name, error },
        ref
    ) => {
        return (
      		<div className='w-full flex-col mt-2'>
        	 		{label && (
						<p className={'text-ascent-2 text-sm mb-2 ${labelStyles}'}>{label}</p>
			)}        

			<div>
				<input
					type={type}
					placeholder={placeholder}
					className={`bg-white`}
					ref={ref}
					{...register}
					aria-invalid={error ? 'true' : 'false'}
				/>
				{error && (
					<p className='text-red-500 text-xs mt-1'>{error}</p>
				)}
			</div>
        </div>
        );
    }
);

export default TextInput