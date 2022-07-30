export const QUERY = `
  query summary($from: DateTime!, $to: DateTime!) {
    user(login: "${process.env.GITHUB_USERNAME}") {
      contributionsCollection(from: $from, to: $to) {
        totalCommitContributions
        repositoryContributions(first: 100) {
          nodes {
            repository {
              primaryLanguage {
                name
              }
              repositoryTopics(first: 100) {
                nodes {
                  topic {
                    name
                  }
                }
              }
            }
          }
        }
        contributionCalendar {
          weeks {
            contributionDays {
              date
              color
              contributionCount
              weekday
            }
          }
        }
      }
    }
  }
`;
