import React from 'react'
import { connect } from 'react-redux'
import { hideBurger, showBurger } from './actions'

const App: React.FC = (props: any) => {
  const { burger, showBurger, hideBurger } = props
  const { visible } = burger

  return (
    <div>
      <h1>{visible ? '🍔 Delicious!!!' : '🍽 No burger found'}</h1>
      <button onClick={showBurger}>Show Burger</button>
      <button onClick={hideBurger}>Hide Burger</button>
    </div>
  )
}

const mapDispatchToProps = { showBurger, hideBurger }

const mapStateToProps = (state: any) => ({ burger: state.burger })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
