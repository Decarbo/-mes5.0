var swiper = new Swiper(".swiper", {
  effect: "cards",
  grabCursor: true,
  initialSlide: 2,
  speed: 500,
  loop: true,
  rotate: true,
  mousewheel: {
    invert: false,
  },
});

// Function to create image slideshow for each event
function createSlideshow(container, images, altText) {
  let currentIndex = 0;
  let intervalId = null;
  const imageElement = container.querySelector("img");

  // Set initial image
  imageElement.src = images[0];
  imageElement.alt = altText;

  // Function to start slideshow
  function startSlideshow() {
    if (intervalId) return; // Don't start if already running

    intervalId = setInterval(() => {
      // Add fade class to start transition
      imageElement.classList.add("fade");

      // Wait for fade out to complete
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        imageElement.src = images[currentIndex];

        // Remove fade class to start fade in
        setTimeout(() => {
          imageElement.classList.remove("fade");
        }, 100);
      }, 900); // Wait for fade out to complete
    }, 2000); // Change image every 1 second
  }

  // Function to stop slideshow
  function stopSlideshow() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  return {
    start: startSlideshow,
    stop: stopSlideshow,
  };
}

// Store slideshow instances
const slideshows = new Map();

// Initialize slideshows when the page loads
document.addEventListener("DOMContentLoaded", () => {
  // Green Olympiad slideshow
  const greenOlympiadContainer = document
    .querySelector("#event1")
    .closest(".event-item")
    .querySelector(".event-image");
  const greenOlympiadImages = [
    "./Animated-Portfolio-main/yantrikaevents/greenolympiad.webp",
    "./Animated-Portfolio-main/yantrikaevents/greenolympiad1.jpg",
    "./Animated-Portfolio-main/yantrikaevents/greenolympiad2.jpg",
  ];
  slideshows.set(
    "event1",
    createSlideshow(
      greenOlympiadContainer,
      greenOlympiadImages,
      "Green Olympiad"
    )
  );

  // Mad CAD slideshow
  const madCadContainer = document
    .querySelector("#event2")
    .closest(".event-item")
    .querySelector(".event-image");
  const madCadImages = [
    "./Animated-Portfolio-main/yantrikaevents/madcad.webp",
    "./Animated-Portfolio-main/yantrikaevents/madcad1.jpg",
    "./Animated-Portfolio-main/yantrikaevents/madcad2.jpg",
  ];
  slideshows.set(
    "event2",
    createSlideshow(madCadContainer, madCadImages, "Mad CAD")
  );

  // Mech-a-Hunt slideshow
  const mechHuntContainer = document
    .querySelector("#event3")
    .closest(".event-item")
    .querySelector(".event-image");
  const mechHuntImages = [
    "./Animated-Portfolio-main/yantrikaevents/mech-a-hunt.webp",
    "./Animated-Portfolio-main/yantrikaevents/mechahunt1.jpg",
    "./Animated-Portfolio-main/yantrikaevents/mechahunt2.jpg",
  ];
  slideshows.set(
    "event3",
    createSlideshow(mechHuntContainer, mechHuntImages, "Mech-a-Hunt")
  );

  // Water Rocket Challenge slideshow
  const waterRocketContainer = document
    .querySelector("#event4")
    .closest(".event-item")
    .querySelector(".event-image");
  const waterRocketImages = [
    "./Animated-Portfolio-main/yantrikaevents/waterrocket.webp",
    "./Animated-Portfolio-main/yantrikaevents/waterocket1.jpg",
    "./Animated-Portfolio-main/yantrikaevents/waterrocket2.jpg",
  ];
  slideshows.set(
    "event4",
    createSlideshow(
      waterRocketContainer,
      waterRocketImages,
      "Water Rocket Challenge"
    )
  );

  // Smart Campus slideshow
  const smartCampusContainer = document
    .querySelector("#event5")
    .closest(".event-item")
    .querySelector(".event-image");
  const smartCampusImages = [
    "./Animated-Portfolio-main/yantrikaevents/smartcampus.webp",
    "./Animated-Portfolio-main/yantrikaevents/smartcampus1.jpg",
  ];
  slideshows.set(
    "event5",
    createSlideshow(smartCampusContainer, smartCampusImages, "Smart Campus")
  );
});

// Function to toggle slideshow on click
function toggleSlideshow(eventItem) {
  // Get the event ID
  const eventId = eventItem.querySelector("h3").id;

  // Remove active class from all event items
  document.querySelectorAll(".event-item").forEach((item) => {
    item.classList.remove("active");
  });

  // Add active class to clicked item
  eventItem.classList.add("active");

  // Stop all slideshows
  slideshows.forEach((slideshow) => {
    slideshow.stop();
  });

  // Start the clicked event's slideshow
  const slideshow = slideshows.get(eventId);
  if (slideshow) {
    slideshow.start();
  }
}
