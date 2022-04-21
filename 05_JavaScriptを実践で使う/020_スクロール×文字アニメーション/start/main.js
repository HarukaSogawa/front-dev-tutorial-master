document.addEventListener('DOMContentLoaded', function () {


    const els = document.querySelectorAll('.animate-title');
    const cb = function(entries, observer) {
      // alert('intersecting');
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          const ta = new TextAnimation(entry.target);
          ta.animate();
          observer.unobserve(entry.target);
        } else {

        }
      });
    }
    
    const options = {
      root: null, //交差対象の親要素や先祖要素を設定できる
      rootMargin: '0px', //上右下左の順で交差点のマージンを設定できる　０でもpxか%を必ずつける
      threshold: 0, //交差判定の基準を変更できる（ある程度大きさのある対象の場合に設定すると便利
    };
    
    const io = new IntersectionObserver(cb, options);
    els.forEach(el => io.observe(el));
  });

