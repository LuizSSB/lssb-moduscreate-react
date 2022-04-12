import React from 'react'
import ReactDOM from 'react-dom'
import 'reflect-metadata'
import { App } from './App'
import { IoC } from './ioc/IoC'
import './strings/i18n'
import './index.css'

IoC.load()

const rootElement = document.getElementById('root')
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement,
)
