import React from "react";

import { Heading } from "evergreen-ui";
import { SearchForm, SearchResults } from "../components";

import * as styles from "./styles";

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            articles: []
        }
    }

    handleResults = articles => {
        this.setState({
            articles
        })
    }

    render() {
        const { articles } = this.state;

        return (
            <div className={styles.searchPage}>
                <Heading size={600} marginBottom={16}> Newsfeed Search </Heading>
                <SearchForm handleResults={this.handleResults} />
                {!!articles.length && <SearchResults articles={articles} />}
            </div>
        )
    }
}

export default Search;