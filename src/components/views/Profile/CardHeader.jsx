import React from 'react';

export default function CardHeader({
  title,
  subTitle,
  rightTitle,
  image1,
  image2,
  starTitle,
}) {
  return (
    <div className='CardHeader flex-sb  editButton img-cp'>
      <div className='flex-col'>
        {title ? <h2>{title}</h2> : ''}
        {subTitle ? (
          <i>
            <h3 style={{ fontWeight: '400' }}>{subTitle}</h3>
          </i>
        ) : (
          ''
        )}
      </div>

      <div className='flex-row'>
        {rightTitle ? (
          <h3 style={{ marginTop: '1rem', cursor: 'pointer' }}>{rightTitle}</h3>
        ) : (
          ''
        )}

        {image1 ? <img src={image1} alt='Button' /> : ''}
        {image2 ? <img src={image2} alt='Button' /> : ''}

        {starTitle ? (
          <h4 style={{ marginTop: '1rem', cursor: 'pointer', width: '100%' }}>
            {starTitle}
          </h4>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
