<script>
	import { Chart } from 'chart.js/auto';
	import { afterUpdate, onMount } from 'svelte';

  export let datasets = []
  export let labels = []
  const chartModel = {
    type: 'bar',
    data: {
      labels: [...labels],
      datasets: [...datasets]
    },
    options: {
      scales: {
        y: {beginAtZero: true}
      }
    }
  }


  let ctx
  let chart;

  afterUpdate( () => { 
    ctx = document.getElementById('canva');
    chartModel.data.datasets = [...datasets]
    
    if (chart) chart.destroy()
    chart = new Chart(ctx, chartModel)
  })

</script>

<canvas id="canva"></canvas>