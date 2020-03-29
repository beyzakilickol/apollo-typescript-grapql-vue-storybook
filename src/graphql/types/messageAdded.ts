/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: messageAdded
// ====================================================

export interface messageAdded_messageAdded {
  __typename: "Message";
  id: string;
  /**
   * Message content
   */
  text: string;
}

export interface messageAdded {
  /**
   * When a new message is added
   */
  messageAdded: messageAdded_messageAdded;
}
