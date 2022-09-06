// export const fetcher = <T>(url: string, variables: T | undefined) => {
//   return request(url, variables);
// };

export const fetcher = <T>(url: string, variables: T | undefined) => {
  return fetch(url).then((r) => r.json());
};
