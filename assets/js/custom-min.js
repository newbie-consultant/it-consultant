  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);


document.getElementById('whatsapp-button').addEventListener('click', function() {
   document.getElementById('whatsapp-chat-form').style.display = 'block';
});

document.getElementById('close-chat-form').addEventListener('click', function() {
   document.getElementById('whatsapp-chat-form').style.display = 'none';
});

document.getElementById('whatsapp-chat').addEventListener('submit', function(event) {
   event.preventDefault();
   const message = document.getElementById('chat-message').value;
   const phoneNumber = '51955081075';
   const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
   window.open(whatsappUrl, '_blank');
});

