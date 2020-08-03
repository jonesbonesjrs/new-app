import React, { useState } from "react";
import { sun_data } from './sun_data'
import { epi_labels } from './epi_labels'
import { fam_labels } from './fam_labels'


import {
  VictoryChart,
  VictoryLine,
  VictoryAxis,
  VictoryArea,
  VictoryScatter,
  VictoryTooltip,
  VictoryLegend,
  Border,
  VictoryLabel

} from "victory";


const maunder_sun = sun_data.filter(item => (item.x >= new Date(1645, 1, 1)) & (item.x <= new Date(1715, 1, 1)));
const maunder_fam = fam_labels.filter(item => (item.x >= new Date(1645, 1, 1)) & (item.x <= new Date(1715, 1, 1)));
const maunder_epi = epi_labels.filter(item => (item.x >= new Date(1645, 1, 1)) & (item.x <= new Date(1715, 1, 1)));

const dalton_sun = sun_data.filter(item => (item.x >= new Date(1790, 1, 1)) & (item.x <= new Date(1820, 1, 1)));
const dalton_fam = fam_labels.filter(item => (item.x >= new Date(1790, 1, 1)) & (item.x <= new Date(1820, 1, 1)));
const dalton_epi = epi_labels.filter(item => (item.x >= new Date(1790, 1, 1)) & (item.x <= new Date(1820, 1, 1)));

const modern_sun = sun_data.filter(item => (item.x >= new Date(1914, 1, 1)) & (item.x <= new Date(2008, 1, 1)));
const modern_fam = fam_labels.filter(item => (item.x >= new Date(1914, 1, 1)) & (item.x <= new Date(2008, 1, 1)));
const modern_epi = epi_labels.filter(item => (item.x >= new Date(1914, 1, 1)) & (item.x <= new Date(2008, 1, 1)));

const maunder_range = [
  { x: new Date(1645, 1, 1), y: 0 },
  { x: new Date(1715, 1, 1), y: 96.7 }
];
const dalton_range = [
  { x: new Date(1790, 1, 1), y: 0 },
  { x: new Date(1820, 1, 1), y: 149.8  }
];
const modern_range = [
  { x: new Date(1914, 1, 1), y: 0 },
  { x: new Date(2008, 1, 1), y: 269.3 }
];
const full_range = [
  { x: new Date(1610, 1, 1), y: 0 },
  { x: new Date(2020, 1, 1), y: 269.3 }
];



const maunder_annote = [
  { x: new Date(1665, 1, 1), y: 90, label:"Maunder Minimum\nEpidemics/Decade: 2.6\nAvg. Epidemic Severity: 3.2\nFamines/Decade: 3.0\nAvg. Famine Severity: 3.0" }
];
const dalton_annote = [
  { x: new Date(1798, 10,8.5), y: 139.4209, label:"Dalton Minimum\nEpidemics/Decade: 3.0\nAvg. Epidemic Severity: 3.3\nFamines/Decade: 2.7\nAvg. Famine Severity: 3.6" }
];
const modern_annote = [
  { x: new Date(1940, 6, 25.56), y: 250.6412, label:"Modern Maximum\nEpidemics/Decade: 4.3\nAvg. Epidemic Severity: 2.2\nFamines/Decade: 6.1\nAvg. Famine Severity: 3.5" }
];
const full_annote = [
  { x: new Date(1727, 1, 22), y: 250.6412, label: "1610-2020\nEpidemics/Decade: 3.4\nAvg. Epidemic Severity: 2.7\nFamines/Decade: 3.7\nAvg. Famine Severity: 3.3" }
];

const famine_color = '#C70039';
const epidemic_color = '#4F0152';
const line_chart_color = '#212121';
const main_width = 1800;
const main_height = 550;
const animation_dur = 2500;
const area_fill = "#fcba03";

