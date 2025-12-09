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
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: [{type: 'author'}],
        }),
        defineField({
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image',
            options: {hotspot: true},
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{type: 'string'}],
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
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
        }),
    ],
    preview: {
        select: {
            title: 'title',
            author: 'author.name',
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