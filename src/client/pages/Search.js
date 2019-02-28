import React from "react";

import { Header } from "semantic-ui-react";
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
                <Header as="h1"> Newsfeed Search </Header>
                <SearchForm handleResults={this.handleResults} />
                {!!articles.length && <SearchResults articles={articles} />}
            </div>
        )
    }
}

export default Search;