(function() {


	function bytesToSize (bytes) {
	  var sizes = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
	  if (bytes == 0) return 'n/a';
	  var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
	  return ((i == 0)? (bytes / Math.pow(1024, i)) : (bytes / Math.pow(1024, i)).toFixed(1)) + ' ' + sizes[i];
	};

	angular.module('eolo')
		.controller('DashboardCtrl', ['QuotaService', '$log', function(QuotaService, $log){
			
			var self = this;

			var quota = QuotaService.get().then(function(response) {

				$log.info(response.data);

				self.quota = response.data;

				self.percentage = self.quota.data.used / self.quota.data.quota * 100.0; 


				self.nextReset = new Date(Date.parse(self.quota.data.nextReset));

				$log.info(self.quota.data.nextReset, self.nextReset, self.nextReset.toString());


			   	$('#chart-container').highcharts({
			        chart: {
			            plotBackgroundColor: null,
			            plotBorderWidth: 0,
			            plotShadow: false
			        },
			        title: {
			            text: 'Data<br>usage',
			            align: 'center',
			            verticalAlign: 'middle',
			            y: 40
			        },
			        tooltip: {
			            pointFormat: '{series.name}: <b>{point.percentage:.1f}% ({point.y})</b>'
			        },
			        plotOptions: {
			            pie: {
			                dataLabels: {
			                    enabled: true,
			                    distance: -50,
			                    style: {
			                        fontWeight: 'bold',
			                        color: 'white',
			                        textShadow: '0px 1px 2px black'
			                    }
			                },
			                startAngle: -90,
			                endAngle: 90,
			                center: ['50%', '75%']
			            }
			        },
			        series: [{
			            type: 'pie',
			            name: 'Data used',
			            innerSize: '50%',
			            data: [
			                ['Used', self.quota.data.used],
			                ['Available', self.quota.data.quota - self.quota.data.used],
			                {
			                    name: 'Proprietary or Undetectable',
			                    y: 0.2,
			                    dataLabels: {
			                        enabled: false
			                    }
			                }
			            ]
			        }]
			    });



			});

		}]);

})();