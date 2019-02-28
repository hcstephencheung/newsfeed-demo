import React from "react";
import { fetchData } from "../../utils/fetchData";

import SearchResults from "../components/SearchResults";
import { Heading, IconButton, TextInputField } from "evergreen-ui";

import * as styles from "./styles.css";

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
        const { articles, isFormValid } = this.state;
        console.log(styles);
        return (
            <React.Fragment>
                <Heading size={600} marginBottom={16}> Newsfeed Search </Heading>
                <form className={styles.searchForm} onSubmit={this.handleSubmit}>
                    <TextInputField
                        label=""
                        placeholder="Search for a news article..."
                        onChange={this.handleSearchChange}
                        marginBottom={16}
                        isInvalid={isFormValid !== null && !isFormValid}
                        validationMessage={isFormValid !== null && !isFormValid && ValidationMessage}
                        className={styles.searchField} />
                    <IconButton
                        appearance="minimal"
                        icon="search"
                        className={styles.searchIcon} />
                </form>

                {!!articles.length && <SearchResults articles={articles} />}
            </React.Fragment>
        );
    }

}

export default SearchForm;