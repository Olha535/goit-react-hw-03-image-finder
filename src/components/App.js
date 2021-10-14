import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fetchImages from '../services/api-service';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';

export default class App extends Component {
  static propTypes = {
    searchQuery: PropTypes.string,
  };

  state = {
    searchQuery: '',
    page: 1,
    images: [],
    loading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevSearch = prevState.searchQuery;
    const nextSearch = this.state.searchQuery;

    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevSearch !== nextSearch || prevPage !== nextPage) {
      try {
        this.setState({ loading: true, images: [] });
        const images = await fetchImages(nextSearch, nextPage);
        if (!images.length) {
        }
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
        }));
        console.log(images);
      } catch (error) {
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  handleFormSubmit = searchQuery => {
    if (this.state.searchQuery === searchQuery) {
      return;
    }
    this.setState({ searchQuery });
  };

  loadMoBtn = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleImageClick = (largeImageUrl, tags) => {
    this.setState({
      imageClick: largeImageUrl,
      alt: tags,
    });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          images={this.state.images}
          onImageClick={this.handleImageClick}
        />
        {this.state.images.length > 0 && <Button onClick={this.loadMoBtn} />}
      </div>
    );
  }
}
