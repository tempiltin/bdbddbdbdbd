if(noCopy){
  document.body.oncopy = function(){
    return false};document.body.oncontextmenu = function(){
      return false};document.body.onselectstart = document.body.ondrag = function(){
        return false;};document.onkeydown = function(){
          if(event.ctrlKey == true && event.keyCode == 83){event.preventDefault();}}}
if(noPrint){var c = document.createElement("span");c.style.display = "none";
            c.style.postion = "absolute";c.style.background = "#000";var first = document.body.firstChild;
var wraphtml = document.body.insertBefore(c, first);c.setAttribute('width', document.body.scrollWidth);
            c.setAttribute('height', document.body.scrollHeight);c.style.display = "block";
            var cssNode3 = document.createElement('style');cssNode3.type = 'text/css';cssNode3.media = 'print';
            cssNode3.innerHTML = 'body{display:none}';document.head.appendChild(cssNode3);}
var cssNode2 = document.createElement('style');cssNode2.type = 'text/css';
cssNode2.media = 'screen';
cssNode2.innerHTML = ' ';document.head.appendChild(cssNode2);
document.body.style.cssText = " ";function toBlur(){if(autoBlur)document.body.style.cssText =  "}function toClear(){
                                                    document.body.style.cssText = " "};document.onclick =function(event){toClear();};document.onmouseleave = function(event){toBlur();};document.onblur=function(event){toBlur();};document.addEventListener('keyup',(e)=>{if(e.key == 'PrintScreen'){if(noScreenshot){navigator.clipboard.writeText('');toBlur()}}});document.addEventListener('keydown',(e)=>{if (e.ctrlKey && e.key == 'p'){if(noPrint){e.cancelBubble = true;e.preventDefault();e.stopImmediatePropagation();}}});document.addEventListener('contextmenu' , event => event.preventDefault());document.onkeydown = function(e){if(e.keyCode == 123){return false}if(e.ctrlKey && e.shiftKey && e.keyCode == 73){return false}if(e.ctrlKey && e.keyCode == 17){return false}if( e.keyCode == 83){return false}if( e.keyCode == 44){return false}if(e.ctrlKey && e.shiftKey && e.keyCode == 74){return false}if(e.ctrlKey  && e.keyCode == 85){return false}}
