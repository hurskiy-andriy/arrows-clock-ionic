(function() {

	var appController = 
			function($interval) {

				var self = this,
					hrsElm = document.getElementsByClassName("hrs-arrow")[0],
					minElm = document.getElementsByClassName("min-arrow")[0],
					secElm = document.getElementsByClassName("sec-arrow")[0],
					getDegree = 
						function(pVal, pBase) {
							return (360/(pBase)*(pVal+(pBase*0.5)));
						},
					addLeadZero = 
						function(pVal) {
							return (pVal<10 ? "0"+pVal : pVal);
						},
					setNowTime = 
						function() {
							var date = new Date(),
								hrs = date.getHours(),
								min = date.getMinutes(),
								sec = date.getSeconds();

							var hrsDegree = getDegree(hrs%12, 12),
								minDegree = getDegree(min, 60),
								secDegree = getDegree(sec, 60);

							hrsElm.style.transform = "rotate("+hrsDegree+"deg)";
							minElm.style.transform = "rotate("+minDegree+"deg)";
							secElm.style.transform = "rotate("+secDegree+"deg)";

							self.hrs = addLeadZero(hrs);
							self.min = addLeadZero(min);
							self.sec = addLeadZero(sec);
						};

				setNowTime();

				$interval(setNowTime, 1000);
			}

	app.controller(
	"AppController",
	[	"$interval",
		appController]);
})();