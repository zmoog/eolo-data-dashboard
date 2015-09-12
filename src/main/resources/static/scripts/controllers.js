(function() {

	angular.module('eolo')
		.controller('DashboardCtrl', ['QuotaService', '$log', function(QuotaService, $log){
			
			var self = this;

			var quota = QuotaService.get().then(function(response) {

				self.quota = response.data;

				self.dateNextReset = moment(self.quota.data.nextReset, 'YYYY-MM-DD HH:mm:ss');
				// $log.info(self.quota.data.nextReset, self.dateNextReset, self.dateNextReset.toString());


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