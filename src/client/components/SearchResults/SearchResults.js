import React from "react";

import {
    Icon,
    Link,
    ListItem,
    UnorderedList,
} from "evergreen-ui";

const SearchResults = ({ articles }) => (
    <UnorderedList>
        {articles.map(article => (
            <ListItem>
                <Link href={article.url} target="_blank">
                    {article.title}
                    <Icon icon="arrow-top-right" marginLeft={8} size={12} />
                </Link>
            </ListItem>
        ))}
    </UnorderedList>
);

export default SearchResults;
