/* nav hamburger menu */
(function(){
   var hamburger = document.getElementById('hamburger');

   hamburger.addEventListener('click', function() {
       this.classList.toggle("change");
       document.getElementsByClassName('menu__nav')[0].classList.toggle("is-close");
   });
})()
/* end menu */
//
// var grid = document.querySelector('.grid');
// var msnry;
//
// imagesLoaded( grid, function() {
//     // init Isotope after all images have loaded
//     msnry = new Masonry( grid, {
//         itemSelector: '.grid-item',
//         columnWidth: '.grid-sizer',
//         percentPosition: true
//     });
// });

function masonry(grid, gridCell, gridGutter, dGridCol, tGridCol, mGridCol) {
    var g = document.querySelector(grid),
        gc = document.querySelectorAll(gridCell),
        gcLength = gc.length,
        gHeight = 0,
        i;

    for(i=0; i<gcLength; ++i) {
        gHeight+=gc[i].offsetHeight+parseInt(gridGutter);
    }

    if(window.screen.width >= 1024)
        g.style.height = gHeight/dGridCol + gHeight/(gcLength+1) + "px";
    else if(window.screen.width < 1024 && window.screen.width >= 768)
        g.style.height = gHeight/tGridCol + gHeight/(gcLength+1) + "px";
    else
        g.style.height = gHeight/mGridCol + gHeight/(gcLength+1) + "px";
}

["resize", "load"].forEach(function(event) {
    window.addEventListener(event, function () {
        imagesLoaded(document.querySelector('.masonry'), function () {
            // A maonsry grid with 8px gutter, with 3 columns on desktop, 2 on tablet, and 1 column on mobile devices.
            masonry(".masonry", ".masonry-brick", 8, 3, 2, 1);
        });
    });
});


/* lazy loader*/
// const observer = demo-image(); // lazy loads elements with default selector as '.lozad'
// observer.observe();



// randomProjects
const projects = [
    { id: 1, name: 'test1', href='http://localhost:3000/', image: 'http://www.dike.lib.ia.us/images/sample-1.jpg/image' },
    { id: 2, name: 'test2', href='http://localhost:3000/', image: 'http://imaging.nikon.com/lineup/lens/zoom/normalzoom/af-s_dx_18-300mmf_35-56g_ed_vr/img/sample/sample4_l.jpg' },
    { id: 3, name: 'test3', href='http://localhost:3000/', image: 'https://kbob.github.io/images/sample-5.jpg' },
    { id: 4, name: 'test4', href='http://localhost:3000/', image: 'https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg' },
    { id: 5, name: 'test5', href='http://localhost:3000/', image: 'https://previews.123rf.com/images/nomadsoul1/nomadsoul11512/nomadsoul1151200103/49820654-professor-in-glasses-thinking-about-math-formulas.jpg' }
]

const pickedPosts = [];
// const currentPageId = Number(location.pathname.match(/^(\d)*-/)[0]);
const currentPageId = 0;

const projectsWithoutCurrent = projects.filter(project => project.id !== currentPageId);

for (let index = 0; index < 3; index++) {
    const randomIndex = Math.round(Math.random() * projectsWithoutCurrent.length);
    if (pickedPosts.indexOf(projectsWithoutCurrent[randomIndex]) === -1) {
        pickedPosts.push(projectsWithoutCurrent[randomIndex]);
    }
}

pickedPosts.forEach((post) => {
    const div = document.createElement('div');

    const div_text = document.createElement('span');
    div_text.textContent = `${post.name}`;
    div.appendChild(div_text);
    //nowy element obrazka utworzyć
    const div_img = document.createElement('img');
    div_img.src = post.image;
    div.appendChild(div_img);
  
    document.getElementById('projects').appendChild(div);
    //nadać klasy tym powyższym elementom
    div_img.setAttribute("class", "demo_projects");
    div_text.setAttribute("class", "demo_projectName");
    div.setAttribute("class", "projects_lists");
})

