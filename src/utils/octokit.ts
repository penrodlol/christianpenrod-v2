import { Octokit } from '@octokit/rest';
import { GetResponseDataTypeFromEndpointMethod as ResponseDataType } from '@octokit/types';

export const client = new Octokit({ auth: process.env.GITHUB_TOKEN });

export const { repos } = client;

export type ReposGet = ResponseDataType<typeof client.repos.get>;
