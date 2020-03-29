/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: messages
// ====================================================

export interface messages_messages {
  __typename: "Message";
  id: string;
  /**
   * Message content
   */
  text: string;
}

export interface messages {
  /**
   * List of messages sent by users
   */
  messages: (messages_messages | null)[] | null;
}
