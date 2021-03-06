export function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};

export function menuScroll() {
  const menuItems = document.querySelectorAll('.menu a[href^="#"')

  menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault()
      const element = e.target;
      const id = element.getAttribute('href')
      const section = document.querySelector(id).offsetTop

      smoothScrollTo(0, section, 1000)
    });
  })


  const arrow = document.querySelector('.arrow-portfolio a[href^="#"')
  arrow.addEventListener('click', (e) => {
    e.preventDefault()
    const section = document.querySelector('#portfolio').offsetTop

    smoothScrollTo(0, section, 1000)
  })

}
