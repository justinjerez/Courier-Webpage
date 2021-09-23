const targets = document.querySelectorAll('section, footer');

const options = {
    root: null,
    rootMargin: '0px 0px -60% 0px',
    treshold: 0
}

const onScrollAnimation = (target) => {
    const intersectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const currentSection = entry.target;
                currentSection.classList.add('actived')

                observer.disconnect()
            }
        })
    }, options)

    intersectionObserver.observe(target)
}

targets.forEach(onScrollAnimation);