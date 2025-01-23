document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track")
  const slides = Array.from(track.children)
  const nextButton = document.querySelector(".carousel-button.next")
  const prevButton = document.querySelector(".carousel-button.prev")
  const dotsContainer = document.querySelector(".carousel-indicators")

  let currentIndex = 0

  // Create indicator dots
  slides.forEach((_, index) => {
    const dot = document.createElement("div")
    dot.classList.add("indicator")
    if (index === 0) dot.classList.add("active")
    dot.addEventListener("click", () => moveToSlide(index))
    dotsContainer.appendChild(dot)
  })

  const moveToSlide = (targetIndex) => {
    if (targetIndex < 0 || targetIndex >= slides.length) return

    slides.forEach((slide, index) => {
      slide.classList.remove("active", "prev", "next")
      if (index === targetIndex) {
        slide.classList.add("active")
      } else if (index === targetIndex - 1 || (targetIndex === 0 && index === slides.length - 1)) {
        slide.classList.add("prev")
      } else if (index === targetIndex + 1 || (targetIndex === slides.length - 1 && index === 0)) {
        slide.classList.add("next")
      }
    })

    document.querySelector(".indicator.active").classList.remove("active")
    dotsContainer.children[targetIndex].classList.add("active")

    currentIndex = targetIndex
    updateButtonsState()
  }

  const updateButtonsState = () => {
    prevButton.disabled = currentIndex === 0
    nextButton.disabled = currentIndex === slides.length - 1
    prevButton.style.opacity = currentIndex === 0 ? "0.5" : "1"
    nextButton.style.opacity = currentIndex === slides.length - 1 ? "0.5" : "1"
  }

  nextButton.addEventListener("click", () => {
    if (currentIndex < slides.length - 1) {
      moveToSlide(currentIndex + 1)
    }
  })

  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      moveToSlide(currentIndex - 1)
    }
  })

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" && currentIndex < slides.length - 1) {
      moveToSlide(currentIndex + 1)
    } else if (e.key === "ArrowLeft" && currentIndex > 0) {
      moveToSlide(currentIndex - 1)
    }
  })

  // Initialize the carousel
  moveToSlide(0)
})

