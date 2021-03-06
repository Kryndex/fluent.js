import React, { Component } from 'react';
import delay from 'delay';

import 'fluent-intl-polyfill';
import { MessagesProvider } from 'fluent-react/compat';
import negotiateLanguages from 'fluent-langneg/compat';

function negotiateAvailable(requested) {
  return negotiateLanguages(
    requested, ['en-US', 'pl'], { defaultLocale: 'en-US' }
  )
}

async function fetchMessages(locales) {
  const { PUBLIC_URL } = process.env;
  // For the sake of the example take only the first locale.
  const locale = locales[0];
  const response = await fetch(`${PUBLIC_URL}/${locale}.ftl`);
  const messages = await response.text();

  await delay(1000);
  return messages;
}

export class AppMessagesProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locales: negotiateAvailable(props.requested),
      messages: ''
    };
  }

  async componentWillMount() {
    const messages  = await fetchMessages(this.state.locales);
    this.setState({ messages });
  }

  render() {
    const { children } = this.props;
    const { locales, messages } = this.state;

    if (!messages) {
      // Show a loader.
      return <div>…</div>;
    }

    return (
      <MessagesProvider locales={locales} messages={messages}>
        {children}
      </MessagesProvider>
    );
  }
}
