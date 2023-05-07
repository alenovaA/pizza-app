import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
  className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
   >
    <circle cx="125" cy="161" r="109" /> 
    <rect x="0" y="297" rx="8" ry="8" width="237" height="17" /> 
    <rect x="0" y="324" rx="10" ry="10" width="240" height="79" /> 
    <rect x="0" y="432" rx="10" ry="10" width="102" height="40" /> 
    <rect x="119" y="427" rx="23" ry="23" width="125" height="49" />
  </ContentLoader>
)

export default Skeleton;
