class Spaceship extends React.Component {
  render() {
    return (
        <div className="space-ship">
          <h2>Name: {this.props.name}</h2>
          <h1>Speed: {this.props.speed}</h1>
          <h1>Has Rockets: {this.props.hasRockets}</h1>
          <h1>Colors: {this.props.colors}</h1>
          
          
        </div>
      );
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: 'false',
  colors: ['black', 'red']
}
