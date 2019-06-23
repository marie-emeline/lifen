export const fetchUpload = async () => {
  const url = new URL(
     'https://hapi.fhir.org/baseDstu3/Binary?_pretty=true',
  );

  const response = await fetch(url.href, {
    method: 'GET',
  });

  if (response.ok) {
    const data = await response.json();

    return data;
  }

  throw response;
};