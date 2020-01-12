  new Morris.Bar({
  // ID of the element in which to draw the chart.
  element: 'myfirstchart',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { month: 'Jan', count: 20 },
    { month: 'Feb', count: 10 },
    { month: 'Mar', count: 5 },
    { month: 'Apr', count: 5 },
    { month: 'May', count: 20 }
  ],
  // The name of the data record attribute that contains x-values.
  xkey: 'month',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['count'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['count'],
  barColors: ['#401801'],
  hideHover: true,
  });
