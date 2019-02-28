import React from "react";

import { Image, Message } from "semantic-ui-react";
import * as styles from "./styles";

export default Error = () => (
    <div className={styles.errorPage}>
        <Message negative>
            <Message.Header>
                Sorry but the page couldn't load...
            </Message.Header>
            <p>...did you forget to setup your env file?</p>
        </Message>
        <Image
            src="http://images4.fanpop.com/image/photos/17500000/Cute-pup-teddybear64-17581520-500-597.jpg"
            size="medium"
            disabled
            centered />
    </div>
)
