# Byline CMS

Welcome to Byline CMS. We're new!

We're hoping to build a developer-friendly, customer-friendly, AI-first headlesss CMS.

Here's a no-frills FAQ.

## FAQ

<details>
<summary>1. Why are you doing this?</summary>
We currently using Payload CMS - which is a great project, with a few caveats and one recent development. One caveat is that as of version 3.0 Payload CMS has become a technically complex project, in particular after its integration with Next.js (we like Next.js, but are not sure about Payload's integration). More importantly, Payload CMS was just acquired by Figma. And so we felt there would be no harm (and maybe even some fun) in exploring an alternative while we try to understand more about what this means for the future of Payload.
</details>

<details>
<summary>2. Who are you?</summary>
Pretty much nobody - at least not within the 'influence sphere'. We're a couple of developers at an agency based in South East Asia - but we're also pretty sure you've never heard of us.
</details>

<details>
<summary>3. Will this work?</summary>
We have no idea.
</details>


<details>
<summary>4. What governance structures are you considering? </summary> 
We really like the governance structure of the [Fastify project](https://github.com/fastify/.github/blob/main/GOVERNANCE.md). We're going to look for advice over the coming days and weeks and try to find a governance structure that reflects our hopes and values.
</details>

<details>
<summary>5. Would you accept sponsorship?</summary>
Yes!
</details>

<details>
<summary>6. Would you accept venture or seed-round investment?</summary>
Probably not. We'd need to understand more, and we're just finding our way. What we feel quite strongly about however, is that community contributions should remain in the community, and not become part of an 'enterprise' or 'pay-walled' solution that the general community no longer has access to.
</details>

<details>
<summary>7. What's here now?</summary>
Not much: The embryo of a 'proof of concept' CMS - but there will be more soon.
</details>

<details>
<summary>8. Will you fork Payload CMS?</summary>
Absolutely not. There would be no point in taking on the complexity of Payload when it's the complexity of the project itself we'd like to avoid. 
</details>

## Design Goals
1. We'd like to create an extensible, plugin-based framework for our headless CMS that will allow users to easily create admin dashboards and serialization frameworks for front-end clients.
   
3. We'd like to offer the option of 'monolith deployments' - combined API / admin dashboard deployments within a front-end framework of choice, or fully isolated API server, Admin dashboard web app, and API-only consuming clients.

4. We'd like everything to be fast - like really fast, from Admin bundle compile times to API responses.
   
5. We're keen to follow patterns of highly cohesive and loosely coupled design - the benefits of which would include a nice communication API for content updates and callbacks / webhooks for consumer cache invalidation strategies.

6. For now, we'd like to create a 'thin' field API over [Drizzle](https://orm.drizzle.team/).

7. For our admin dashboards, it should be easy to create content editors with your favorite editor, whether [CKEditor](https://ckeditor.com/), [Lexical](https://lexical.dev/), [TipTap](https://tiptap.dev/), [ProseMirror](https://prosemirror.net/) or other.

8. And more....

## What's Next?
We need to find our feet, choose a copyright license, publish a roadmap, our values and mission statement, as well as settle on a governance structure.
