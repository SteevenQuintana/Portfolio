import React from "react";

function NavigationDots({ active }) {
  return (
    <div className="app__navigation">
      {["home", "about", "work", "testimonials", "contact"].map((item) => (
        <a
          className="app__navigation-dot"
          key={`dots-${item}`}
          href={`#${item}`}
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
        />
      ))}
    </div>
  );
}

export default NavigationDots;
