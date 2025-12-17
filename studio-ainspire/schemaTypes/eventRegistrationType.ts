import {defineType, defineField} from 'sanity'

export const eventRegistrationType = defineType({
  name: 'eventRegistration',
  title: 'Event Registration',
  type: 'document',
  fields: [
    defineField({
      name: 'event',
      title: 'Event',
      type: 'reference',
      to: [{type: 'event'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'major',
      title: 'Major',
      type: 'string',
    }),
    defineField({
      name: 'graduationYear',
      title: 'Graduation Year',
      type: 'number',
    }),
    defineField({
      name: 'dietaryRestrictions',
      title: 'Dietary Restrictions',
      type: 'text',
      description: 'Any allergies or dietary preferences',
    }),
    defineField({
      name: 'notes',
      title: 'Additional Notes',
      type: 'text',
    }),
    defineField({
      name: 'status',
      title: 'Registration Status',
      type: 'string',
      options: {
        list: [
          {title: 'Registered', value: 'registered'},
          {title: 'Confirmed', value: 'confirmed'},
          {title: 'Attended', value: 'attended'},
          {title: 'Cancelled', value: 'cancelled'},
          {title: 'Waitlist', value: 'waitlist'},
        ],
      },
      initialValue: 'registered',
    }),
    defineField({
      name: 'registeredAt',
      title: 'Registration Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'confirmationSent',
      title: 'Confirmation Email Sent',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'calendarInviteSent',
      title: 'Calendar Invite Sent',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      firstName: 'firstName',
      lastName: 'lastName',
      email: 'email',
      eventName: 'event.name',
      status: 'status',
      registeredAt: 'registeredAt',
    },
    prepare({firstName, lastName, email, eventName, status, registeredAt}) {
      return {
        title: `${firstName} ${lastName}`,
        subtitle: `${eventName || 'Unknown Event'} - ${status || 'registered'}`,
        description: `${email} • ${new Date(registeredAt).toLocaleDateString()}`,
      }
    },
  },
})
