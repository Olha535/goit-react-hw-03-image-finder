import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fetchImages from '../services/api-service';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal';

export default class App extends Component {
  static propTypes = {
    searchQuery: PropTypes.string,
  };

  state = {
    searchQuery: '',
    page: 1,
    images: [],
    showModal: null,
    alt: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevSearch = prevState.searchQuery;
    const nextSearch = this.state.searchQuery;

    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevSearch !== nextSearch || prevPage !== nextPage) {
      try {
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
    this.resetState();
    this.setState({ searchQuery });
  };

  loadMoBtn = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleImageClick = (largeImageUrl, tags) => {
    this.setState({
      showModal: largeImageUrl,
      alt: tags,
    });
  };

  toggleModal = () => {
    this.setState({
      showModal: null,
    });
  };

  resetState = () => {
    this.setState({
      searchQuery: '',
      page: 1,
      images: [],
      showModal: null,
      alt: null,
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
        {this.state.showModal && (
          <Modal
            showModal={this.state.showModal}
            tags={this.state.alt}
            onClose={this.toggleModal}
          />
        )}
        {this.state.images.length > 0 && <Button onClick={this.loadMoBtn} />}
      </div>
    );
  }
}
