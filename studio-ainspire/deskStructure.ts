import {type StructureResolver, type StructureBuilder} from 'sanity/structure'
import {UsersIcon, CalendarIcon, ComposeIcon, UsersThreeIcon} from '@sanity/icons'

export const myStructure: StructureResolver = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Member Profiles')
        .icon(UsersIcon)
        .child(
          S.list()
            .title('Member Profiles')
            .items([
              S.listItem()
                .title('All Members')
                .child(S.documentList().title('All Members').filter("_type == 'memberProfile'")),

              S.listItem()
                .title('Missing URLs')
                .child(
                  S.documentList()
                    .title('Member profiles missing any URL')
                    .filter("_type == 'memberProfile' && (!defined(linkedin) || !defined(github) || !defined(personalWebsite) || !defined(calendly))")
                ),
            ])
        ),

      S.divider(),

      S.listItem()
        .title('Events')
        .icon(CalendarIcon)
        .child(
          S.list()
            .title('Events')
            .items([
              S.listItem().title('All Events').child(S.documentList().title('All Events').filter("_type == 'event'")),
              S.listItem()
                .title('By Meeting Type')
                .child(
                  S.list()
                    .title('Meeting Types')
                    .items([
                      S.listItem()
                        .title('In-Person')
                        .child(S.documentList().title('In-Person Events').filter("_type == 'event' && type == 'In-Person'")),
                      S.listItem()
                        .title('Virtual')
                        .child(S.documentList().title('Virtual Events').filter("_type == 'event' && type == 'Virtual'")),
                      S.listItem()
                        .title('Hybrid')
                        .child(S.documentList().title('Hybrid Events').filter("_type == 'event' && type == 'Hybrid'")),
                    ])
                ),
              S.listItem()
                .title('By Category')
                .child(
                  S.list()
                    .title('Event Categories')
                    .items([
                      S.listItem()
                        .title('Workshops')
                        .child(S.documentList().title('Workshops').filter("_type == 'event' && category == 'Workshop'")),
                      S.listItem()
                        .title('Office hours')
                        .child(S.documentList().title('Office hours').filter("_type == 'event' && category == 'Office hours'")),
                      S.listItem()
                        .title('Meetups')
                        .child(S.documentList().title('Meetups').filter("_type == 'event' && category == 'Meetups'")),
                      S.listItem()
                        .title('Guest speakers')
                        .child(S.documentList().title('Guest speakers').filter("_type == 'event' && category == 'Guest speakers'")),
                      S.listItem()
                        .title('Hack nights')
                        .child(S.documentList().title('Hack nights').filter("_type == 'event' && category == 'Hack nights'")),
                    ])
                ),
            ])
        ),

      S.divider(),

      S.listItem()
        .title('Event Registrations')
        .icon(UsersThreeIcon)
        .child(
          S.list()
            .title('Event Registrations')
            .items([
              S.listItem()
                .title('All Registrations')
                .child(
                  S.documentList()
                    .title('All Registrations')
                    .filter("_type == 'eventRegistration'")
                    .defaultOrdering([{field: 'registeredAt', direction: 'desc'}])
                ),
              S.listItem()
                .title('By Status')
                .child(
                  S.list()
                    .title('Registration Status')
                    .items([
                      S.listItem()
                        .title('Registered')
                        .child(
                          S.documentList()
                            .title('Registered')
                            .filter("_type == 'eventRegistration' && status == 'registered'")
                            .defaultOrdering([{field: 'registeredAt', direction: 'desc'}])
                        ),
                      S.listItem()
                        .title('Confirmed')
                        .child(
                          S.documentList()
                            .title('Confirmed')
                            .filter("_type == 'eventRegistration' && status == 'confirmed'")
                            .defaultOrdering([{field: 'registeredAt', direction: 'desc'}])
                        ),
                      S.listItem()
                        .title('Attended')
                        .child(
                          S.documentList()
                            .title('Attended')
                            .filter("_type == 'eventRegistration' && status == 'attended'")
                            .defaultOrdering([{field: 'registeredAt', direction: 'desc'}])
                        ),
                      S.listItem()
                        .title('Waitlist')
                        .child(
                          S.documentList()
                            .title('Waitlist')
                            .filter("_type == 'eventRegistration' && status == 'waitlist'")
                            .defaultOrdering([{field: 'registeredAt', direction: 'desc'}])
                        ),
                      S.listItem()
                        .title('Cancelled')
                        .child(
                          S.documentList()
                            .title('Cancelled')
                            .filter("_type == 'eventRegistration' && status == 'cancelled'")
                            .defaultOrdering([{field: 'registeredAt', direction: 'desc'}])
                        ),
                    ])
                ),
            ])
        ),

      S.divider(),

      // include all other document type list items except the ones we listed above
      ...S.documentTypeListItems()
        .filter((listItem) => !['memberProfile', 'event', 'eventRegistration', 'siteSettings', 'navigation', 'colors'].includes(listItem.getId() ?? ''))
        .map((listItem) => {
          const id = listItem.getId?.() ?? ''
          if (id === 'resource') return listItem.icon(ComposeIcon)
          return listItem
        }),
    ])

export default myStructure
