import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import Success from './Success';

class NewTicketForm extends React.Component {

  constructor(props) {
    super(props);

    this._names = '';
    this._location = '';
    this._issue = '';

    this.state = {
      success: null
    };
    this.handleNewTicketFormSubmission = this.handleNewTicketFormSubmission.bind(this);
  }

  handleNewTicketFormSubmission(event) {
    event.preventDefault();
    this.props.onNewTicketCreation({names: this._names.value, location: this._location.value, issue: this._issue.value, timeOpen: new Moment()});
    this._names.value = '';
    this._location.value = '';
    this._issue.value = '';
    this.setState({success: <Success />});
  }

  render() {
    return (
      <div>
        <form action="/" onSubmit={this.handleNewTicketFormSubmission}>
          <input
            type='text'
            id='names'
            placeholder='Pair Names'
            ref={(input) => {this._names = input;}}/>
          <input
            type='text'
            id='location'
            placeholder='Location'
            ref={(input) => {this._location = input;}}/>
          <textarea
            id='issue'
            placeholder='Describe your issue.'
            ref={(textarea) => {this._issue = textarea;}}/>
          <button className="btn" type='submit'>Help!</button>
        </form>
        {this.state.success}
      </div>
    );
  }
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func

};

export default NewTicketForm;
