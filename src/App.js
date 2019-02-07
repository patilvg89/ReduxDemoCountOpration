import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { actionCreator } from "./reducer/CountReducer";
import PropTypes from "prop-types";

class App extends Component {
  render() {
    const { dispatch } = this.props;
    return (
      <View style={styles.container}>
        <Button
          onPress={() => {
            dispatch(actionCreator.incrementCount());
          }}
          title="Increment"
        />
        <Text>{this.props.count}</Text>
        <Button
          onPress={() => {
            dispatch(actionCreator.decrementCount());
          }}
          title="Decrement"
        />

        {/* <Text>------------- Default Props----------</Text>
        <Text>{this.props.name}</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

App.propTypes = {
  count: PropTypes.number
};

App.defaultProps = {
  name: 'Virendra'
};

const mapStateToProps = state => ({
  count: state.count
});

export default connect(mapStateToProps)(App);
