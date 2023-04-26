export async function onRequestGet(request) {
  return new Response(
    JSON.stringify({ country: request.request?.cf?.country })
  );
}
