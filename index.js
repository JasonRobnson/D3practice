//javascript


// d3.select();

// d3.selectAll();

// //manipulates dom elements 
// d3.select('h1').style('color', 'red')
// .attr('class', 'heading')
// .text('Updated h1 tag')



// d3.select('body').append('p').text('First Paragraph')
// d3.select('body').append('p').text('Second Paragraph')
// .style('color', 'blue')
// d3.select('body').append('p').text('Third Paragraph')
// .style('color', 'green')
// .text('This is an updated paragraph with D3.select')


// SECOND Tutorial


// let dataset = [1, 2, 3, 4, 5];

// d3.select('body')
//         // selects paragraph tag for each data item in array
//     .selectAll('p')
//         // passes dataset into data Method, will put data into waiting step for processing
//     .data(dataset)
//     // enter will take data items one by one, and perform operations on them.
//     .enter()
//     //appends paragraphy 
//     .append('p')
//     .text((dataset) => { return dataset; })
     
/// THIRD TUTORIAL 

//  let dataset = [5, 7, 56, 120, 180, 30, 40, 120, 160]

//  let svgWidth = 500, svgHeight = 300, barPadding = 10;
//  let barWidth = (svgWidth / dataset.length);

//  let svg = d3.select('svg')
//     .attr("width", svgWidth)
//     .attr("height", svgHeight);

// let barChart = svg.selectAll("rect")
//     .data(dataset)
//     .enter()
//     .append("rect")
//     .attr("y", (data) => { return svgHeight - data
//     })
//     .attr("height", (data) => { return data
//     })
//     .attr("width", barWidth - barPadding)
//     .attr("transform", (data, index) => {
//         let translate = [barWidth * index, 0];
//         return "translate("+translate +")"
//     });
 

// Fourth Tutorial