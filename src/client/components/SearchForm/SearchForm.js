import React from "react";
import { fetchData } from "../../../utils/fetchData";
import { Form, Icon, Message } from "semantic-ui-react";

import * as styles from "./styles";

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
            isFormValid: null,
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
        const { isFormValid, query } = this.state;
        return (
            <Form
                error={isFormValid !== null && !isFormValid}
                onSubmit={this.handleSubmit}
                className={styles.searchForm}>
                <Form.Field>
                    <Message error header="Search Failed" content={ValidationMessage} />
                    <div className={styles.searchInputContainer}>
                        <Form.Input
                            icon={<Icon name='search' />}
                            placeholder='Search...'
                            onChange={this.handleSearchChange}
                            value={query}
                            size="tiny"
                            error={isFormValid !== null && !isFormValid} />
                    </div>
                </Form.Field>
            </Form>
        );
    }

}

export default SearchForm;