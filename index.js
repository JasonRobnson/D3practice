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

//  let dataset = [40, 250, 56, 120, 180, 30, 40, 120, 160]

//  let svgWidth = 500, svgHeight = 300, barPadding = 5;
//  let barWidth = (svgWidth / dataset.length);

// let svgWidth = 500, svgHeight = 300;

//  let svg = d3.select('svg')
//     .attr("width", svgWidth)
//     .attr("height", svgHeight);

// let barChart = svg.selectAll("rect")
//     .data(dataset)
//     .enter()
//     .append("rect")

//     .attr("y", (data) => { return svgHeight - data})
//     .attr("height", (data) => { return data})

//     .attr("width", barWidth - barPadding)
//     .attr("transform", (data, index) => {
//         let translate = [barWidth * index, 0];
//         return "translate("+translate +")"
//     })
 

// Fourth Tutorial adding labels

// let text = svg.selectAll("text")
//     .data(dataset)
//     .enter()
//     .append("text")
//     .text((data) => {
//         return data
//     })
//     .attr("y", (data, index) => {
//         return svgHeight - data - 2;
//     })
//     .attr("x", (data, index) => {
//         return barWidth * index;
//     })
//     .attr("fill", "#FF0800") 

// Fifth Tutorial adding Scales

// let xScale = d3.scaleLinear()
//     .domain([0, d3.max(dataset)])
//     .range([0, svgWidth]);

// let yScale = d3.scaleLinear()
//     .domain([0, d3.max(dataset)]) 
//     .range([svgHeight, 0]);

// let x_axis = d3.axisBottom().scale(xScale);
// let y_axis = d3.axisLeft().scale(yScale);

// svg.append("g")
//     .attr("transform", "translate(50, 10)")
//     .call(y_axis);

// let xAxisTranslate = svgHeight - 20;

// svg.append("g")
//     .attr("transform", "translate(50, " + xAxisTranslate +")")
//     .call(x_axis);