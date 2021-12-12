export const loadData = (url: string) =>
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.json();
    })
    .catch(error => {
      // ToDo: show error to the user
      console.error(error);
    });
