import React from "react";

//mreduce the occurence of unnecessary functionality//
//Hey Tae, to make a stateless functional component, use const and then name of component
//it
//when you dont use class keyword, you cannot use this keyword//
const Weather = props => (
  <div className="weather__info">
  {
    props.city && props.country && <p>Location: { props.city }, { props.country }</p>
  }
  {
     props.temperature && <p>Temperature: { props.temperature }</p>
   }
  {
    props.humidity && <p>Humidity: { props.humidity }</p>
  }
  {
    props.description && <p>Condition: { props.description }</p>
  }
  {
    props.error && <p>{ props.error }</p>}
</div>
);

export default Weather;
