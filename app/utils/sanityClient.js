import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Or your actual project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // Or your actual dataset name
  token: process.env.SANITY_API_TOKEN, // Use a token with write access
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: "2024-01-01",
});

export default client;