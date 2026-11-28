document.querySelectorAll('img[data-optional]').forEach(function(img){
  if(img.complete&&img.naturalWidth===0) img.remove(); else img.addEventListener('error',function(){img.remove()});
});
(function(){var lb=document.getElementById('lb'); if(lb) lb.addEventListener('click',function(){lb.classList.remove('on')});})();

  document.querySelectorAll('.gallery img').forEach(function (img) {
    img.addEventListener('click', function () {
      var lb = document.getElementById('lb');
      lb.querySelector('img').src = img.src;
      lb.classList.add('on');
    });
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') document.getElementById('lb').classList.remove('on'); });
  document.addEventListener('click', function (e) {
    document.querySelectorAll('details.pop[open]').forEach(function (d) { if (!d.contains(e.target)) d.removeAttribute('open'); });
  });
  var rv = document.querySelectorAll('.rv');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.06 });
    rv.forEach(function (el) { io.observe(el); });
  } else { rv.forEach(function (el) { el.classList.add('in'); }); }
