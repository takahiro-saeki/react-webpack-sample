import React from 'react';
import ReactDOM from 'react-dom';
import {Dispatcher} from 'flux';

class App extends React.Component {
  render() {
    return (
      <div>test</div>
    )
  }
}

var flightDispatcher = new Dispatcher();
var CountryStore = {country: null};
var CityStore = {city: null};
var FlightPriceStore = {price: null};

flightDispatcher.dispatch({
  actionType: 'city-update',
  selectedCity: 'paris'
})


flightDispatcher.register(payload => {
  if (payload.actionType === 'city-update') {
    CityStore.city = payload.selectedCity;
  }
});

flightDispatcher.dispatch({
  actionType: 'country-update',
  selectedCountry: 'australia'
});


CountryStore.dispatchToken = flightDispatcher.register(payload => {
  if (payload.actionType === 'country-update') {
    CountryStore.country = payload.selectedCountry;
  }
});

CityStore.dispatchToken = flightDispatcher.register(payload => {
  if (payload.actionType === 'country-update') {
    flightDispatcher.waitFor([CountryStore.dispatchToken]);
    CityStore.city = getDefaultCityForCountry(CountryStore.country);
  }
});

FlightPriceStore.dispatchToken =
  flightDispatcher.register(payload => {
    console.log(payload)
    switch (payload.actionType) {
      case 'country-update':
      case 'city-update':
        flightDispatcher.waitFor([CityStore.dispatchToken]);
        FlightPriceStore.price =
          getFlightPriceStore(CountryStore.country, CityStore.city);
        break;
  }
});



ReactDOM.render(
  <App />,
  document.getElementById('app')
)
