function renderAuthResponse(status, content) {
	const authMessage = `authorization:github:${status}:${JSON.stringify(content)}`;

	return `<!doctype html><html><head><meta charset="utf-8" /></head><body><script>
const authMessage = ${JSON.stringify(authMessage)};
const receiveMessage = (message) => {
	window.opener.postMessage(authMessage, message.origin);
	window.removeEventListener('message', receiveMessage, false);
};
window.addEventListener('message', receiveMessage, false);
window.opener.postMessage('authorizing:github', '*');
</script></body></html>`;
}

export async function onRequest(context) {
	const { request, env } = context;
	const clientId = env.GITHUB_CLIENT_ID;
	const clientSecret = env.GITHUB_CLIENT_SECRET;

	if (!clientId || !clientSecret) {
		return new Response('Missing GitHub OAuth environment variables.', { status: 500 });
	}

	try {
		const url = new URL(request.url);
		const code = url.searchParams.get('code');

		if (!code) {
			return new Response(renderAuthResponse('error', { error: 'missing_code' }), {
				headers: { 'content-type': 'text/html;charset=UTF-8' },
				status: 400,
			});
		}

		const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				accept: 'application/json',
				'user-agent': 'mingtaieoe-decap-cms-oauth',
			},
			body: JSON.stringify({
				client_id: clientId,
				client_secret: clientSecret,
				code,
				redirect_uri: `${url.origin}/api/callback`,
			}),
		});

		const result = await tokenResponse.json();

		if (result.error) {
			return new Response(renderAuthResponse('error', result), {
				headers: { 'content-type': 'text/html;charset=UTF-8' },
				status: 401,
			});
		}

		return new Response(
			renderAuthResponse('success', {
				token: result.access_token,
				provider: 'github',
			}),
			{
				headers: { 'content-type': 'text/html;charset=UTF-8' },
				status: 200,
			},
		);
	} catch (error) {
		console.error(error);
		return new Response(renderAuthResponse('error', { error: error.message }), {
			headers: { 'content-type': 'text/html;charset=UTF-8' },
			status: 500,
		});
	}
}
