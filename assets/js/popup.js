document.addEventListener("DOMContentLoaded", function () {
    const popupLinks = document.querySelectorAll(".videoopenPopup");
    const popup = document.getElementById("videopopup");
    const popupOverlay = document.querySelector(".popup-overlay");
    const closeBtn = document.querySelector(".close-popup");
    const youtubeVideo = document.getElementById("youtubeVideo");
    
    popupLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const videoSrc = this.getAttribute("data-href");
            
            youtubeVideo.src = videoSrc + "?autoplay=1"; // Auto-play video when opened
            popup.classList.add("active");
            popupOverlay.classList.add("active");
        });
    });

    function closePopup() {
        popup.classList.remove("active");
        popupOverlay.classList.remove("active");
        youtubeVideo.src = ""; // Stop video playback
    }

    closeBtn.addEventListener("click", closePopup);
    popupOverlay.addEventListener("click", closePopup);
});

/* CSS for Overlay */
const style = document.createElement("style");
style.innerHTML = `
.popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: none;
    z-index: 999;
}

.popup-overlay.active, .videopopup.active {
    display: block;
}

.videopopup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    padding: 20px;
    z-index: 1000;
    display: none;
}
`;
document.head.appendChild(style);
