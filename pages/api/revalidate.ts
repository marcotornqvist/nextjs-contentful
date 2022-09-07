import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // // Check for secret to confirm this is a valid request
  // if (req.query.secret !== process.env.NEXT_REVALIDATE_ROUTE) {
  //   return res.status(401).json({ message: "Invalid token" });
  // }
  console.log(req);

  // check for the POST request
  // if (req.method !== "POST") {
  //   return res
  //     .status(400)
  //     .json({ error: "Invalid HTTP method. Only POST requests are allowed." });
  // }

  // check for the secret token
  // if (req.query.secret !== process.env.REVALIDATE_SECRET_TOKEN) {
  //   return res.status(401).json({ message: "Invalid token" });
  // }

  // console.log("Validation worked");

  try {
    // check that body is not empty
    // const body = req.body;
    // console.log(body);
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
    await res.revalidate("/blog/isr/testing-this-validation-thing");
    await res.revalidate("/blog/isr/why-its-called-football-and-not-soccer");
    await res.revalidate("/blog/isr/painting-is-the-art-of-applying-paint");
    await res.revalidate("/blog/isr/is-esport-really-a-sport");
    await res.revalidate("/blog/isr/skating-like-tony-hawk");
    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send("Error revalidating");
  }
}
