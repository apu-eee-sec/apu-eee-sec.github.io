        // Define the shared href link
        const HomeHref = "https://apu-eee-sec.netlify.app/";

        // Select all a tags with the 'shared-link' class
        const HomeLinks = document.querySelectorAll('.logo');

        // Loop through the selected elements and set the href
        HomeLinks.forEach(link => {
            link.href = HomeHref;
        });
