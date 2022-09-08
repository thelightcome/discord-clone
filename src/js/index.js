import './chat';

const toggleList = [
  {
    selector: '#header-option-btn',
    event: 'click',
    classes: [`bg-[url('../assets/icons/arrow-down-sign.svg')]`, `bg-[url('../assets/icons/close.svg')]`],
    searchByParent: false,
    childs: [{
      selector: '#header-option',
      classes: ['scale-y-0', '-translate-y-3']
    }]
  },
  {
    selector: '#main-nav li',
    event: 'click',
    classes: ['after:bg-white'],
    searchByParent: true,
    childs: [{
      selector: 'a',
      classes: ['bg-[#FFFFFF]', 'rounded-2xl']
    }]
  },
  {
    selector: '#nav-footer-title',
    event: 'click',
    classes: ['bg-[#ffffff]/[0.1]'],
    searchByParent: true,
    childs: [{
      selector: '#info-board',
      classes: ['opacity-100']
    }]
  },
  {
    selector: '.nav-footer-microphone',
    event: 'click',
    classes: ['bg-[#ffffff]/[0.1]', 'before:bg-red-400'],
  },
  {
    selector: '.nav-footer-headphones',
    event: 'click',
    classes: ['bg-[#ffffff]/[0.1]', 'before:bg-red-400'],
  },
  {
    selector: '.nav-footer-settings',
    event: 'click',
    classes: ['bg-[#ffffff]/[0.1]'],
    searchByParent: false,
    childs: [{
      selector: '#settings',
      classes: ['scale-150', 'opacity-100', 'pointer-events-none']
    }]
  },
  {
    selector: '#closeSettings',
    event: 'click',
    classes: ['bg-[#ffffff]/[0.1]'],
    searchByParent: false,
    childs: [{
      selector: '#settings',
      classes: ['scale-150', 'opacity-100', 'pointer-events-none']
    }, {
      selector: '.nav-footer-settings',
      classes: ['bg-[#ffffff]/[0.1]']
    }]
  },
];

toggleList.forEach(toggleClass);

function toggleClass(option) {
  const elems = document.querySelectorAll(option.selector);

  for (let i = 0; i < elems.length; i += 1) {
    elems[i].addEventListener(option.event, (e) => {
      for (let i = 0; i < elems.length; i += 1) {
        const thisElem = e.target.closest(option.selector) === elems[i]
        if (thisElem) {
          option.classes.forEach((className) => {
            elems[i].classList.toggle(className);
          });
        } else {
          option.classes.forEach((className) => {
            elems[i].classList.remove(className);
          });
        }
        if (option.childs) {
          const searchBy = option.searchByParent ? elems[i] : document;

          option.childs.forEach(({ selector, classes }) => {
            const child = searchBy.querySelector(selector);
            if (thisElem) {
              classes.forEach((className) => {
                child.classList.toggle(className);
              });
            } else {
              classes.forEach((className) => {
                child.classList.remove(className);
              });
            }
          })
        }
      }
    });
  }
}