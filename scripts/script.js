let menuIcon = document.querySelector(`#menu-icon`);
let navbar = document.querySelector(`.navbar`);

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

menuIcon.onclick = () =>{
  menuIcon.classList.toggle('fa-xmark');
  navbar.classList.toggle('active');
  navbar.classList.toggle('animate__animated');
  navbar.classList.toggle('animate__fadeInDown'); 
}

window.onscroll = () =>{
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute( 'id' );
    if (top >= offset && top < offset + height){
       navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*='+ id +']').classList.add('active' ) ;
       }) 
    }
  })
}


// SKILLS SECTION

document.addEventListener('DOMContentLoaded', function() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const skillsList = document.querySelector('.skills-list');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const filter = btn.dataset.filter;

      filterBtns.forEach(btn => {
        btn.classList.remove('active');
      });
      btn.classList.add('active');

      

      

      skillsList.querySelectorAll('.skill').forEach(skill => {
        // Dito tayo mag didisplay kapag maouout yung skill container
        
        // skill.style.opacity = 0;
        // skill.style.display = 'none';
        // skill.style.visibility = 'hidden';
        // skill.style.display = 'none';
        // skill.style.display = 'none';

        setTimeout(function() {
            skill.style.top = 0;
            skill.style.left = 0;
            skill.style.transform = `translateY(50%)`;
            skill.style.opacity = 0;
            
            setTimeout(function() {
              skill.style.display = 'none';
                
            }, 300); 
        }); 
      
        
        if (filter === 'all' || skill.classList.contains(filter)) {
          
          setTimeout(function() {
            skill.style.top = 0;
            skill.style.left = 0;
            skill.style.transform = `translate(50%)`;
            skill.style.transform = `translate(0)`;
              skill.style.opacity = 1;
              setTimeout(function() {
                skill.style.display = 'block';
              }, 300);
          });

          
        }
      });
    });
  });
});
  