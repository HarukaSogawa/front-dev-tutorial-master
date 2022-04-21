const child = document.querySelector('.child');
const cb = function(entries, observer) {
  // alert('intersecting');
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      console.log('inview');
      entry.target.classList.add('inview');
      // observer.unobserve(entry.target); //一回のみで監視をやめる
    } else {
      console.log('outview');
      entry.target.classList.remove('inview');
    }
  });
}

const options = {
  root: null, //交差対象の親要素や先祖要素を設定できる
  rootMargin: '0px', //上右下左の順で交差点のマージンを設定できる　０でもpxか%を必ずつける
  threshold: 0, //交差判定の基準を変更できる（ある程度大きさのある対象の場合に設定すると便利
};

const io = new IntersectionObserver(cb, options);
io.observe(child);
// io.observe(child1);
// io.observe(child2);
