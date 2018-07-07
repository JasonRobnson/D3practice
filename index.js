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

let dataset = [0, 250, 56, 120, 180, 30, 40 ]


//  let dataset = [0, 16, 32, 64, 96, 112, 128, 144 ]


//  let dayDataset = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

//  let dayDataset = [ 0, 1, 2, 3, 4, 5, 6];

 let svgWidth = 500, svgHeight = 300, barPadding = 5;
 let barWidth = (svgWidth / dataset.length);

let svgWidth = 500, svgHeight = 300;

 let svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);

let barChart = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")

    .attr("y", (data) => { return svgHeight - data})
    .attr("height", (data) => { return data})

    .attr("width", barWidth - barPadding)
    .attr("transform", (data, index) => {
        let translate = [barWidth * index, 0];
        return "translate("+translate +")"
    })
 

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

let xScale = d3.scaleLinear()
    .domain([0, d3.max(dataset)])
    .range([0, svgWidth]);

let yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset)]) 
    .range([svgHeight, 0]);

let x_axis = d3.axisBottom().scale(xScale);
let y_axis = d3.axisLeft().scale(yScale);

svg.append("g")
    .attr("transform", "translate(50, 10)")
    .call(y_axis);

let xAxisTranslate = svgHeight - 20;

svg.append("g")
    .attr("transform", "translate(50, " + xAxisTranslate +")")
    .call(x_axis);


    //Line Chart Tutorial 


// const drawingChart = (dataset, dayDataset) => {
//     let svgWidth = 600; 
//     let svgHeight = 400;
//     let margin = { top: 20, right: 20, bottom: 30, left: 50 };
//     let width = svgWidth - margin.left - margin.right; 
//     let height = svgHeight - margin.top - margin.bottom;

//     let svg = d3.select('svg')
//     .attr("width", svgWidth)
//     .attr("height", svgHeight);

//     let g = svg.append("g")
//         .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//     let x = d3.scale.ordinal()
//         .domain(['Monday', 'Sunday'])
//         .range([0, width]);
    
//     let y = d3.scaleLinear()
//         .rangeRound([0, height]);

//     let line = d3.line()
//         .x((dayDataset) => { return x(dayDataset)})
//         .y((dataset) => { return y(dataset)})
//         x.domain(d3.extent(dayDataset, (dayDataset) => { return dayDataset}));
//         y.domain(d3.extent(dataset, (dataset) => { return dataset}));

//     g.append("g")
//         .attr("transform", "translate(0," + height + ")")
//         .call(d3.axisBottom(x))
//         .append("text")
//         .attr("fill", "#000")
//         .select(".domain")
//         .remove();

//     g.append("g")
//         .call(d3.axisLeft(y))
//         .append("text")
//         .attr("fill", "#000")
//         .attr("transform", "rotate(-90)")
//         .attr("y", 6)
//         .attr("dy", "1em")
//         .attr("text-anchor", "end")
//         .text("Water (Cups)");

//     g.append("g")
//         .datum(dataset)
//         .attr("fill", "none")
//         .attr("stroke", "steelblue")
//         .attr("stroke-linejoin", "round")
//         .attr("stroke-linecap", "round")
//         .attr("stroke-width", 1.5)
//         .attr("d", line);  

// }

// drawingChart(dataset, dayDataset)