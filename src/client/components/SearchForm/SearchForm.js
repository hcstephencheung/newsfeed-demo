import React from "react";
import { fetchData } from "../../../utils/fetchData";
import { IconButton, TextInputField } from "evergreen-ui";

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
                    isFormValid: true
                })
                this.props.handleResults(articles);
            }
        }
    }

    render() {
        const { isFormValid } = this.state;
        return (
            <React.Fragment>
                <form
                    className={styles.searchForm}
                    onSubmit={this.handleSubmit}>
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
            </React.Fragment>
        );
    }

}

export default SearchForm;