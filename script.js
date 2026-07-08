const bookingUrl = "https://calendly.com/meganwastchak24/30min";

document.querySelectorAll(".booking-link").forEach(link => {
    link.href = bookingUrl;
    link.target = "_blank";
});