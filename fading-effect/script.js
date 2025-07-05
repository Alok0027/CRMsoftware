document.addEventListener('scroll', function() {
    const images = document.querySelectorAll('.fade-image');
    const texts = document.querySelectorAll('.fade-text');
    const windowHeight = window.innerHeight;

    function handleFade(elements) {
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementHeight = element.getBoundingClientRect().height;
            const elementCenter = elementTop + elementHeight / 2;

            // Calculate the distance from the center of the viewport
            const distanceFromCenter = Math.abs(windowHeight / 2 - elementCenter);

            // The point at which the element is fully bright (e.g., when its center is at 1/4 or 3/4 of the screen)
            const fullBrightnessZone = windowHeight / 4;

            let brightness = 0;

            // Calculate brightness based on position
            if (distanceFromCenter < fullBrightnessZone) {
                brightness = 1 - (distanceFromCenter / fullBrightnessZone);
            } 

            element.style.filter = `brightness(${brightness * 2})`; // Multiply to make it brighter
            element.style.opacity = brightness * 1.5; // Adjust opacity as well
        });
    }

    handleFade(images);
    handleFade(texts);
});
