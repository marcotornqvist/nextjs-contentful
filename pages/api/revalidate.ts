import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req);

  // check for the POST request
  if (req.method !== "POST") {
    return res
      .status(400)
      .json({ error: "Invalid HTTP method. Only POST requests are allowed." });
  }

  // check for the secret token
  if (
    req.headers.revalidate_secret_token !== process.env.REVALIDATE_SECRET_TOKEN
  ) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    // check that body is not empty
    // if (!body) {
    //   res.status(400).send("Bad request (no body)");
    //   return;
    // }
    // // get the slug to revalidate from body
    // const slugToRevalidate = body.slugToRevalidate;
    // if (slugToRevalidate) {
    //   await res.revalidate(`/blog/isr/${slugToRevalidate}`);
    //   return res.json({ revalidated: true });
    // }
    // // this should be the actual path not a rewritten path
    // // e.g. for "/blog/[slug]" this should be "/blog/post-1"
    await res.revalidate(`/body/${req.body.slug}`);
    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send("Error revalidating");
  }
}
