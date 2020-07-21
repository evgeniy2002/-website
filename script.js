$(document).ready(function(){
  $('.slider').slick({
    arrows:false,
    dots:true,
    infinite:true,
    adaptiveHeight:false,
    autoplay:true,
    autoplaySpeed:3000,
    pauseOnFocus:true,
    pauseOnHover:false,
    draggable:false,
  });
})
$(document).ready(function(){
	$('.header_burger').click(function(event){
		$('.header_burger,.header_menu').toggleClass('active')
		$('body').toggleClass('lock')
	})
})
/*$('.wrapper').addClass('loaded');

$('.icon-menu').click(function(event){
	$(this).toggleClass('active');
	$('.menu_body').toggleClass('active');
	$('body').toggleClass('lock');
});
*/
function ibg(){
	$.each($('.ibg'), function(index,val){
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();

var speedCanvas = document.getElementById("myChart");

var pointRadius=[];
var dataFirst = {
    label: "My skills (%)",
   data: [82,72,96,84],
    borderColor: 'black',
    backgroundColor: '#DFDDE1',
    pointBackgroundColor: 'black',
    pointBorderColor:'black',
    pointLabelFontSize:20,
    pointRadius: pointRadius
  };

var speedData = {
   labels: [1,2,3,4],
  datasets: [dataFirst]
};

var chartOptions = {
  legend: {
    display: true,
    position: 'top',
    labels: {
   
      fontColor: 'black'
    }
  }
};

var lineChart = new Chart(speedCanvas, {
  type: 'line',
  data: speedData,
  options: chartOptions
});

for(var i=0;i<this.lineChart.data.datasets[1].data.length;i++){
  pointRadius.push(i);
}
lineChart.update();

let myChart = document.querySelector('#myChart')
window.onscroll = function() {
  posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  console.log(posTop)
}
