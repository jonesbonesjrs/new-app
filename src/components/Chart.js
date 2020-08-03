import React from "react";
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

// ZoomContainer is the top graph
// BrushContainer is the bottom graph




const maunder_sun = sun_data.filter(item => (item.x >= new Date(1645, 1, 1)) & (item.x <= new Date(1715, 1, 1)));
const maunder_fam = fam_labels.filter(item => (item.x >= new Date(1645, 1, 1)) & (item.x <= new Date(1715, 1, 1)));
const maunder_epi = epi_labels.filter(item => (item.x >= new Date(1645, 1, 1)) & (item.x <= new Date(1715, 1, 1)));

const dalton_sun = sun_data.filter(item => (item.x >= new Date(1790, 1, 1)) & (item.x <= new Date(1820, 1, 1)));
const dalton_fam = fam_labels.filter(item => (item.x >= new Date(1790, 1, 1)) & (item.x <= new Date(1820, 1, 1)));
const dalton_epi = epi_labels.filter(item => (item.x >= new Date(1790, 1, 1)) & (item.x <= new Date(1820, 1, 1)));

const modern_sun = sun_data.filter(item => (item.x >= new Date(1914, 1, 1)) & (item.x <= new Date(2008, 1, 1)));
const modern_fam = fam_labels.filter(item => (item.x >= new Date(1914, 1, 1)) & (item.x <= new Date(2008, 1, 1)));
const modern_epi = epi_labels.filter(item => (item.x >= new Date(1914, 1, 1)) & (item.x <= new Date(2008, 1, 1)));


const famine_color = '#C70039';
const epidemic_color = '#4F0152';
const line_chart_color = '#212121';
const main_width = 1800;
const main_height = 600;
const animation_dur = 1000;

class Chart extends React.Component {
  state = {
    fillcolor: "#900C3F"
  };


  constructor(props) {
    super(props);

    this.setState(state => ({
      sun: sun_data
    }));
  }

  change_to_Dalton(){
        this.change_to_None()
        this.setState(state => ({
            sun: dalton_sun
        }));
    }
  change_to_Maunder(){
        this.change_to_None()
        this.setState(state => ({
            sun: maunder_sun
        }));
    }
  change_to_Modern(){
        this.change_to_None()
        this.setState(state => ({
          sun: modern_sun
        }));
    }
  change_to_full_sun(){
    this.change_to_None()
    this.setState(state => ({
      sun: sun_data
    }));
  }
  change_to_Epidemic(){
    this.setState(state => ({fillcolor: epidemic_color}))
    if (this.state.sun === sun_data) {this.setState(state => ({data: epi_labels}));   
    } else if (this.state.sun === dalton_sun) {this.setState(state => ({data: dalton_epi }));
    } else if (this.state.sun === maunder_sun) {this.setState(state => ({data: maunder_epi}));
    } else if (this.state.sun === modern_sun) {this.setState(state => ({data: modern_epi}));
    }
  }
  
  change_to_Famine(){
    this.setState(state => ({fillcolor: famine_color}))
    if (this.state.sun === sun_data) {this.setState(state => ({data: fam_labels}));   
    } else if (this.state.sun === dalton_sun) {this.setState(state => ({data: dalton_fam}));
    } else if (this.state.sun === maunder_sun) {this.setState(state => ({data: maunder_fam}));
    } else if (this.state.sun === modern_sun) {this.setState(state => ({data: modern_fam}));
    }
  }
  change_to_None(){
    if (this.state.sun === sun_data) {this.setState(state => ({data: null}));   
    } else if (this.state.sun === dalton_sun) {this.setState(state => ({data: null}));
    } else if (this.state.sun === maunder_sun) {this.setState(state => ({data: null}));
    } else if (this.state.sun === modern_sun) {this.setState(state => ({data: null}));
    }
  }
  render() {
    
    return (
      <div>
        <p>Grand Solar Minimums = Epidemics and Famines? </p>
        <button
          onClick={() => this.change_to_full_sun()}
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
          onClick={() => this.change_to_Maunder()}
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
          onClick={() => this.change_to_Dalton()}
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
          onClick={() => this.change_to_Modern()}
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
          onClick={() => this.change_to_Epidemic()}
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
          onClick={() => this.change_to_Famine()}
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
          onClick={() => this.change_to_None()}
          style={{
            backgroundColor: '#B4B6B2',
            padding: 10,
            color: this.state.textcolor,
            fontSize: 12,
            margin: "auto"
          }}
        >
          Remove Scatterplot 
        </button>
        <VictoryChart
          animate={{ duration: animation_dur }}
          width={main_width}
          height={main_height}
          scale={{ x: "time" }}
              
        >
          <VictoryArea
            animate={{ duration: animation_dur }}
            x="x"
            y="y"
            style={{ data: { fill: "#fcba03" } }}
            data={this.state.sun}
          />
          <VictoryAxis 
            scale={{ x: "time" }} 
            orientation="bottom"
            tickFormat={x => new Date(x).getFullYear()}
            animate={{
              duration: animation_dur
            }}
          />
          <VictoryAxis dependentAxis={true}
            label = "Annual Sunspot Average"
            style={{
              axis: {stroke: "#756f6a"},
              axisLabel: {fontSize: 18, padding: 32},
              ticks: {stroke: "grey", size: 5},
              tickLabels: {fontSize: 15, padding: 0}
            }}
            animate={{
              duration: animation_dur
            }}
          />

          <VictoryLegend
            x = {50}
            y = {-5}
            symbolSpacer={10}
            gutter={20}
            borderComponent={
            <Border width={275}/>}
            title = "Size of Bubble Represents Event Severity"
            orientation = "horizontal"
            style={{ border: { stroke: "white" }, title: {fontSize: 14 } }}
            data={[
              { name: "Epidemic", symbol: { fill: epidemic_color } },
              { name: "Famine", symbol: {fill: famine_color}}
            ]}
          />
          <VictoryLine
            style={{
              data: { stroke: line_chart_color }
            }}
            width={1200}
            data={this.state.sun} x = "x" y = "y"  
            animate={{ duration: animation_dur }}
          />  
          <VictoryScatter 
            size={({ datum }) => datum.s * 2.5 + 1 }
            style={{ data: { fill: this.state.fillcolor } }}
            symbol ="circle"
            data =  {this.state.data} x = "x" y = "y"
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
            data={sun_data} x = "x" y = "y"
          />
          <VictoryScatter 
            size={({ datum }) => datum.s * 0.75 + 1 }
            style={{ data: { fill: this.state.fillcolor } }}
            symbol ="circle"
            data =  {this.state.data} x = "x" y = "y"
            labels={() => ''} // the label component doesn't show if I remove this
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
            size = {0}
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
            size = {0}
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
            size = {0}
            data={[
              { x: new Date(1930, 1, 1), y: 200 },
            ]}
            labels={() => ["Modern Maximum"]}
            labelComponent={
            <VictoryLabel 
                backgroundStyle={{  fill: "#9FCE78 ", opacity: 0.6}}
                backgroundPadding={8}
              
            />}
          />


        </VictoryChart>

      </div>
    );
  }
}

export default Chart;
