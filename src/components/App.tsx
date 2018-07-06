import * as React from 'react'

interface IProps { name: string; }
interface IState {}

export class App extends React.Component<IProps,IState> {
  render() {
    return <h1>Hello {this.props.name}!</h1>
  }
}