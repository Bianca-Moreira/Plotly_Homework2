

function buildMetadata(sample) {

    let metaURL = "/metadata/"+sample


    d3.json(metaURL).then((response)=> {



      console.log(response); 



      d3.select("#sample-metadata").html("");



      Object.entries(response).forEach(([key, value]) => {

        d3.select("#sample-metadata")

          .append("p")

          .text("test")

          .classed("card-text", true)

          .text(`${key}: ${value}`);

      });





    var data3 = [

      {

        type: "indicator",

        mode: "gauge+number+delta",

        value: response.WFREQ,

        title: { text: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week", font: { size: 24 } },

        // delta: { reference: 1, increasing: { color: "RebeccaPurple" } },

        gauge: {

          axis: { range: [null, 9], tickwidth: 1, tickcolor: "darkblue" },

          bar: { color: "darkblue" },

          bgcolor: "white",

          borderwidth: 2,

          bordercolor: "gray",

          steps: [

            { range: [0, 1], color: "#B2EC5D" },

            { range: [1, 2], color: "#66FF00" },

            { range: [2, 3], color: "#93C572" },

            { range: [3, 4], color: "#87A96B" },

            { range: [4, 5], color: "#78866B" },

            { range: [5, 6], color: "#556B2F" },

            { range: [6, 7], color: "#414833" },

            { range: [7, 8], color: "#85BB65" },

            { range: [8, 9], color: "#87A96B" }

          ],

          threshold: {

            line: { color: "red", width: 4 },

            thickness: 0.75,

            value: 9

          }

        }

      }

    ];

    

    var layout3 = {

      width: 500,

      height: 400,

      margin: { t: 25, r: 25, l: 25, b: 25 },

      paper_bgcolor: "lavender",

      font: { color: "darkblue", family: "Arial" }

    };

    

    Plotly.newPlot('gauge', data3, layout3);

