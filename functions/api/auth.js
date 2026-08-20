export async function onRequest(context) {
	const { request, env } = context;
	const clientId = env.GITHUB_CLIENT_ID;

	if (!clientId) {
		return new Response('Missing GITHUB_CLIENT_ID environment variable.', { status: 500 });
	}

	const url = new URL(request.url);
	const scope = url.searchParams.get('scope') || 'repo';
	const redirectUri = `${url.origin}/api/callback`;
	const authorizeUrl = new URL('https://github.com/login/oauth/authorize');

	authorizeUrl.searchParams.set('client_id', clientId);
	authorizeUrl.searchParams.set('redirect_uri', redirectUri);
	authorizeUrl.searchParams.set('scope', scope);
	authorizeUrl.searchParams.set(
		'state',
		crypto.getRandomValues(new Uint8Array(12)).join(''),
	);

	return Response.redirect(authorizeUrl.toString(), 302);
}
