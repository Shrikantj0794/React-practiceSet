import React from "react";

const App = ()=>{
  return <>
  {/* adding bootstrap using: npm i bootstrap */}
  {/* and add css link and js link add in public > index.html past in head tag */}
    <h1 className="text-primary"> adding Bootstrap in Reat</h1>
    <button className="btn btn-primary">click me</button>

    {/* add one extension: IntelliSense for CSS class names in HTML.
     Extension that provides CSS class name completion for the HTML class attribute based on the definitions found in your workspace or external files referenced through the link element.  */}
  </>
}

export default App