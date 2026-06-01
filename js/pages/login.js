import { renderizarPages } from "../main.js"

export const criarLogin = function(){

    const container = document.createElement('form')
    
    const inputEmail = document.createElement('input')
    inputEmail.type        = 'text'
    inputEmail.placeholder = 'Digite o seu email'
    inputEmail.className   = 'input-login' 

    const inputSenha       = document.createElement('input')
    inputSenha.type        = 'password'
    inputSenha.placeholder = 'Digite a sua senha'
    inputSenha.className   = 'input-login' 

    const button = document.createElement('button')
    button.type          = 'button' 
    button.className     = 'button' 
    button.textContent   = 'Login'
    button.onclick       = ()=> renderizarPages('preview')

   container.append(inputEmail, inputSenha, button)

    return container
}