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


const famine_color = '#C70039';
const epidemic_color = '#4F0152';
const line_chart_color = '#212121';
const main_width = 1800;
const main_height = 600;
const animation_dur = 3000;

const Chart = () => {
  const [fillColor, setFillColor] = useState('#900C3F')
  const [sunData, setSunData] = useState(sun_data)
  const [data, setData] = useState(full_range)


  const change_to_Dalton = (e) => {
    change_to_None()
    setData(dalton_range)
    setSunData(dalton_sun)
  }

  const change_to_Maunder = (e) => {
    change_to_None()
    setData(maunder_range)
    setSunData(maunder_sun)
  }

  const change_to_Modern = (e) => {
    change_to_None()
    setData(modern_range)
    setSunData(modern_sun)
  }

  const change_to_full_sun = (e) => {
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
      <p>Grand Solar Minimums = Epidemics and Famines? </p>
      <button
        onClick={(e) => change_to_full_sun(e)}
        style={{
          backgroundColor: "#B4B6B2",
          padding: 10,
          color: "black",
          fontSize: 12,
          margin: "auto"
        }}
      >
        Full Chart
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
        Maunder Minimum
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
        Dalton Minimum
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
        Modern Maximum
        </button>
      <div></div>

      <button
        onClick={(e) => change_to_Epidemic(e)}
        style={{
          backgroundColor: epidemic_color,
          padding: 10,
          color: "white",
          fontSize: 12,
          margin: "auto"
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
        Remove Scatterplot
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
        animate={{
          duration: animation_dur
        }}
          x="x"
          y="y"
          style={{ data: { fill: "#fcba03" } }}
          data={sunData}
        />
        <VictoryAxis
          scale={{ x: "time" }}
          orientation="bottom"
          tickFormat={x => new Date(x).getFullYear()}
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
          x={50}
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

      </VictoryChart>

      <VictoryChart
        padding={{ top: 0, left: 50, right: 50, bottom: 30 }}
        width={1800}
        height={110}
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
    </div>
  );
}

export default Chart;
