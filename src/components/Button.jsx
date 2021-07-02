// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import { PlasmicButton } from "./plasmic/solid_project_test/PlasmicButton";

function Button_(props, ref) {
  // Use PlasmicButton to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicButton are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, we are just piping all ButtonProps here, but feel free
  // to do whatever works for you.
  return <PlasmicButton root={{ ref }} {...props} />;
}

const Button = React.forwardRef(Button_);

export default Button;
