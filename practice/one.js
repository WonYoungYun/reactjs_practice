class Codelab extends React.Component {
    render() {
      let text = "Hi, My code!!!"
      let style = {
        backgroundColor:'aqua'
      };
      
      return(
        <div>
          <div style={style}>{text}</div>
          <div>Codelab</div>
          <h1>Hello {this.props.name}</h1>
          <h2>{this.props.number}</h2>
          <div style={style}>{this.props.children}</div>
        </div>
      );
    }
  }
  
  Codelab.propTypes = {
    name: PropTypes.string,
    number:PropTypes.number.isRequired
  };
  
  Codelab.defaultProps = {
    name:"Unknown"
  };
  
  class App extends React.Component {
      render() {
        return (
          <Codelab name={this.props.name} number={this.props.number}>{this.props.children}</Codelab>
        );
      }
  }
  
  ReactDOM.render(<App number={123}>Hi, my code.</App>, document.getElementById("root"));