// 所有 Chart 設定統一管理（根據 canvas id 對應資料）
const chartConfigs = {
  'step1-chart': {
    type: 'bar',
    data: {
      labels: ['玉', '雪', '阿', '其他'],
      datasets: [{
        label: '第一步：機率分布',
        data: [80, 10, 5, 5],
        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#cccccc'],
      }]
    },
    options: {
      plugins: {
        legend: { display: false },
        datalabels: {
          anchor: 'end',
          align: 'end',
          color: '#FFF',
          font: { weight: 'bold', size: 16 },
          formatter: value => value + '%'
        }
      },
      scales: {
        y: { beginAtZero: true, max: 100, title: {display:true,text:'機率(%)'}, ticks:{stepSize: 25} },
        x: { ticks: { font: { size: 17 }, color: '#FFF' } }
      }
    },
    plugins: [ChartDataLabels]
  },
  'step2-chart': {
    type: 'bar',
    data: {
      labels: ['山', '里', '其他'],
      datasets: [{
        label: '第二步：機率分布',
        data: [95, 3, 2],
        backgroundColor: ['#ff6384', '#36a2eb', '#cccccc']
      }]
    },
    options: {
      plugins: {
        legend: { display: false },
        datalabels: {
          anchor: 'end',
          align: 'end',
          color: '#FFF',
          font: { weight: 'bold', size: 16 },
          formatter: value => value + '%'
        }
      },
      scales: {
        y: { beginAtZero: true, max: 100, title: {display:true,text:'機率(%)'}, ticks:{stepSize: 25} },
        x: { ticks: { font: { size: 17 }, color: '#FFF' } }
      }
    },
    plugins: [ChartDataLabels]
  },
  'step3-chart': {
    type: 'bar',
    data: {
      labels: ['。', '峰', '其他'],
      datasets: [{
        label: '第三步：機率分布',
        data: [70, 20, 10],
        backgroundColor: ['#ff6384', '#36a2eb', '#cccccc']
      }]
    },
    options: {
      plugins: {
        legend: { display: false },
        datalabels: {
          anchor: 'end',
          align: 'end',
          color: '#FFF',
          font: { weight: 'bold', size: 16 },
          formatter: value => value + '%'
        }
      },
      scales: {
        y: { beginAtZero: true, max: 100, title: {display:true,text:'機率(%)'}, ticks:{stepSize: 25} },
        x: { ticks: { font: { size: 17 }, color: '#FFF' } }
      }
    },
    plugins: [ChartDataLabels]
  },
  'step4-chart': {
    type: 'bar',
    data: {
      labels: ['[end]', '其他'],
      datasets: [{
        label: '第四步：機率分布',
        data: [95, 5],
        backgroundColor: ['#36a2eb', '#cccccc']
      }]
    },
    options: {
      plugins: {
        legend: { display: false },
        datalabels: {
          anchor: 'end',
          align: 'end',
          color: '#FFF',
          font: { weight: 'bold', size: 16 },
          formatter: value => value + '%'
        }
      },
      scales: {
        y: { beginAtZero: true, max: 100, title: {display:true,text:'機率(%)'}, ticks:{stepSize: 25} },
        x: { ticks: { font: { size: 17 }, color: '#FFF' } }
      }
    },
    plugins: [ChartDataLabels]
  }
};

// Reveal.js fragment顯示時初始化canvas
Reveal.on('fragmentshown', function(event) {
  // 支援同一fragment有多個canvas
  let canvases = event.fragment.querySelectorAll('canvas');
  canvases.forEach(canvas => {
    // 若已初始化過則略過
    if (!canvas.hasChart) {
      const cfg = chartConfigs[canvas.id];
      if (cfg) {
        new Chart(canvas.getContext('2d'), cfg);
        canvas.hasChart = true;
      }
    }
  });
});

// 支援 slide 顯示時（如果canvas不是fragment而是slide主內容）
Reveal.on('slidechanged', function(event) {
  // 在新slide顯示時檢查所有canvas
  let canvases = event.currentSlide.querySelectorAll('canvas');
  canvases.forEach(canvas => {
    if (!canvas.hasChart) {
      const cfg = chartConfigs[canvas.id];
      if (cfg) {
        new Chart(canvas.getContext('2d'), cfg);
        canvas.hasChart = true;
      }
    }
  });
});