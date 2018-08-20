class ContactInfo extends React.Component{
    render(){
      return(
      <div>{this.props.contact.name} {this.props.contact.phone}</div>
      );
    }
  }
  
  
  class Contact extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        contactData:[
          {name: 'A1', phone:'010-000-000'},
          {name: 'A2', phone:'010-000-000'},
          {name: 'A3', phone:'010-000-000'},
          {name: 'A4', phone:'010-000-000'},
          {name: 'A5', phone:'010-000-000'}
        ]
      }
    }
    render(){
      
      const mapToComponent = (data) => {
        return data.map((contact, i) =>{
          return(<ContactInfo contact={contact} key={i}/>)
        });
      };
      
      return(
        <div>
          {mapToComponent(this.state.contactData)}
        </div>
      );
    }
  }
  
  class App extends React.Component {
    render() {
      return (
        <Contact/>
      );
    }
  };
  
  ReactDOM.render(
    <App></App>,
    document.getElementById("root")
  );