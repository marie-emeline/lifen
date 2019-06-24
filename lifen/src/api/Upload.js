export const fetchUpload = async file => {
  const url = new URL(
     'https://fhirtest.uhn.ca/baseDstu3/Binary',
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