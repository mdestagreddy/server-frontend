export function smoothScrollTo(targetId) {
  const element = document.getElementById(targetId)
  if (element) {
    const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    })
  }
}

export function smoothScrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
