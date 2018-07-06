import * as React from 'react'
import * as ReactDom from 'react-dom'

import { App } from './components/App'
import './styles/style.scss'

const root = document.getElementById('root')

ReactDom.render(<App name="Jarrod"/>, root)