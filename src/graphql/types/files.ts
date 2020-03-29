/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: files
// ====================================================

export interface files_files {
  __typename: "File";
  id: string;
  path: string;
  filename: string;
  mimetype: string;
  encoding: string;
}

export interface files {
  files: (files_files | null)[] | null;
}
