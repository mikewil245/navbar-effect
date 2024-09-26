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
    //get the coordinates from the activeLink
    const coordinates = activeLink.getBoundingClientRect();

    const directions = {
      height: coordinates.height,
      width: coordinates.width,
      top: coordinates.top,
      left: coordinates.left,
    };

    if (entry.isIntersecting) {
      trans.style.setProperty("height", `${directions.height}px`);
      trans.style.setProperty("width", `${directions.width}px`);
      trans.style.setProperty("top", `${directions.top}px`);
      trans.style.setProperty("left", `${directions.left}px`);
      trans.style.backgroundColor = gradient[elementIndex];
    }
  });
}

sections.forEach((section) => {
  observer.observe(section);
});
