'use strict'

import { criarPreview } from './pages/preview.js'
import { criarLogin }   from './pages/login.js'

const paginas = {

    preview: {titulo    : 'PREVIEW DE IMAGENS', renderizar: criarPreview},
    login  : {titulo    : 'Login'             , renderizar: criarLogin}
}

export const renderizarPages = function(nomePagina){

    const pagina = paginas[nomePagina].renderizar()
    document.getElementById('main').replaceChildren(pagina)
}

renderizarPages('login')