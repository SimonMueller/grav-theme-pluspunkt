/*
  Copyright (C) 2017 Simon Müller

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

document.onreadystatechange = function() {
  if(document.readyState === 'complete'){
    init();
  }
}

function init () {
  initNavToggle();
  initSmoothScroll();
  removePreload();
}

function removePreload () {
  const body = document.querySelectorAll('body')[0];

  if (body.classList.contains('preload')) {
    body.classList.remove('preload');
  }
}

function initSmoothScroll () {
  const scroll = new SmoothScroll('a[href*="#"]', {
    header: '.nav-header',
    speed: 400,
  });
}

function initNavToggle () {
  const hamburger = document.querySelectorAll('.hamburger')[0];
  const mobile_nav_toggle = document.querySelectorAll('.mobile-nav-toggle')[0];
  const body = document.querySelectorAll('body')[0];

  mobile_nav_toggle.onclick = () => {
    hamburger.classList.toggle('is-active');
    body.classList.toggle('overflow-hidden');
  }
}
