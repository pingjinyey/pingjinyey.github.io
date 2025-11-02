---
title: People
date: 2025-10-26
type: landing

design:
  # Section spacing
  spacing: '5rem'

# Page sections
# sections:
#   - block: collection
#     content:
#       title: "教师团队"
#       text: ""
#       filters:
#         folders:
#           - people
#         tag: teacher
#       sort_by: "Params.weight"
#       sort_ascending: true
#     design:
#       view: article-grid
#       fill_image: false
#       columns: 3
#       show_date: false
#       show_read_time: false
#       show_read_more: true
sections:
  - block: team-showcase
    content:
      title: Teachers
      # subtitle: World-class researchers advancing science
      # text: Our diverse team brings together expertise from multiple disciplines.
      user_groups:
        - Teachers
      sort_by: 'Params.weight'
      sort_ascending: true
    design:
      show_role: true
      show_organizations: false
      show_interests: true
      show_social: true
      # Section background color (CSS class)
      css_class: "bg-gray-50 dark:bg-gray-900"
  - block: team-showcase
    content:
      title: Postdoctoral Researchers
      # subtitle: World-class researchers advancing science
      # text: Our diverse team brings together expertise from multiple disciplines.
      user_groups:
        - Postdoctoral Researchers
      sort_by: 'Params.weight'
      sort_ascending: true
      cta:
        text: Join Our Team
        url: /opportunities
        icon: user-plus
    design:
      show_role: true
      show_organizations: false
      show_interests: true
      show_social: true
      # Section background color (CSS class)
      css_class: "bg-gray-50 dark:bg-gray-900"
---
