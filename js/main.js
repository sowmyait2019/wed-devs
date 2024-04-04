document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('.testimonial');
    let index = 0;
  
    function showTestimonial() {
      testimonials.forEach((testimonial) => {
        testimonial.classList.remove('active');
      });
      testimonials[index].classList.add('active');
      testimonials[index].classList.add('slide-in');
      index = (index + 1) % testimonials.length;
      setTimeout(showTestimonial, 3000); // Change testimonial every 3 seconds
    }
  
    showTestimonial();
  });
  

