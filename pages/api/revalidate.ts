import type { NextApiRequest, NextApiResponse } from "next";
import jsonList from "test.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // // check for the POST request
  // if (req.method !== "POST") {
  //   return res
  //     .status(400)
  //     .json({ error: "Invalid HTTP method. Only POST requests are allowed." });
  // }

  // // check for the secret token
  // if (
  //   req.headers.revalidate_secret_token !== process.env.REVALIDATE_SECRET_TOKEN
  // ) {
  //   return res.status(401).json({ message: "Invalid token" });
  // }

  try {
    // check that body is not empty
    // const body = JSON.parse(req.body);
    // console.log("body in console: " + body);

    // if (!body) {
    //   res.status(400).send("Bad request (no body)");
    //   return;
    // }

    console.log(req);
    const slug = JSON.parse(req.body.slug);

    if (slug) {
      await res.revalidate(`/blog/isr/${slug}`);
      return res.json({ revalidated: true });
    }
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send("Error revalidating");
  }
}
