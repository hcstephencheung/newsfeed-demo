import React from "react";

import { Header } from "semantic-ui-react";
import { SearchForm, SearchResults, SortBar } from "../../components";
import { fetchData } from "../../../utils/fetchData"

import * as styles from "./styles";

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            articles: [],
            query: "",
            sortBy: ""
        }
    }

    handleResults = async () => {
        const { query, sortBy } = this.state;
        const { status, articles } = await fetchData({ query, sortBy });

        // localeCompare returns 0 if strings match
        if (!!status && !status.localeCompare("ok")) {
            this.setState({
                articles
            })
        } else {
            console.log("Search failed!", status);
        }
    }

    handleSearch = query => {
        this.setState({
            query
        }, this.handleResults)
    }

    handleSort = sortBy => {
        this.setState({
            sortBy
        }, this.handleResults)
    }



    render() {
        const { articles } = this.state;

        return (
            <div className={styles.searchPage}>
                <Header as="h1"> Newsfeed Search </Header>
                <SearchForm handleSearch={this.handleSearch} />
                {!!articles.length && <SortBar pageStyles={styles.sortBar} handleSort={this.handleSort} />}

                {!!articles.length && <SearchResults pageStyles={styles.searchResults} articles={articles} />}
            </div>
        )
    }
}

export default Search;