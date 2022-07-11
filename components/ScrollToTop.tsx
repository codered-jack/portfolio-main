import loadable from '@loadable/component';
import { useEffect } from 'react';
import animationData from '../public/assets/rocket.json';
const LottieDisplay = loadable(() => import('../components/LottieDisplay'), {
  fallback: 'Loading...',
});

function scrollFunction(scroll) {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scroll.style.display = 'block';
  } else {
    scroll.style.display = 'none';
  }
}

function ScrollToTop() {
  useEffect(() => {
    let scroll = document.getElementById('scrollTop');
    scrollFunction(scroll);
    window.onscroll = function () {
      scrollFunction(scroll);
    };
  }, []);

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    if (typeof window !== 'undefined') {
      let scroll = document.getElementById('top');
      scroll?.scrollIntoView({ behavior: 'smooth' });
      // document.body.scrollTop = 0; // For Safari
      // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
  }
  return (
    <div
      onClick={topFunction}
      id='scrollTop'
      className='w-20 fixed bottom-20 right-10 z-50'
    >
      <LottieDisplay lottieFile={animationData} />
    </div>
  );
}

export default ScrollToTop;
