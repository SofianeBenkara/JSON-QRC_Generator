import React from 'react';
import { render } from 'react-dom';
import { QRCode } from 'react-qr-svg';

const styles = {
  h2: {
    textAlign: 'center',
  },
  qrcode: {
    textAlign: 'center',
  },
};

export default class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
        <div style={styles.qrcode}>
          <QRCode
            level="Q"
            style={{ width: 256 }}
            value={JSON.stringify({
              firstName: 'FirstName',
              lastName:  'LastName',
              email:  'Email',
              city: 'City'
            })}
          />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
