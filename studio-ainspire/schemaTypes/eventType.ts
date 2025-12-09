import { defineField, defineType } from "sanity";

export const eventType = defineType({
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
        // Title
        defineField({
            name: 'name',
            title: 'Event Name',
            type: 'string',
            validation: (Rule) => Rule.required().error('Title is required'),
        }),
        // Event Category
        defineField({
            name: 'category',
            title: 'Event Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Workshop', value: 'Workshop' },
                    { title: 'Office hours', value: 'Office hours' },
                    { title: 'Meetups', value: 'Meetups' },
                    { title: 'Guest speakers', value: 'Guest speakers' },
                    { title: 'Hack nights', value: 'Hack nights' },
                ]
            },
            validation: (Rule) => Rule.required().error('Category is required'),
        }),
        // Description
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: (Rule) => Rule.required().error('Description is required'),
        }),
        // Date
        defineField({
            name: 'datetime',
            title: 'Date & Time',
            type: 'datetime',
            validation: (Rule) => Rule.required().error('Date & Time is required'),
        }),
        // Event Type
        defineField({
            name: 'type',
            title: 'Meeting Type',
            type: 'string',
            options: {
                list: [
                    { title: 'In-Person', value: 'In-Person' },
                    { title: 'Virtual', value: 'Virtual' },
                    { title: 'Hybrid', value: 'Hybrid' },
                ],
            },
            validation: (Rule) => Rule.required().error('Meeting Type is required'),
        }),
        // Location
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
            hidden: ({ parent }) => parent?.type !== 'In-Person' && parent?.type !== 'Hybrid',
        }),
        // Link
        defineField({
            name: 'link',
            title: 'Link',
            type: 'url',
            hidden: ({ parent }) => parent?.type !== 'Virtual' && parent?.type !== 'Hybrid',
        }),
    ],
});