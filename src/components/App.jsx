import React from 'react'
import Header from './Header'
import TicketList from './TicketList'
import NewTicketControl from './NewTicketControl'
import Error404 from './Error404'
import { Switch, Route, withRouter } from 'react-router-dom'
import Admin from './Admin'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import c from './../constants'

class App extends React.Component {

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElapsedWaitTime(),
    60000
    )
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer)
  }

  updateTicketElapsedWaitTime() {
    const { dispatch } = this.props
    Object.keys(this.props.masterTicketList).map(ticketId => {
      const ticket = this.props.masterTicketList[ticketId]
      const newFormattedWaitTime = ticket.timeOpen.fromNow(true)
      const action = {
        type: c.UPDATE_TIME,
        id: ticketId,
        formattedWaitTime: newFormattedWaitTime
      }
      dispatch(action)
    })
  }

  render(){
    return (
      <div className='container main'>

        <div className='break'></div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=> <div className='main'><TicketList ticketList={this.props.masterTicketList}/></div>}/>
          <Route path='/newticket' render={()=><NewTicketControl />} />
          <Route path='/admin' render={(props)=><div className='main'><Admin currentRouterPath={props.location.pathname} /></div>} />
          <Route component={Error404} />
        </Switch>
      </div>
    )
  }
}

App.propTypes = {
  masterTicketList: PropTypes.object,
  dispatch: PropTypes.func
}

const mapStateToProps = state => {
  return {
    masterTicketList: state.masterTicketList
  }
}

export default withRouter(connect(mapStateToProps)(App))
