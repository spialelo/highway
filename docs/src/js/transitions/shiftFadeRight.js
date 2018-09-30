// Highway
import Highway from 'highway';

// GSAP
import Tween from 'gsap';

// Fade
class ShiftFadeRight extends Highway.Transition {
  in(view, done) {
    // Animation
    Tween.fromTo(view, 0.6,
      {
        x: -40,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        onComplete: done
      }, 0.1
    );
  }

  out(view, done) {
    // Animation
    Tween.fromTo(view, 0.6,
      {
        x: 0,
        opacity: 1
      },
      {
        x: 70,
        opacity: 0,
        onComplete: () => {
          // We reset the scroll position
          window.scrollTo(0, 0);

          // Done
          done();
        }
      }, 0.1
    );
  }
}

export default ShiftFadeRight;
