import {type StructureResolver, type StructureBuilder} from 'sanity/structure'
import {UsersIcon, CalendarIcon, ComposeIcon} from '@sanity/icons'

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
                    .filter(
                      "_type == 'memberProfile' && (!defined(linkedin) || !defined(github) || !defined(personalWebsite) || !defined(calendly))",
                    ),
                ),
            ]),
        ),

      S.divider(),

      S.listItem()
        .title('Events')
        .icon(CalendarIcon)
        .child(
          S.list()
            .title('Events')
            .items([
              S.listItem()
                .title('All Events')
                .child(S.documentList().title('All Events').filter("_type == 'event'")),
              S.listItem()
                .title('By Meeting Type')
                .child(
                  S.list()
                    .title('Meeting Types')
                    .items([
                      S.listItem()
                        .title('In-Person')
                        .child(
                          S.documentList()
                            .title('In-Person Events')
                            .filter("_type == 'event' && type == 'In-Person'"),
                        ),
                      S.listItem()
                        .title('Virtual')
                        .child(
                          S.documentList()
                            .title('Virtual Events')
                            .filter("_type == 'event' && type == 'Virtual'"),
                        ),
                      S.listItem()
                        .title('Hybrid')
                        .child(
                          S.documentList()
                            .title('Hybrid Events')
                            .filter("_type == 'event' && type == 'Hybrid'"),
                        ),
                    ]),
                ),
              S.listItem()
                .title('By Category')
                .child(
                  S.list()
                    .title('Event Categories')
                    .items([
                      S.listItem()
                        .title('Workshops')
                        .child(
                          S.documentList()
                            .title('Workshops')
                            .filter("_type == 'event' && category == 'Workshop'"),
                        ),
                      S.listItem()
                        .title('Office hours')
                        .child(
                          S.documentList()
                            .title('Office hours')
                            .filter("_type == 'event' && category == 'Office hours'"),
                        ),
                      S.listItem()
                        .title('Meetups')
                        .child(
                          S.documentList()
                            .title('Meetups')
                            .filter("_type == 'event' && category == 'Meetups'"),
                        ),
                      S.listItem()
                        .title('Guest speakers')
                        .child(
                          S.documentList()
                            .title('Guest speakers')
                            .filter("_type == 'event' && category == 'Guest speakers'"),
                        ),
                      S.listItem()
                        .title('Hack nights')
                        .child(
                          S.documentList()
                            .title('Hack nights')
                            .filter("_type == 'event' && category == 'Hack nights'"),
                        ),
                    ]),
                ),
            ]),
        ),

      S.divider(),

      // include all other document type list items except the ones we listed above
      ...S.documentTypeListItems()
        .filter(
          (listItem) =>
            !['memberProfile', 'event', 'siteSettings', 'navigation', 'colors'].includes(
              listItem.getId() ?? '',
            ),
        )
        .map((listItem) => {
          const id = listItem.getId?.() ?? ''
          if (id === 'resource') return listItem.icon(ComposeIcon)
          return listItem
        }),
    ])

export default myStructure
