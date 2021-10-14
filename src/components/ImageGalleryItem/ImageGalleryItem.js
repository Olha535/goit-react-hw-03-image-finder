import React from 'react';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({ image, tags, onImageClick }) {
  return (
    <li className="ImageGalleryItem">
      <img
        src={image}
        alt={tags}
        onClick={onImageClick}
        className="ImageGalleryItem-image"
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  tags: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onImageClick: PropTypes.func,
};
