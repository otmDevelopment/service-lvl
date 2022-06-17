//burger
window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".header__list"),
    menuItem = document.querySelectorAll(".header__link"),
    hamburger = document.querySelector(".header__burger"),
    overflowHidden = document.querySelector("body");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("burger_active");
    menu.classList.toggle("menu_active");
    overflowHidden.classList.toggle("overflow-hidden-y");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("burger_active");
      menu.classList.toggle("menu_active");
      overflowHidden.classList.toggle("overflow-hidden-y");
    });
  });
});

// Dropdown Menu
var dropdown = document.querySelectorAll('.dropdown');
var dropdownArray = Array.prototype.slice.call(dropdown,0);
dropdownArray.forEach(function(el){
	var button = el.querySelector('a[data-toggle="dropdown"]'),
			menu = el.querySelector('.dropdown-menu'),
			arrow = button.querySelector('i.drop-arrow');

	button.onclick = function(event) {
		if(!menu.hasClass('show')) {
			menu.classList.add('show');
			menu.classList.remove('hide');
			arrow.classList.add('open');
			arrow.classList.remove('close');
			event.preventDefault();
		}
		else {
			menu.classList.remove('show');
			menu.classList.add('hide');
			arrow.classList.remove('open');
			arrow.classList.add('close');
			event.preventDefault();
		}
	};
})

Element.prototype.hasClass = function(className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};

//tabs
class ItcTabs {
  constructor(target, config) {
    const defaultConfig = {};
    this._config = Object.assign(defaultConfig, config);
    this._elTabs =
      typeof target === "string" ? document.querySelector(target) : target;
    this._elButtons = this._elTabs.querySelectorAll(".tabs__btn");
    this._elPanes = this._elTabs.querySelectorAll(".tabs__pane");
    this._eventShow = new Event("tab.itc.change");
    this._init();
    this._events();
  }
  _init() {
    this._elTabs.setAttribute("role", "tablist");
    this._elButtons.forEach((el, index) => {
      el.dataset.index = index;
      el.setAttribute("role", "tab");
      this._elPanes[index].setAttribute("role", "tabpanel");
    });
  }
  show(elLinkTarget) {
    const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
    const elLinkActive = this._elTabs.querySelector(".tabs__btn_active");
    const elPaneShow = this._elTabs.querySelector(".tabs__pane_show");
    if (elLinkTarget === elLinkActive) {
      return;
    }
    elLinkActive ? elLinkActive.classList.remove("tabs__btn_active") : null;
    elPaneShow ? elPaneShow.classList.remove("tabs__pane_show") : null;
    elLinkTarget.classList.add("tabs__btn_active");
    elPaneTarget.classList.add("tabs__pane_show");
    this._elTabs.dispatchEvent(this._eventShow);
    elLinkTarget.focus();
  }
  showByIndex(index) {
    const elLinkTarget = this._elButtons[index];
    elLinkTarget ? this.show(elLinkTarget) : null;
  }
  _events() {
    this._elTabs.addEventListener("click", (e) => {
      const target = e.target.closest(".tabs__btn");
      if (target) {
        e.preventDefault();
        this.show(target);
      }
    });
  }
}
new ItcTabs(".tabs");

// больше одних табов на странице
// const tabs = document.querySelectorAll('.tabs');
// for (let i = 0, length = tabs.length; i < length; i++) {
//   new ItcTabs(tabs[i]);
// }

//partners open
let partnersOpenBtn = document.querySelector(
  ".partners__btn-wrapper .main-btn"
);
partnersOpenBtn.onclick = function () {
  let partnersGrid = document.querySelector(".partners-grid");
  partnersGrid.classList.toggle("partners-grid_active");
};

//tools open
let toolsOpenBtn = document.querySelector(
  ".main-btn_tools"
);
toolsOpenBtn.onclick = function () {
  let toolsGrid = document.querySelector(".tools-list__item_hidden");
  toolsGrid.classList.toggle("tools-list__item_hidden-active");
  document.querySelector('.tools-list').classList.toggle(".tools-list_active")
};



//sliders
const swiper = new Swiper('.swiper', {
 
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

$(document).ready(function () {
  //file upload
  $(".file_upload_items").MultiFile({
    max: 3,
    accept: "jpeg|jpg|png,svg",
    STRING: {
      remove: "",
      denied:
        "Выбранный тип файла (.$ext) не доступен для загрузки! Выберите .jpeg, .jpg .png или .svg",
      duplicate: "Этот файл уже прикреплён:\n$file!",
    },
  });


  $(".upload_files_button_1").click(function () {
    $("input[id^=MultiFile1]").last().click();
  });

  $(".upload_files_button_2").click(function () {
    $("input[id^=MultiFile2]").last().click();
  });

  $(".upload_files_button_3").click(function () {
    $("input[id^=MultiFile3]").last().click();
  });

  //accordion
  $(".toggle-accordion").on("click", function () {
    var accordionId = $(this).attr("accordion-id"),
      numPanelOpen = $(accordionId + " .collapse.in").length;

    $(this).toggleClass("active");

    if (numPanelOpen == 0) {
      openAllPanels(accordionId);
    } else {
      closeAllPanels(accordionId);
    }

  });

  $('[data-fancybox="preview"]').fancybox({
    thumbs : {
      autoStart : true
    }
  });

});
