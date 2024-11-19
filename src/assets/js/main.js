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

mobileMenu();
