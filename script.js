const notificationArr = document.querySelectorAll(".notification");
const readAllBtn = document.querySelector(".all-read");
const numberMsg = document.querySelector(".hm-msg");

const newNotifications = [];

// Gett how many new notification

const getNotifications = function () {
	notificationArr.forEach(function (e) {
		const ifNew = e.classList.contains("new-notification");
		if (ifNew === true) {
			newNotifications.push(e);
		}
	});
};

getNotifications();
console.log(newNotifications);

readAllBtn.addEventListener("click", function () {
	console.log(newNotifications);
	newNotifications.forEach((el) => {
		console.log(el.classList);
		el.classList.remove("new-notification");
	});
	numberMsg.textContent = 0;
});

console.log(newNotifications);
