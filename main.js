let landing_about = document.querySelector(".landing-about");

let landing_contact = document.querySelector(".landing-contact");

document
  .querySelector(".client-div2")
  .addEventListener("mousedown", function (event) {
    event.preventDefault();
  });

gsap.from(".landing-page-h1", {
  opacity: 0,

  delay: 0.15,

  duration: 0.3,

  y: 10,
});

gsap.from(".landing-page h2", {
  opacity: 0.7,

  duration: 0.2,

  delay: 0.15,
});

gsap.from(".landing-about", {
  opacity: 0.1,

  duration: 0.3,

  delay: 0.2,

  y: -3,
});

gsap.from(".landing-contact", {
  opacity: 0.1,

  duration: 0.3,

  delay: 0.19,

  y: -3,
});

landing_about.onmouseover = function () {
  gsap.to(this, {
    duration: 0.25,

    border: "1px solid rgba(143, 143, 143, 0.213)",
  });
};

landing_about.onmouseleave = function () {
  gsap.to(this, {
    duration: 0.25,

    border: "1px solid rgba(113, 113, 113, 0.059)",

    color: "rgb(184, 184, 184)",
  });
};

landing_contact.onmouseover = function () {
  gsap.to(this, {
    backgroundColor: "#801212",

    duration: 0.25,
  });
};

landing_contact.onmouseleave = function () {
  gsap.to(this, {
    backgroundColor: "#731212",

    duration: 0.25,
  });
};

$(".nav-a1").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".product-section").offset().top + -80,
    },

    240
  );
});

$(".nav-a2").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".client-section").offset().top + -270,
    },

    240
  );
});

$(".nav-a3").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".about-section").offset().top,
    },

    240
  );
});
