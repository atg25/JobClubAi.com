import {defineField, defineType} from 'sanity'

export const resourceType = defineType({
    name: 'resource',
    title: 'Resource',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required().error('Title is required'),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {source: 'title', maxLength: 96},
            validation: (Rule) => Rule.required().error('Slug is required'),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Short summary for listings and social previews',
            validation: (Rule) => Rule.required().error('Description is required'),
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'string',
            validation: (Rule) => Rule.required().error('Slug is required'),
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
            validation: (Rule) => Rule.required().error('Published date is required'),
        }),
        // Main body: Portable Text (block content)
        defineField({
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [
                {type: 'block'},
                {
                    type: 'image',
                    options: {hotspot: true},
                },
            ],
            validation: (Rule) => Rule.required().error('Body is required'),
        }),
    ],
    preview: {
        select: {
            title: 'title',
            author: 'author',
            publishedAt: 'publishedAt',
        },
        prepare({title, author, publishedAt}) {
            return {
                title: title || 'Untitled resource',
                subtitle: `${author ? `by ${author}` : 'No author'}${publishedAt ? ` — ${new Date(publishedAt).toLocaleDateString()}` : ''}`,
            }
        }
    }
})