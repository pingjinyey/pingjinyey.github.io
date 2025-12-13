---
# Leave the homepage title empty to use the site title
title: ''
date: 2025-10-24
type: landing

design:
  # Default section spacing
  spacing: '6rem'

sections:
  - block: slider-tw
    content:
      slides:
        - background:
            image:
              filename: team1.jpg      # 放在 assets/media/hero1.jpg
              position: center
              size: cover
        - background:
            image:
              filename: team2.jpg      # 放在 assets/media/hero1.jpg
              position: center
              size: cover
        - background:
            image:
              filename: team3.jpg      # 放在 assets/media/hero1.jpg
              position: center
              size: cover
    design:
      slide_height: "calc(100vh - 120px)"
      auto_play: true
      interval_ms: 4000
      css_class: ""
    blocks:
      - block: lab-card
        id: lab-intro
        content:
          title: "ACE-Lab"
          subtitle: "Advanced Communication and Computing Electronics Lab, Shanghai University"
          description: >
            ACE-Lab focuses on wireless communication, intelligent computing,
            and integrated electronic systems, bridging fundamental research
            and real-world applications.
  - block: portfolio-lite
    content:
      offset: 0
      count: 0
      title: PROJECT
      # page_type: projects
      filters:
        folders:
          - researches
        exclude_featured: false
      tag_param: "tags"
      buttons:
        - name: All
          filter: "*"
        - name: 5G
          filter: "5g"
        - name: UAV
          filter: "uav"
    design:
      view: article-grid        # card / article-grid / date-title-summary
      columns: 2 
      fill_image: false
      show_date: true
      show_read_time: false
      show_read_more: false
  # - block: collection
  #   content:
  #     title: Recent Publications
  #     text: ''
  #     filters:
  #       folders:
  #         - publication
  #       exclude_featured: false
  #   design:
  #     view: citation
  - block: pub-collection
    content:
      title: Publications
      filters:
        author: ""           # (可选) 填入名字，留空则显示所有
        show_toolbar: false   # (可选) 是否显示蓝色筛选条，默认为 true
    design:
      view: pub-item
      sort_order: "type_year" # 可选: "year_type" (默认) 或 "type_year"
  # - block: collection
  #   id: talks
  #   content:
  #     title: Recent & Upcoming Talks
  #     filters:
  #       folders:
  #         - events
  #   design:
  #     view: card
  # - block: collection
  #   id: news
  #   content:
  #     title: Recent News
  #     subtitle: ''
  #     text: ''
  #     # Page type to display. E.g. post, talk, publication...
  #     page_type: blog
  #     # Choose how many pages you would like to display (0 = all pages)
  #     count: 5
  #     # Filter on criteria
  #     filters:
  #       author: ''
  #       category: ''
  #       tag: ''
  #       exclude_featured: false
  #       exclude_future: false
  #       exclude_past: false
  #       publication_type: ''
  #     # Choose how many pages you would like to offset by
  #     offset: 0
  #     # Page order: descending (desc) or ascending (asc) date.
  #     order: desc
  #   design:
  #     # Choose a layout view
  #     view: card
  #     # Reduce spacing
  #     spacing:
  #       padding: [0, 0, 0, 0]
---
