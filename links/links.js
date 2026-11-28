  // адвент показывается сам: с 25 ноября по 10 января
  (function(){var d=new Date(),m=d.getMonth()+1,day=d.getDate();
    if((m===11&&day>=25)||m===12||(m===1&&day<=10)||location.hash==="#advent")document.getElementById("adv").hidden=false;})();
