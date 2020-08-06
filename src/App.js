import React from 'react';
import Contacts from './components/contacts';

class App extends React.Component {

  state = {
    contacts: []
  }
  url = 'http://jsonplaceholder.typicode.com/users';

  async componentDidMount() {
    try {
      const response = await fetch(this.url);
      const jsonResposne = await response.json();
      this.setState({
        contacts: jsonResposne
      });
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <Contacts contacts={this.state.contacts} />
    );
  }
}

export default App;
