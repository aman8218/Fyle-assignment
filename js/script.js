$(document).ready(function() {
    const $serviceCard = $('.service-card');
    const $slides = $serviceCard.find('.card');
    const $dots = $('.dot');
    const visibleCards = 4; // Number of cards visible at a time
    const totalCards = $slides.length; // Total number of cards
    const totalSlides = Math.ceil(totalCards / visibleCards); // Calculate total slides needed
    let currentIndex = 0;

    function showSlide(index) {
        if (index >= totalSlides) {
            index = totalSlides - 1;
        }
        if (index < 0) {
            index = 0;
        }
        const cardWidth = $slides.outerWidth(true); // Width of one card including margin
        const offset = -cardWidth * visibleCards * index;
        $serviceCard.css('transform', `translateX(${offset}px)`);
        $dots.removeClass('active');
        $dots.eq(index).addClass('active');
    }

    $dots.on('click', function() {
        currentIndex = $(this).data('index');
        showSlide(currentIndex);
    });

    // Automatically slide to the right
    setInterval(function() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }, 10000); // Change slide every 10 seconds

    showSlide(currentIndex);

    // Handle form submission
    $('#contact-form').submit(function(event) {
        event.preventDefault();

        //get the form data

        let formData = $(this).serializeArray();

        console.log("Form Data: ", formData);
        $.ajax({
            url: $(this).attr('action'),
            method: $(this).attr('method'),
            data: $(this).serialize(),
            success: function() {
                alert('Form submitted successfully!');
                $('.popup').fadeOut();
                $('#contact-form')[0].reset();

                $('.contact-content').removeClass('vcc');
            },
            error: function() {
                alert('There was an error submitting the form. Please try again.');
            }
        });
    });
    $(".pr-c").click(function() {
        // Remove 'mid-pr' class from all elements
        $(".pr-c").removeClass("mid-pr");

        //add class
        $(this).addClass("mid-pr");
        // Get the new image source from the data attribute
        var newImgSrc = $(this).data("img-src");
        // Change the src attribute of the main image
        $(".project-image").attr("src", newImgSrc);
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const cardRead = document.createElement('div');
        cardRead.classList.add('card-read');
        
        const imgRead = document.createElement('div');
        imgRead.classList.add('img-read');
        const img = document.createElement('img');
        img.src = 'images/read.png'; // Update the image path if necessary
        img.alt = '';
        imgRead.appendChild(img);

        const readContent = document.createElement('div');
        readContent.classList.add('read-content');
        const h2 = document.createElement('h2');
        h2.textContent = 'WEB DEVELOPMENT';
        const p = document.createElement('p');
        p.textContent = 'Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque';
        const br1 = document.createElement('br'); // First line break
        const br2 = document.createElement('br'); // Second line break
        const button = document.createElement('a'); // Change button to an anchor element
        button.classList.add('read-more');
        button.href = 'https://www.fylehq.com/'; // Set the href attribute to the desired URL
        button.target='_blank';
        button.textContent = 'READ MORE -->';
        readContent.appendChild(h2);
        readContent.appendChild(p);
        readContent.appendChild(br1); // Append first line break
        readContent.appendChild(br2); // Append second line break
        readContent.appendChild(button);

        cardRead.appendChild(imgRead);
        cardRead.appendChild(readContent);
        card.appendChild(cardRead);

        cardRead.style.opacity = '0'; // Initially hide the .card-read content

        card.addEventListener('mouseenter', function() {
            cardRead.style.opacity = '1';
            card.querySelector('img').style.opacity = '0';
        });

        card.addEventListener('mouseleave', function() {
            cardRead.style.opacity = '0';
            card.querySelector('img').style.opacity = '1';
        });
    });

    document.querySelector("#show-contact").addEventListener("click", function(){
        document.querySelector(".popup").classList.add("active");
        document.querySelector(".contact-content").classList.add("vcc");
    })
    document.querySelector(".popup .close-btn").addEventListener("click", function(){
        document.querySelector(".popup").classList.remove("active");
        document.querySelector(".contact-content").classList.remove("vcc");
    })



});



