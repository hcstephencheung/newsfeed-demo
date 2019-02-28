import React from "react";
import { fetchData } from "../../utils/fetchData";

import SearchResults from "../components/SearchResults";
import { Heading, IconButton, TextInputField } from "evergreen-ui";

const ValidationMessage = "This field cannot be blank!";

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            articles: [],
            isFormValid: null
        }
    }

    handleSearchChange = e => {
        this.setState({
            query: e.target.value,
        })
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const { query } = this.state;

        if (!query.length) {
            this.setState({
                isFormValid: false
            })
        } else {
            const { status, articles } = await fetchData(query);
            if (!!status && !status.localeCompare("ok")) {
                this.setState({
                    articles,
                    isFormValid: true
                })
            }
        }
    }

    render() {
        const { query, articles, isFormValid } = this.state;

        return (
            <React.Fragment>
                <Heading size={600} marginBottom={16}> Newsfeed Search </Heading>
                <form onSubmit={this.handleSubmit}>
                    <TextInputField
                        label="Search for an article"
                        placeholder="Search for a news article..."
                        onChange={this.handleSearchChange}
                        marginBottom={16}
                        isInvalid={isFormValid !== null && !isFormValid}
                        validationMessage={isFormValid !== null && !isFormValid && ValidationMessage}
                        inputWidth={250}
                    />
                    <IconButton marginBottom={16} appearance="minimal" icon="search" />
                </form>

                {!!articles.length && <SearchResults articles={articles} />}
            </React.Fragment>
        );
    }

}

export default SearchForm;