import { Octokit } from '@octokit/rest';
import { GetResponseDataTypeFromEndpointMethod as ResponseDataType } from '@octokit/types';

export const client = new Octokit();

export const { repos } = client;

export type ReposGet = ResponseDataType<typeof client.repos.get>;
