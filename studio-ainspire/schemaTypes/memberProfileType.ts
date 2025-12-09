import { defineField, defineType } from 'sanity'

export const memberProfileType = defineType({
  name: 'memberProfile',
  title: 'Member Profile',
  type: 'document',
  fields: [
    // Uses Fillout Form Submission ID as unique identifier
    defineField({
      name: 'filloutId',
      title: 'Fillout Submission ID',
      type: 'string',
      readOnly: true,
    }),
    // First Name
    defineField({
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: (Rule) => Rule.required().error('First name is required'),
    }),
    // Last Name
    defineField({
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      validation: (Rule) => Rule.required().error('Last name is required'),
    }),
    // Email
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .email()
          .error('Please provide a valid email address'),
    }),
    // Major
    defineField({
      name: 'major',
      title: 'Major',
      type: 'string',
      validation: (Rule) => Rule.required().error('Major is required'),
    }),
    // Graduation Year
    defineField({
      name: 'graduationYear',
      title: 'Graduation Year',
      type: 'number',
      validation: (Rule) =>
        Rule.min(1900).max(2100).integer().error('Enter a valid year'),
    }),
    // LinkedIn URL
    defineField({
      name: 'linkedin',
      title: 'LinkedIn URL',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: false,
          scheme: ['https', 'http'],
        }),
    }),
    // GitHub URL
    defineField({
      name: 'github',
      title: 'GitHub URL',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: false,
          scheme: ['https', 'http'],
        }),
    }),
    // Personal Website URL
    defineField({
      name: 'personalWebsite',
      title: 'Personal Website',
      type: 'url',
    }),
    // Calendly URL
    defineField({
      name: 'calendly',
      title: 'Calendly URL',
      type: 'url',
    }),
    // Career Goal
    defineField({
      name: 'careerGoal',
      title: 'Career Goal',
      description: 'Short description of their goal (SWE, consultant, founder, etc.)',
      type: 'text',
    }),
    /* Use GROQ queries to check for missing fields:
        - LinkedIn
        - GitHub
        - Personal Website
        - Calendly
    */
  ],
})