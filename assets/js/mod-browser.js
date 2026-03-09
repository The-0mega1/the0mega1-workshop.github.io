fetch('/mods.json')
  .then(res => res.json())
  .then(mods => {

    const container = document.getElementById("mod-list")

    mods.forEach(mod => {

      const card = document.createElement("div")
      card.className = "mod-card"

      card.innerHTML = `
        <h3>${mod.title}</h3>
        <p>${mod.game}</p>
        <a href="${mod.url}">Open Page</a>
      `

      container.appendChild(card)

    })

  })
