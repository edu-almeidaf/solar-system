import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="solarSystem">
        <Title headline="Planetas" />
        <div className="planets">
          {
            planets
              .map(({ name, image }, index) => (<PlanetCard
                key={ name }
                planetName={ name }
                planetImage={ image }
                planetId={ index + 1 }
              />))
          }
        </div>
      </div>
    );
  }
}

export default SolarSystem;
