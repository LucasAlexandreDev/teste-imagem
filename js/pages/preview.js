{/* <form>
    <div class="preview-container">
        <input id="preview-input" class="preview-input" type="file" accept="image/*">
        <label class="preview-label" for="preview-input"></label>
        <img id="preview-image" class="preview-image" src="./img/upload-icon.svg" >
    </div>
    <div class="button-container">
        <button class="button" type="button" id="upload-button" >Salvar</button>
        <button class="button" type="button" >Cancelar</button>
    </div>
</form> */}

export const criarPreview = function (){
    const container = document.createElement('form')
    
    
    const previewContainer = document.createElement('div')
    previewContainer.className('preview-container')

    const input = document.createElement('input')

    input.id        = 'preview-input'
    input.className = 'preview-input'
    input.type      = 'file'
    input.accept    = 'image/*'

    const label = document.createElement('label')
    
    label.className = 'preview-label'
    label.htmlFor   = 'preview-label'
    
    const img = document.createElement('img')

    img.id          = 'preview-image'
    img.className   = 'preview-image'
    img.scr         = './img/upload-icon.svg'

    const buttonContainer = document.createElement('div')
    buttonContainer.className('button-container')

    const buttonUpload        = document.createElement('button') 
    buttonUpload.id           = 'upload-button'
    buttonUpload.className    = 'button'
    buttonUpload.type         = 'button'    
    buttonUpload.textContent  = 'Salvar'    
    
    const buttonCancelar = document.createElement('button')
    buttonCancelar.className    = 'button'
    buttonCancelar.type         = 'button'
    buttonCancelar.textContent  = 'Cancelar'    
 
    buttonContainer.append(buttonUpload, buttonCancelar)
    previewContainer.append(input, label, img, buttonUpload, buttonCancelar, buttonUpload)
    container.append(previewContainer)

    return container
}

