import { renderizarPages } from "../main.js"

export const criarPreview = function () {
    
    const container = document.createElement('form')

    const previewContainer = document.createElement('div')
    previewContainer.className = 'preview-container'

    const input = document.createElement('input')
    input.id        = 'preview-input'
    input.className = 'preview-input'
    input.type      = 'file'
    input.accept    = 'image/*'

    const label = document.createElement('label')
    label.className = 'preview-label'
    label.htmlFor   = 'preview-input'

    const img = document.createElement('img')
    img.id        = 'preview-image'
    img.className = 'preview-image'
    img.src       = './img/upload-icon.svg'

    const buttonContainer = document.createElement('div')
    buttonContainer.className = 'button-container'

    const buttonUpload = document.createElement('button')
    buttonUpload.id          = 'upload-button'
    buttonUpload.className   = 'button'
    buttonUpload.type        = 'button'
    buttonUpload.textContent = 'Salvar'

    const buttonCancelar = document.createElement('button')
    buttonCancelar.className   = 'button'
    buttonCancelar.type        = 'button'
    buttonCancelar.textContent = 'Cancelar'
    buttonCancelar.onclick     = () => renderizarPages('login')

    previewContainer.append(input, label, img)
    buttonContainer.append(buttonUpload, buttonCancelar)
    container.append(previewContainer,buttonContainer)

    return container
}
