document.addEventListener('DOMContentLoaded', function() {
    // Get the header element
    const header = document.querySelector('header');
    let lastScrollTop = 0;
    const scrollThreshold = 80; // Minimum scroll position before hiding the header
    const scrollDetectionThreshold = 5; // Minimum amount to scroll before detecting direction

    // Function to handle scroll events
    function handleScroll() {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Only hide header when scrolled past the threshold
        if (currentScrollTop > scrollThreshold) {
            // Check if scrolling down and past detection threshold
            if (currentScrollTop > lastScrollTop + scrollDetectionThreshold) {
                // Scrolling down - hide header
                header.classList.add('header-hide');
            } else if (currentScrollTop < lastScrollTop - scrollDetectionThreshold) {
                // Scrolling up - show header
                header.classList.remove('header-hide');
            }
        } else {
            // Always show header at the top of the page
            header.classList.remove('header-hide');
        }
        
        lastScrollTop = currentScrollTop;
    }

    // Add scroll event listener with passive flag for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
});