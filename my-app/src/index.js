import React from 'react'
import ReactDOM from 'react-dom'
import ExternalComponent from './components/ExternalComponent'

function Welcome(props) {
  return <h1>Sup {props.name}</h1>;
}

function App(props) {

}

ReactDOM.render(<ExternalComponent/>, document.getElementById('root'))