const Chart = () => {
  const [fillColor, setFillColor] = useState('#900C3F')
  const [sunData, setSunData] = useState(sun_data)
  const [data, setData] = useState(full_range)
  const [annotation, setAnnote] = useState(full_annote)
  const [annote_fill, setAnnoteFill] = useState('#B4B6B2')


  const change_to_Dalton = (e) => {
    setAnnote(dalton_annote)
    setAnnoteFill('pink')
    change_to_None()
    setData(dalton_range)
    setSunData(dalton_sun)
  }
  const change_to_Maunder = (e) => {
    setAnnote(maunder_annote)
    setAnnoteFill('pink')
    change_to_None()
    setData(maunder_range)
    setSunData(maunder_sun)
  }
  const change_to_Modern = (e) => {
    setAnnote(modern_annote)
    setAnnoteFill('#9FCE78')
    change_to_None()
    setData(modern_range)
    setSunData(modern_sun)
  }
  const change_to_full_sun = (e) => {
    setAnnote(full_annote)
    setAnnoteFill('#B4B6B2')
    change_to_None()
    setData(full_range)
    setSunData(sun_data)
  }
  const change_to_Epidemic = (e) => {
    setFillColor(epidemic_color)
    if (sunData === sun_data) {
      setData(epi_labels)
    } else if (sunData === dalton_sun) {
      setData(dalton_epi)
    } else if (sunData === maunder_sun) {
      setData(maunder_epi)
    } else if (sunData === modern_sun) {
      setData(modern_epi)
    }
  }
  const change_to_Famine = (e) => {
    setFillColor(famine_color)
    if (sunData === sun_data) {
      setData(fam_labels)
    } else if (sunData === dalton_sun) {
      setData(dalton_fam)
    } else if (sunData === maunder_sun) {
      setData(maunder_fam)
    } else if (sunData === modern_sun) {
      setData(modern_fam)
    }
  }
  const change_to_None = (e) => {
    if (sunData === sun_data) {
      setData(full_range)
    } else if (sunData === dalton_sun) {
      setData(dalton_range)
    } else if (sunData === maunder_sun) {
      setData(maunder_range)
    } else if (sunData === modern_sun) {
      setData(modern_range)
    }
  }



  return (
    <div>
      <h1 style={{backgroundColor: area_fill, padding: "5px"}}>Grand Solar Minimum = Epidemic and Famine?</h1>
      <p style={{textAlign:'left', fontSize: 14}}>
          Recently there have been murmurings in the media regarding the upcoming (or rather) the Solar Minimum that we are currently in. 
          <br /> Along with the murmurings a theory has emerged that Solar Minimums bring Epidemic and Famine.. this visualization takes a data-driven dive into that theory.
          <br /><br />User Instructions:
          <br />1. Select Slide 1 to display the Annual Sunspot Average for the Maunder Minimum
          <br />2. Select Epidemic/Famine to add a scatterplot of the selected Event type
          <br />&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;   Mousing over the circle will open a tooltip and display Event information
          <br />&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;   Bigger circle size indicates higher severity of the Event
          <br />&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;   'Clear Scatterplot' will remove the Event while retaining the current x-axis view
          <br />3. Repeat steps 1-2 for Slides 2 and 3
          <br />4. Optionally, explore the entire dataset by repeating steps 1-2 for Slide 0
      </p>
      <button
        onClick={(e) => change_to_full_sun(e)}
        style={{
          backgroundColor: "#B4B6B2",
          padding: 10,
          color: "black",
          fontSize: 12,
          margin: "auto",
          
        }}
      >
        Slide 0<br />Full Chart
        </button>
      <button
        onClick={(e) => change_to_Maunder(e)}
        style={{
          backgroundColor: "pink",
          padding: 10,
          color: "black",
          fontSize: 12,
          margin: "auto"
        }}
      >
        Slide 1<br />Maunder Minimum
        </button>
      <button
        onClick={(e) => change_to_Dalton(e)}
        style={{
          backgroundColor: 'pink',
          padding: 10,
          color: "black",
          fontSize: 12,
          margin: "auto"
        }}
      >
        Slide 2<br />Dalton Minimum
        </button>
      <button
        onClick={(e) => change_to_Modern(e)}
        style={{
          backgroundColor: '#9FCE78',
          padding: 10,
          color: "black",
          fontSize: 12,
          margin: "auto"
        }}
      >
        Slide 3<br />Modern Maximum
        </button>
      
      <button
        onClick={(e) => change_to_Epidemic(e)}
        style={{
          backgroundColor: epidemic_color,
          padding: 10,
          color: "white",
          fontSize: 12,
          marginLeft: "150px"
        }}
      >
        Epidemic
        </button>
      <button
        onClick={(e) => change_to_Famine(e)}
        style={{
          backgroundColor: famine_color,
          padding: 10,
          color: "white",
          fontSize: 12,
          margin: "auto"
        }}
      >
        Famine
        </button>
      <button
        onClick={(e) => change_to_None(e)}
        style={{
          backgroundColor: '#B4B6B2',
          padding: 10,
          color: "black",
          fontSize: 12,
          margin: "auto"
        }}
      >
        Clear Scatterplot
        </button>
      <VictoryChart
        animate={{
          duration: animation_dur
        }}
        width={main_width}
        height={main_height}
        scale={{ x: "time" }}
      >
        <VictoryArea
          x="x"
          y="y"
          style={{ data: { fill: area_fill } }}
          data={sunData}
        />
        <VictoryAxis scale={{ x: "time" }}
          orientation="bottom"
          tickFormat={x => new Date(x).getFullYear()
          }
        />
        <VictoryAxis dependentAxis={true}
          label="Annual Sunspot Average"
          style={{
            axis: { stroke: "#756f6a" },
            axisLabel: { fontSize: 18, padding: 32 },
            ticks: { stroke: "grey", size: 5 },
            tickLabels: { fontSize: 15, padding: 0 }
          }}
        />

        <VictoryLegend
          x={70}
          y={0}
          symbolSpacer={10}
          gutter={20}
          borderComponent={
            <Border width={275} />}
          title="Size of Bubble Represents Event Severity"
          orientation="horizontal"
          style={{ border: { stroke: "white" }, title: { fontSize: 14 } }}
          data={[
            { name: "Epidemic", symbol: { fill: epidemic_color } },
            { name: "Famine", symbol: { fill: famine_color } }
          ]}
        />
        <VictoryLine
          style={{
            data: { stroke: line_chart_color }
          }}
          width={1200}
          data={sunData} x="x" y="y"
        />
        <VictoryScatter
          size={({ datum }) => datum.s * 2.5 + 1}
          style={{ data: { fill: fillColor } }}
          symbol="circle"
          data={data} x="x" y="y"
          labelComponent={
            <VictoryTooltip
              orientation="top"
              pointerLength={10}
            />}
        />

        <VictoryScatter
          data={annotation }
          style={{ data: { fill: "white" } }}
          labelComponent={
            <VictoryLabel
              backgroundStyle={{ fill: annote_fill }}
              textAnchor="start"
              backgroundPadding={{bottom: 18, right:20}}

            />}
        />

      </VictoryChart>

      <VictoryChart
        padding={{ top: 0, left: 50, right: 50, bottom: 30 }}
        width={1800}
        height={90}
        scale={{ x: "time" }}
      >
        <VictoryLine
          style={{
            data: { stroke: line_chart_color }
          }}
          data={sun_data} x="x" y="y"
        />
        <VictoryScatter
          size={({ datum }) => datum.s * 0.75 + 1}
          style={{ data: { fill: fillColor } }}
          symbol="circle"
          data={data} x="x" y="y"
          labels={() => ''} 
          labelComponent={
            <VictoryTooltip
              orientation="top"
              pointerLength={10}
            />}
        />
        <VictoryLine
          style={{ data: { stroke: "#FF5733" } }}
          data={[
            { x: new Date(1645, 1, 1), y: 0 },
            { x: new Date(1645, 1, 1), y: 275 }
          ]}
        />
        <VictoryLine
          style={{ data: { stroke: "#FF5733" } }}
          data={[
            { x: new Date(1715, 1, 1), y: 0 },
            { x: new Date(1715, 1, 1), y: 275 }
          ]}
        />
        <VictoryScatter
          domain={[-10, 10]}
          size={0}
          data={[
            { x: new Date(1675, 1, 1), y: 200 },
          ]}
          labels={() => ["Maunder Minimum"]}
          labelComponent={
            <VictoryLabel
              backgroundStyle={{ fill: "pink" }}
              backgroundPadding={10}

            />}
        />
        <VictoryLine
          style={{ data: { stroke: "#FF5733" } }}
          data={[
            { x: new Date(1790, 1, 1), y: 0 },
            { x: new Date(1790, 1, 1), y: 275 }
          ]}
        />
        <VictoryLine
          style={{ data: { stroke: "#FF5733" } }}
          data={[
            { x: new Date(1820, 1, 1), y: 0 },
            { x: new Date(1820, 1, 1), y: 275 }
          ]}
        />
        <VictoryScatter
          domain={[-10, 10]}
          size={0}
          data={[
            { x: new Date(1805, 1, 1), y: 200 },
          ]}
          labels={() => ["Dalton Minimum"]}
          labelComponent={
            <VictoryLabel
              backgroundStyle={{ fill: "pink" }}
              backgroundPadding={8}

            />}
        />

        <VictoryLine
          style={{ data: { stroke: "green" } }}
          data={[
            { x: new Date(1914, 1, 1), y: 0 },
            { x: new Date(1914, 1, 1), y: 275 }
          ]}
        />
        <VictoryLine
          style={{ data: { stroke: "green" } }}
          data={[
            { x: new Date(2008, 1, 1), y: 0 },
            { x: new Date(2008, 1, 1), y: 275 }
          ]}
        />
        <VictoryScatter
          domain={[-10, 10]}
          size={0}
          data={[
            { x: new Date(1930, 1, 1), y: 200 },
          ]}
          labels={() => ["Modern Maximum"]}
          labelComponent={
            <VictoryLabel
              backgroundStyle={{ fill: "#9FCE78 ", opacity: 0.6 }}
              backgroundPadding={8}

            />}
        />
      </VictoryChart>
      <p style={{textAlign:'left', fontSize: 14}}>
      Results:
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp; Epidemic Frequency, from Low to High: Maunder, Dalton, 1610-2020, Modern <br />
      &nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp; Epidemic Severity, from Low to High: Modern, 1610-2020, Maunder, Dalton <br />
      &nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp; Famine Frequency, from Low to High: Dalton, Maunder, 1610-2020, Modern <br />
      &nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp; Famine Severity, from Low to High: Maunder, 1610-2020, Modern, Dalton <br />
      Conclusions:<br />
      &nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp; Epidemics and Famines occured most frequently during the Modern Maximum but they were the most severe during the Dalton Minimum. High Frequency of Modern Maximum may be due to advances in informational technology<br />
      &nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp; Epidemics are least severe in the Modern Maximum most likely is due to the advantages of modern medicine<br />
      &nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp; Only Dalton Famines are more severe than Modern Famines and Modern Famines occur more than twice as often<br />
      &nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp; No evidence of increase in Famine/Epidemic frequency during Grand Solar Minimum, the opposite may be true in fact.
      </p>
    </div>
  );
}

export default Chart;
