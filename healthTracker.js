

// This line deals with setting up the scale on the x and y axis
let dataset = [4, 18, 96, 120, 180, 30, 40, 120, 160]


// let svgWidth = 500, svgHeight = 300;

// let svg = d3.select('svg')
//     .attr("width", svgWidth)
//     .attr("height", svgHeight);







// //BAR CHART BELOW WITH LABELS

// let dataset = [40, 250, 56, 120, 180, 30, 40, 120, 160]

let svgWidth = 500, svgHeight = 300, barPadding = 5;
let barWidth = (svgWidth / dataset.length);


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
   }).attr("fill", "00ff00")


   //BarChart Above, chart labels below

   let text = svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text((data) => {
        return data
    })
    .attr("y", (data, index) => {
        return svgHeight - data - 2;
    })
    .attr("x", (data, index) => {
        return barWidth * index;
    })
    .attr("fill", "#FF0800") 


//     let xScale = d3.scaleLinear()
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
//End of the scale x and y axis code 