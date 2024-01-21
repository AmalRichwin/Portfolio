import { blogSchema, projectSchema } from '@/lib/markdoc/frontmatter.schema';
import { defineCollection } from 'astro:content';






const blogCollection = defineCollection({ 
    type: "content",
    schema: blogSchema
 });

const projectsCollection = defineCollection({ 
    type: "content",
    schema: projectSchema
 });


 export const collections = {
  'blog': blogCollection,
  'projects': projectsCollection
};