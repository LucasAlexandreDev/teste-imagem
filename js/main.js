'use strict'

import { criarPreview } from "./pages/preview.js"

const page = criarPreview()

document.getElementById('main').appendChild(page)