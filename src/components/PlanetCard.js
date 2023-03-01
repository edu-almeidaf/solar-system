import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage, planetId } = this.props;

    return (
      <div data-testid="planet-card" className="planetCard">
        <div className="planetIcon">
          <img
            src={ planetImage }
            alt={ `Planeta ${planetName}` }
            className={ `planeta${planetId}` }
          />
        </div>
        <p data-testid="planet-name">{ planetName }</p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
  planetId: PropTypes.number.isRequired,
};

export default PlanetCard;
