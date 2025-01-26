  document.addEventListener("DOMContentLoaded", () => {
  const skillBoxes = document.querySelectorAll(".skill-box")
  const hintMessage = document.getElementById("hintMessage")
  const skillName = document.getElementById("skillName")
  const starRating = document.getElementById("starRating")
  const skillLevel = document.getElementById("skillLevel")

  function setProgress(element, level) {
    const progress = element.querySelector(".progress")
    progress.style.width = `${level * 25}%`
  }

  function showHintMessage(event) {
    const box = event.currentTarget
    const skill = box.dataset.skill
    const level = Number.parseInt(box.dataset.level)

    skillName.textContent = skill
    starRating.innerHTML = "★".repeat(level) + "☆".repeat(4 - level)

    let levelText
    switch (level) {
      case 1:
        levelText = "Beginner"
        break
      case 2:
        levelText = "Intermediate"
        break
      case 3:
        levelText = "Advanced"
        break
      case 4:
        levelText = "Expert"
        break
      default:
        levelText = "Unknown"
    }
    skillLevel.textContent = levelText

    hintMessage.style.left = `${event.clientX + 10}px`
    hintMessage.style.top = `${event.clientY + 10}px`
    hintMessage.classList.add("show")
  }

  function hideHintMessage() {
    hintMessage.classList.remove("show")
  }

  skillBoxes.forEach((box) => {
    const level = Number.parseInt(box.dataset.level)
    setProgress(box, level)

    box.addEventListener("mouseenter", showHintMessage)
    box.addEventListener("mouseleave", hideHintMessage)
  })

  // Reveal animation on scroll
  function revealSkills() {
    skillBoxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top
      const triggerBottom = window.innerHeight * 0.8

      if (boxTop < triggerBottom) {
        box.classList.add("reveal")
      }
    })
  }

  window.addEventListener("scroll", revealSkills)
  revealSkills() // Initial check on page load
})
