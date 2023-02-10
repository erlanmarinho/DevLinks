
function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  // pegar a tag img
  const img = document.querySelector("#profile img")
  if (html.classList.contains('light')) { 
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute(
      "alt",
      "Foto de Erlan Marinho sorrindo, usando terno  cinza e gravata preta com fundo vermelho"
    )
  }else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Erlan Marinho sorrindo, usando camisa social azul e gravata rosa"
    )
  }
}