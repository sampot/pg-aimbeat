/** Optional Playgrounds stub. */
export default {
  async fetch(request) {
    return Response.json({ ok: true, name: "pg-aimbeat", path: new URL(request.url).pathname });
  },
};
