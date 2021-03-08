import React, {Component} from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4themes_animated from "@amcharts/amcharts4/themes/animated"; 
import Modals from '../components/modalSignup'
import '../App.css'

import { Button, Col, Row, Container, Form } from 'react-bootstrap'
am4core.useTheme(am4themes_animated);

// const Register = () => {
    class Maps extends Component {

        state = {
            isOpen: false
          };
        
          openModal = () => this.setState({ isOpen: true });
          closeModal = () => this.setState({ isOpen: false });
      
        componentDidMount() {
          // Create map instance
          var chart = am4core.create("chartdiv", am4maps.MapChart);

          // Set map definition
          chart.geodataSource.url = "https://www.amcharts.com/lib/4/geodata/json/indonesiaLow.json";
          chart.geodataSource.events.on("parseended", function(event) {
            let data = [];
            for(var i = 0; i < event.target.data.features.length; i++) {
              data.push({
                id: event.target.data.features[i].id,
                value: Math.round( Math.random() * 10000 )
              })
            }
            polygonSeries.data = data;
          })
      
          // Set projection
          chart.projection = new am4maps.projections.Mercator();
      
     

          // Add zoom control
          chart.zoomControl = new am4maps.ZoomControl();
      
        //   // Set initial zoom
          chart.homeZoomLevel = 1;
      
          // Create map polygon series
        //   var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
        //   polygonSeries.mapPolygons.template.strokeWidth = 0.5;
      
            let polygonSeries = new am4maps.MapPolygonSeries();
            polygonSeries.useGeodata = true;
            chart.series.push(polygonSeries);
      
          // Make map load polygon (like country names) data from GeoJSON
          polygonSeries.useGeodata = true;
      
          // Configure series
        //   var polygonTemplate = polygonSeries.mapPolygons.template;
      
        //   polygonTemplate.tooltipText = "{name}: {id}";
        //   polygonTemplate.fill = am4core.color("#aac4e7");
      
          // Create hover state and set alternative fill color
        //   var hs = polygonTemplate.states.create("hover");
        //   hs.properties.fill = chart.colors.getIndex(1);
      
        let polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText = "{name}: {id}";
        // polygonTemplate.fill = am4core.color("#96BDC6");
        
        // Create hover state and set alternative fill color
        // let hs = polygonTemplate.states.create("hover");
        // hs.properties.fill = am4core.color("#CC0000");

        var series1 = chart.series.push(new am4maps.MapPolygonSeries());
        series1.name = "Filled";
        series1.useGeodata = true;
        series1.include = ["ID-MA", "ID-SA"];
        series1.mapPolygons.template.tooltipText = "{name}: {id}";
        series1.mapPolygons.template.fill = am4core.color("#96BDC6");
        series1.fill = am4core.color("#96BDC6");

        let homeButton = new am4core.Button();

        // Home Button 
        homeButton.events.on("hit", function() {
        chart.goHome();
        });

        homeButton.icon = new am4core.Sprite();
        homeButton.padding(7, 5, 7, 5);
        homeButton.width = 30;
        homeButton.icon.path = "M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8";
        homeButton.marginBottom = 10;
        homeButton.parent = chart.zoomControl;
        homeButton.insertBefore(chart.zoomControl.plusButton);
          
          // Create active state
        //   var activeState = polygonTemplate.states.create("active");
        //   activeState.properties.fill = chart.colors.getIndex(1);
      
        //   // Create an event to toggle "active" state
        //   polygonTemplate.events.on("hit", function (event) {
        //     event.target.isActive = !event.target.isActive;
        //   })
      
        }

        
        render() {
        // const [modalShow, setModalShow] = useState(false); onClick={this.openModal}

          return (
        <div>
            <div id="chartdiv" style={{ width: "100%", height: "700px" }}>
                
            </div>
            <Modals show={this.state.isOpen} onHide={this.closeModal} />

        </div>
    )
}}

export default Maps