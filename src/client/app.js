import React from "react";
import { render } from "react-dom";

import "semantic-ui-css/semantic.min.css"
require('dotenv').config();

import Search from "./pages/Search";

const App = () => (
    // Parcel has a known issue with Fragment
    // it's fixed but not merged yet.
    // https://github.com/parcel-bundler/parcel/pull/2486
    <React.Fragment>
        <Search />
    </React.Fragment>
)

render(<App />, document.getElementById("root"));