document.addEventListener("click", function(e) {
    let m = document.getElementById('list_addition');
    let n= document.getElementById('form2');
    let a= document.getElementById('form1');
    let b= document.getElementById('form3');

    if  (e.target.id ==='sign') {
      setTimeout(() => n.classList.add('open'), 1000);
    } 
     else if  (e.target.id ==='button1') {
        setTimeout(() => m.classList.add('open'), 1000);
        setTimeout(() => n.classList.remove('open'), 1000);
        
      } else if  (e.target.id ==='log') {
        setTimeout(() => n.classList.add('open'), 1000);
        
        
      } 
      else if  (e.target.id ==='rej') {
        setTimeout(() => a.classList.add('open'), 1000);
        
        
      } 
      else if  (e.target.id ==='setting') {
        setTimeout(() => b.classList.add('open'), 1000);
        
        
      } 
      else if  (e.target.id ==='button2') {
        setTimeout(() => a.classList.remove('open'), 1000);
        
        
      } 
      else if  (e.target.id ==='button3') {
        setTimeout(() => b.classList.remove('open'), 1000);
        
        
      } 
    
  });
 