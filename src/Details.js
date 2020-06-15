import React, { lazy } from "react";
import pet from "@frontendmasters/pet";
import { navigate } from "@reach/router";
import Carousel from "./Carousel.js";
import ErrorBoundary from "./ErrorBoundary.js";
import ThemeContext from "./ThemeContext";

// This is all we have to do to lazy load a component. Awesome!
const Modal = lazy(() => import('./Modal'))

// This component is lazy loaded from App.js, just to point out that this component needs no changes 
// for it to work with code splitting. If we used a large library like moment it would also only be loaded when this component is loaded
class Details extends React.Component {
  state = { loading: true, showModal: false };
  componentDidMount() {
    pet
      .animal(this.props.id)
      .then(({ animal }) => {
        this.setState({
          url: animal.url,
          name: animal.name,
          animal: animal.type,
          location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
          description: animal.description,
          media: animal.photos,
          breed: animal.breeds.primary,
          loading: false
        });
      })
      .catch(err => this.setState({ error: err }));
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal });

  adopt = () => navigate(this.state.url);

  render() {
    if (this.state.loading) {
      return <h1>loading … </h1>;
    }

    const {
      animal,
      breed,
      location,
      description,
      media,
      name,
      showModal
    } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${location}`}</h2>

          <ThemeContext.Consumer>
            {([theme]) => (
              // This is the weird way you have to do context with class components
              <button onClick={this.toggleModal} style={{ background: theme }}>
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>

          <p>{description}</p>

          {showModal ? (
            <Modal>
              <h1>Would you like to adopt {name}?</h1>
              <div className="buttons">
                <button onClick={this.adopt}>Yes</button>
                <button onClick={this.toggleModal}>No, I am a monster</button>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

// We are using ErrorBoundary as kind of middleware so if there is an error on details we show ErrorBoundary content
export default function DetailsErrorBoundary(props) {
  // Use spread operator to spread out all props across details component
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
