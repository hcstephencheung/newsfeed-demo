import React from "react";
import { render } from "react-dom";

import "semantic-ui-css/semantic.min.css"
require('dotenv').config();

import Search from "./pages/Search/Search";
import Error from "./pages/Error/Error";

const App = () => (
    // Parcel has a known issue with Fragment
    // it's fixed but not merged yet.
    // https://github.com/parcel-bundler/parcel/pull/2486
    <React.Fragment>
        {process.env.API_KEY ? <Search /> : <Error />}
    </React.Fragment>
)

render(<App />, document.getElementById("root"));