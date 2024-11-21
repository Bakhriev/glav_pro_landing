const mobileMenu = () => {
	const header = document.querySelector(".header");
	const burger = header.querySelector(".header__burger");
	const menu = header.querySelector(".header__menu");

	burger.addEventListener("click", () => {
		header.classList.toggle("active");
		burger.classList.toggle("active");
		menu.classList.toggle("active");
	});
};

const tab = () => {
	const tab = document.querySelector(".tab");
	const panels = tab.querySelectorAll(".tab__panel");
	const buttons = tab.querySelectorAll(".tab-btn");

	buttons.forEach((btn, i) => {
		btn.addEventListener("click", () => {
			panels.forEach(panel => {
				panel.classList.remove("active");
			});

			buttons.forEach(btn => {
				btn.classList.remove("active");
			});

			btn.classList.add("active");
			panels[i].classList.add("active");
		});
	});
};

const formValidate = () => {
	const form = document.querySelector(".form");
	const nameField = form.querySelector("#user-name");
	const numberField = form.querySelector("#user-number");
	const commentField = form.querySelector("#user-company-name");

	form.addEventListener("submit", e => {
		e.preventDefault();

		// Ваш код...
	});
};

IMask(document.getElementById("user-number"), {
	mask: "+{7}(000)000-00-00",
	lazy: false,
});

formValidate();

tab();

mobileMenu();
