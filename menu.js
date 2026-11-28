(function(){var n=document.querySelector('nav'),b=n.querySelector('.burger');
b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
n.querySelectorAll('.links a').forEach(function(a){a.addEventListener('click',function(){n.classList.remove('open');b.setAttribute('aria-expanded','false')})});})();
