import React from "react";
import { render } from "react-dom";

require('dotenv').config();

import SearchForm from "./pages/SearchForm";

const App = () => (
    // Parcel has a known issue with Fragment
    // it's fixed but not merged yet.
    // https://github.com/parcel-bundler/parcel/pull/2486
    <React.Fragment>
        <SearchForm />
    </React.Fragment>
)

render(<App />, document.getElementById("root"));