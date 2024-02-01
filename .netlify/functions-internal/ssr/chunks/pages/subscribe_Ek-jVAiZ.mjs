const prerender = false;
const GET = ({ params, request }) => {
  return new Response(
    JSON.stringify({
      message: "This was a GET!"
    })
  );
};
const POST = ({ request }) => {
  return new Response(
    JSON.stringify({
      message: "This was a POST!"
    })
  );
};

export { GET, POST, prerender };
