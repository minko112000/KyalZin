const textMonth = month => {
  let text_month
  switch (month) {
    case 0:
      text_month = 'Jan'
      break;
    case 1:
      text_month = 'Feb'
      break;
    case 2:
      text_month = 'Mar'
      break;
    case 3:
      text_month = 'Apr'
      break;
    case 4:
      text_month = 'May'
      break;
    case 5:
      text_month = 'Jun'
      break;
    case 6:
      text_month = 'Jul'
      break;
    case 7:
      text_month = 'Aug'
      break;
    case 8:
      text_month = 'Sep'
      break;
    case 9:
      text_month = 'Oct'
      break;
    case 10:
      text_month = 'Nov'
      break;
    
    default:
      text_month = 'Dec'
  }
  return text_month
}

let labels = []
let visitors_chart_data = []
let income_chart_data = []
let cashout_chart_data = []
let color_12 = ['#064465', '#aa2b24', '#40653c', '#82c7eb', '#6e6696', '#2f8fb7','#013062', '#fab574', '#be6a29', '#fff', '#7c5c3c', '#40653c']


const getVisitorsData = () => {
  let DATE = new Date()
  let this_year = DATE.getFullYear()
  let this_month = textMonth(DATE.getMonth())
  let today = DATE.getDate()
  
  let data = {
    date: today,
    month: this_month,
    year: this_year
  }
  $.ajax({
      url: 'PHP/CHART.php',
      type: 'POST',
      data: data,
      success: function (r) {
        console.log(r)
        let datas = JSON.parse(r)
        console.log(datas)
        for (let i = 0; i < datas.length; i ++) {
          visitors_chart_data.push(datas[i])
          income_chart_data.push(datas[i] + 2)
          cashout_chart_data.push(datas[i] + 1)
        }
        console.log(visitors_chart_data)
        console.log(income_chart_data)
        console.log(cashout_chart_data)
        new Chart($('#visitors-chart'), {
          type: 'line',
          data: {
            labels: labels,
            datasets: [
              {
                label: '  Visitors ',
                borderCapStyle: 'square',
                borderWidth: 1,
                borderColor: '#45b945',
                pointHitRadius: 10,
                pointStyle: 'rectRot',
                tension: .5,
                hoverBorderColor: color_12,
                hoverBackgroundColor: color_12,
                pointBorderColor: color_12,
                pointBackgroundColor: color_12,
                data: visitors_chart_data,
              },
              {
                label: '  Income ',
                borderCapStyle: 'square',
                borderWidth: 1,
                borderColor: '#2f599d',
                pointHitRadius: 10,
                pointStyle: 'rectRot',
                tension: .5,
                hoverBorderColor: color_12,
                hoverBackgroundColor: color_12,
                pointBorderColor: color_12,
                pointBackgroundColor: color_12,
                data: income_chart_data,
              },
              {
                label: '  Cash out ',
                borderCapStyle: 'square',
                borderWidth: 1,
                borderColor: '#a80a0a',
                pointHitRadius: 10,
                pointStyle: 'rectRot',
                tension: .5,
                hoverBorderColor: color_12,
                hoverBackgroundColor: color_12,
                pointBorderColor: color_12,
                pointBackgroundColor: color_12,
                data: cashout_chart_data,
              },
            ]
          },
          options: {
            scales: {
              x: {
                ticks: {
                  color: "#a80a0a",
                  
                },
                grid: {
                  color: '#171717'
                }
              },
              y: {
                ticks: {
                  color: "#45b945"
                },
                grid: {
                  color: '#171717'
                }
              },
            },
          }
        });
      }
  })
  
  labels.unshift(this_month + ' ' + today)
  for (let i = 0; i < 11; i ++) {
    today -= 1
    labels.unshift(this_month + ' ' + today)
  }
}

window.addEventListener('load', () => {
  getVisitorsData()
})


const age_chart = document.getElementById('age-chart');
let one_age = 470
let two_age = 250
let three_age = 25
let four_age = 50
new Chart(age_chart, {
  type: 'doughnut',
  data: {
    labels: ['18 - 24', '25 - 34', '35 - 44', '45 - 54'],
    datasets: [{
      label: '  Users ',
      hoverBorderColor: '#00001f',
      borderWidth: 3,
      hoverBorderWidth: 1,
      borderColor: '#00001f',
      hoverBackgroundColor: ['#c75c60','#717ecd', '#4ab471', '#f3ae4e'],
      backgroundColor: ['#c75c60','#717ecd', '#4ab471', '#f3ae4e'],
      data: [one_age, two_age, three_age, four_age],
    }]
  }
});


const gender_chart = document.getElementById('gender-chart');
let male = 470
let female = 250
new Chart(gender_chart, {
  type: 'pie',
  data: {
    labels: ['Male', 'Female'],
    datasets: [{
      label: '  Users ',
      hoverBorderColor: '#00001f',
      hoverBackgroundColor: ['#5621cf', '#2f599d'],
      hoverBorderWidth: 1,
      borderWidth: 3,
      borderColor: '#00001f',
      backgroundColor: ['#5621cf', '#2f599d'],
      data: [male, female],
    }]
  }
});