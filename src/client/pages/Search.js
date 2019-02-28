import React from "react";

import { Header } from "semantic-ui-react";
import { SearchForm, SearchResults, SortBar } from "../components";

import * as styles from "./styles";

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            articles: [],
            sortBy: ""
        }
    }

    handleResults = articles => {
        this.setState({
            articles
        })
    }

    handleSort = sortBy => {
        this.setState({
            sortBy
        })
    }

    render() {
        const { articles } = this.state;

        return (
            <div className={styles.searchPage}>
                <Header as="h1"> Newsfeed Search </Header>
                <SearchForm handleResults={this.handleResults} />
                {!!articles.length && <SortBar pageStyles={styles.sortBar} handleSort={this.handleSort} />}

                {!!articles.length && <SearchResults pageStyles={styles.searchResults} articles={articles} />}
            </div>
        )
    }
}

export default Search;