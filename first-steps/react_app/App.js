import React from "react"
import ReactDOM from "react-dom"
import { QueryRenderer, graphql } from "react-relay"
import { Environment, Network, RecordSource, Store } from "relay-runtime"

// the function used by the network interface to request data
// relay is network agnostic, you could use websocket, webRTC, smoke signals
async function fetchQuery(operation,variables) {
    const response = await fetch('/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: operation.text, variables }),
    });
    return response.json();
}

const modernEnvironment = new Environment({
    network: Network.create(fetchQuery),
    // the store can be accessed programatically to change state
    // access during mutations and subscriptions in order to avoid
    // bringing data out of relay.

    // use https://github.com/relayjs/relay-devtools to inspect the store during
    // application use. Make sure you install the relay tools.
    // https://github.com/entria/entria-fullstack/blob/091495/packages/web/src/relay/Environment.tsx#L9-L12
    // there are some computers I can't get to pay well with the devtools
    store: new Store(new RecordSource()),
});
// we will return the data for one user
export const AppQuery = graphql`
  query AppQuery($userId: String) {
    user(id: $userId) {
        id
        userId
        name
        email
        color
    }
  }
`

const rootElement = document.getElementById("root")

if (rootElement) {zzzzz
    ReactDOM.render(
        // QueryRenderer is used to request data and control 
        // the rendering process during load. It is a relay component.
        <QueryRenderer
            environment={modernEnvironment}
            query={AppQuery}
            variables={{ userId: "0", }}
            render={({error, props}) => {
                if (props && props.user) {
                    alert("hi")
                    return <pre>{JSON.stringify(props.user, null, 4)}</pre>;
                } else if (error) {
                    return <pre style={{width: 300}}>{error.message}</pre>;
                }

                return <div>Loading</div>;
            }}
        />,
        rootElement,
    );
} else {
    alert("NO ROOT ELEMENT")
}
  
