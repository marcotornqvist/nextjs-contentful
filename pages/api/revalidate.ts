import type { NextApiRequest, NextApiResponse } from "next";

// https://www.lucecarter.co.uk/blog/troubleshooting-webhooks-in-contentful#verifying-the-custom-payload

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
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

  // FIXME: Payload doesn't include slug when a post is unpublished or deleted. Archiving and then unpublishing works, which is not too optimal.

  // FIXME: Make it so that getStaticPaths also revalidates when a post is created or deleted. Now getStaticPaths doesn't recognise new posts. Maybe fallback of blocking actually works? Read about fallback blocking: https://github.com/vercel/next.js/discussions/20093. Discuss if this even is a problem in this project? Is there going to be dynamic pages such as nextjs blog/[slug] pages or just index.tsx/rest.tsx pages?

  try {
    // check that body is not empty
    // const body = JSON.parse(req.body);
    // console.log("body in console: " + body);

    // if (!body) {
    //   res.status(400).send("Bad request (no body)");
    //   return;
    // }

    console.log(req);
    console.log("----------");
    const bodyParsed = JSON.parse(req.body);
    console.log("bodyParsed in console: " + req.body);
    console.log("----------");
    const slugParsed = bodyParsed.slug;
    console.log("slugParsed in console: " + slugParsed);
    console.log("----------");

    if (slugParsed) {
      console.log("inside");
      await res.revalidate(`/blog/isr/${slugParsed}`);
      return res.json({ revalidated: true });
    }
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send("Error revalidating");
  }
}
