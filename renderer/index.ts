import Elm = require('./elm/Main')
import './static/index.html'
import './static/index.css'

const app = Elm.Main.embed(document.body)
