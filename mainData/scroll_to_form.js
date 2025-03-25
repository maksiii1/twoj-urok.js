function DoScrolling(element, duration) {
  var startingY = window.pageYOffset;
  var elementY = window.pageYOffset + element.getBoundingClientRect().top;
  var targetY =
    document.body.scrollHeight - elementY < window.innerHeight
      ? document.body.scrollHeight - window.innerHeight
      : elementY;
  var diff = targetY - startingY;
  if (!diff) return;
  var easing = function (t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  };
  var start;
  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp;
    var time = timestamp - start;
    var percent = easing(Math.min(time / duration, 1));
    window.scrollTo(0, startingY + diff * percent);
    if (time < duration) {
      window.requestAnimationFrame(step);
    }
  });
}

function EnableScroll() {
  var a_tags = document.getElementsByTagName("a");
  for (let a of a_tags) {
    if (a.classList.contains("ignore-scroll")) continue;

    a.addEventListener("click", function (event) {
      event.preventDefault();
      var targetId = a.getAttribute("href").slice(1);
      var targetElement = document.getElementById(targetId);
      if (targetElement) {
        DoScrolling(targetElement, 1000);
      } else {
        console.warn(`Element with id '${targetId}' not found.`);
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", EnableScroll);
