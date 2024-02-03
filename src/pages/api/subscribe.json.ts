export const prerender = false;

import type { APIRoute } from "astro";
import validateEmail from "../../lib/validateEmail";

export const POST: APIRoute = async ({ request }) => {
	try {
		const body = await request.json();
		const { email } = body;
		
		// check that email exists
		if (!email) {
			throw new Error("Please provide an email address");
		}

		// validate email
		if (!validateEmail((email as string))) {
			throw new Error("Please provide a valid email address");
		}

		// check if the email is already subscribed
		// not doing the convertkit part
		// subscribe the email
		// not doing the convertkit part
		return new Response(JSON.stringify({
      message: "🎉 Yay! You're subscribed."
    }), {
			status: 200,
			statusText: "OK"
		}
  )
	} catch (e) {
		if (e instanceof Error) {
			return new Response(
				null, {
					status: 500,
					statusText: e.message,
				}
			)
		}
		return new Response(
			null, {
				status: 400,
				statusText: "There is an unexpected error",
			}
		)
	}
}