class Spaceship extends React.Component {
  render() {
    return (
        <div className="space-ship">
          <h2>{this.props.name}</h2>
          <small>Speed: {this.props.speed}
        </div>
      );
  }
}

Spaceship.defaultProps = {
  speed: 'slow'
  hasRockets: 'false'
  colors: ['black', 'red']
}
