/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
import supercluster from "supercluster";

import data from "./jsondata.json";

const dataSubset = data.slice(0, 100);
// 1.3
// 3.8

export default class WirelessSingapore extends Component {
  state = {
    region: {
      latitude: 1.3,
      longitude: 103.8,
      latitudeDelta: 0.2,
      longitudeDelta: 0.2
    }
  };

  componentDidMount() {
    // navigator.geolocation.getCurrentPosition(
    //   position => {
    //     const { coords: { longitude, latitude } } = position;
    //     // this.setState({ initialPosition });
    //     // this.setState({
    //     //   region: {
    //     //     longitude,
    //     //     latitude,
    //     //     latitudeDelta: 0.05,
    //     //     longitudeDelta: 0.05
    //     //   }
    //     // });
    //   },
    //   error => alert(error.message),
    //   { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    // );
    // this.watchID = navigator.geolocation.watchPosition(position => {
    //   var lastPosition = position;
    //   this.setState({ lastPosition });
    // });
  }

  // createCluster(places) {
  //   const cluster = supercluster({
  //     radius: 60,
  //     maxZoom: 16
  //   });

  //   try {
  //     cluster.load(places);
  //     const padding = 0;
  //     const markers = cluster.getClusters(
  //       [
  //         this.state.region.longitude -
  //           this.state.region.longitudeDelta * (0.5 + padding),
  //         this.state.region.latitude -
  //           this.state.region.latitudeDelta * (0.5 + padding),
  //         this.state.region.longitude +
  //           this.state.region.longitudeDelta * (0.5 + padding),
  //         this.state.region.latitude +
  //           this.state.region.latitudeDelta * (0.5 + padding)
  //       ],
  //       this.getZoomLevel()
  //     );
  //     this.setState({
  //       markers,
  //       cluster
  //     });
  //   } catch (e) {
  //     console.debug("failed to create cluster", e);
  //   }
  // }

  // getZoomLevel(region = this.state.region) {
  //   const angle = region.longitudeDelta;
  //   return Math.round(Math.log(360 / angle) / Math.LN2);
  // }

  handleRegionChange(region) {
    this.setState({ region });
  }

  // markerPressed(marker) {
  //   let isCluster = marker.properties && marker.properties.cluster;
  //   let region = this.state.region;

  //   this.map.animateToRegion(
  //     {
  //       longitude: marker.geometry.coordinates[0],
  //       latitude: marker.geometry.coordinates[1],
  //       longitudeDelta: isCluster
  //         ? region.longitudeDelta / 5
  //         : region.longitudeDelta,
  //       latitudeDelta: isCluster
  //         ? region.latitudeDelta / 5
  //         : region.latitudeDelta
  //     },
  //     200
  //   );
  // }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          // onRegionChange={this.onRegionChange}
          initialRegion={this.state.region}
          ref={ref => {
            this.map = ref;
          }}
        >
          {dataSubset.map(
            ({ longitude, latitude, location_name, street_address }, i) => (
              <MapView.Marker
                key={i}
                coordinate={{ longitude, latitude }}
                title={location_name}
                description={street_address}
              />
            )
          )}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

AppRegistry.registerComponent("WirelessSingapore", () => WirelessSingapore);
