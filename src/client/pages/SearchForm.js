import React from "react";
import { fetchData } from "../../utils/fetchData";

import SearchResults from "../components/SearchResults";
import { Heading, SearchInput } from "evergreen-ui";

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            articles: []
        }
    }

    handleSearchChange = e => {
        this.setState({
            query: e.target.value,
        })
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const { status, articles } = await fetchData(this.state.query);
        if (!!status && !status.localeCompare("ok")) {
            this.setState({
                articles
            })
        }
    }

    render() {
        const { query, articles } = this.state;

        return (
            <React.Fragment>
                <Heading size={600} marginBottom={16}> Newsfeed Search </Heading>
                <form onSubmit={this.handleSubmit}>
                    <SearchInput
                        placeholder="Search for a news article..."
                        onChange={this.handleSearchChange}
                        marginBottom={16} />
                </form>

                {!!articles.length && <SearchResults articles={articles} />}
            </React.Fragment>
        );
    }

}

export default SearchForm;