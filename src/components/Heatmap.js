// import React, { useEffect, useRef } from 'react';
// import * as d3 from 'd3';

// const Heatmap = ({ data }) => {
//   const svgRef = useRef(null);

//   useEffect(() => {
//     const svg = d3.select(svgRef.current);
//     const width = svg.attr('width');
//     const height = svg.attr('height');
//     const cellSize = 20; // Tamaño de cada celda del heatmap

//     // Limpia el contenido del SVG
//     svg.selectAll('*').remove();

//     // Configura la escala de colores
//     const colorScale = d3.scaleSequential(d3.interpolateViridis)
//       .domain([0, d3.max(data, d => d.value)]);

//     // Dibuja las celdas del heatmap
//     svg.selectAll('rect')
//       .data(data)
//       .enter()
//       .append('rect')
//       .attr('x', d => d.x * cellSize)
//       .attr('y', d => d.y * cellSize)
//       .attr('width', cellSize)
//       .attr('height', cellSize)
//       .style('fill', d => colorScale(d.value))
//       .style('stroke', '#fff');

//     // Agrega etiquetas de texto (opcional)
//     svg.selectAll('text')
//       .data(data)
//       .enter()
//       .append('text')
//       .attr('x', d => d.x * cellSize + cellSize / 2)
//       .attr('y', d => d.y * cellSize + cellSize / 2)
//       .attr('dy', '.35em')
//       .attr('text-anchor', 'middle')
//       .text(d => d.value)
//       .style('fill', '#000')
//       .style('font-size', '12px');

//   }, [data]);

//   return (
//     <svg ref={svgRef} width="600" height="400"></svg>
//   );
// };

// export default Heatmap;