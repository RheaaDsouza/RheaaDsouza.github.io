window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };



const scrollContainer = () => {
  return document.documentElement || document.body;
};

const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth"
  });
};

document.addEventListener("scroll", () => {

  if (scrollContainer().scrollTop > 150) {
    document.querySelector(".top").classList.remove("hidden");
  } else {
    document.querySelector(".top").classList.add("hidden");
  }
});


