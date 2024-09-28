// grab the sections
const sections = document.querySelectorAll("section");

const trans = document.querySelector(".trans");

const gradient = ["blue", "red", "green", "#FA8072"];

let options = {
  threshold: 0.8,
};

let observer = new IntersectionObserver(navScroll, options);

function navScroll(entries) {
  entries.forEach((entry) => {
    //when scrolling on the current element
    const className = entry.target.className;
    // the active link would be the element manipulated from the classname variable onto the data-page
    const activeLink = document.querySelector(`[data-page="${className}"]`);
    //the elementIndex value will be the target element attribbute from the data-index
    const elementIndex = entry.target.getAttribute("data-index");
    //get the coordinates of the current section that we are on.
    const coordinates = activeLink.getBoundingClientRect();
//
    const directions = {
      height: coordinates.height,
      width: coordinates.width,
      top: coordinates.top,
      left: coordinates.left,
    };

   if (entry.isIntersecting) {
  // When the section is visible in the viewport:
  
  // Set the height of the 'trans' element to match the height of the active navigation link
  trans.style.setProperty("height", `${directions.height}px`);
  
  // Set the width of the 'trans' element to match the width of the active navigation link
  trans.style.setProperty("width", `${directions.width}px`);
  
  // Position the 'trans' element to align with the top of the active navigation link
  trans.style.setProperty("top", `${directions.top}px`);
  
  // Position the 'trans' element to align with the left edge of the active navigation link
  trans.style.setProperty("left", `${directions.left}px`);
  
  // Change the background color of the 'trans' element based on the current section's index
  trans.style.backgroundColor = gradient[elementIndex];
}

  });
}

sections.forEach((section) => {
  observer.observe(section);
});
