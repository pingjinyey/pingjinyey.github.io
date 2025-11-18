---
# Leave the homepage title empty to use the site title
title: ''
date: 2025-10-24
type: landing

design:
  # Default section spacing
  spacing: '6rem'

sections:
  - block: hero
    content:
      title: "ACE-Lab"
      text: "Advanced Communication and Computing Electronics Lab"
      primary_action:
        text: "Get Started"
        url: "https://example.com"
        icon: "sparkles"
      secondary_action:
        text: "Learn More"
        url: "https://docs.hugoblox.com"
      announcement:
        text: "🎉 New features available now!"
        link:
          text: "Read more"
          url: "https://example.com/news"
    design:
      background:
        color: ""
        gradient_start: "#4f46e5"
        gradient_end: "#7c3aed"
  - block: slider-tw
    content:
      slides:
        - title: ""
          # content: "Pushing the frontier of **UAV + 5G** research."
          align: center     # left | center | right
          background:
            color: "#0b1020"
            gradient_start: "#0b1020"
            gradient_end: "#14204a"
            gradient_angle: 120
            image:
              filename: 1.png      # 放在 assets/media/hero1.jpg
              position: center
              size: cover
              filters:
                brightness: 0.85
          # link:
          #   url: /projects
          #   text: "Explore Projects"

        - title: ""
          # content: "Pushing the frontier of **UAV + 5G** research."
          align: center     # left | center | right
          background:
            color: "#0b1020"
            gradient_start: "#0b1020"
            gradient_end: "#14204a"
            gradient_angle: 120
            image:
              filename: 2.png      # 放在 assets/media/hero1.jpg
              position: center
              size: cover
              filters:
                brightness: 0.85
          # link:
          #   url: /projects
          #   text: "Explore Projects"
        - title: ""
          # content: "Pushing the frontier of **UAV + 5G** research."
          align: center     # left | center | right
          background:
            color: "#0b1020"
            gradient_start: "#0b1020"
            gradient_end: "#14204a"
            gradient_angle: 120
            image:
              filename: 3.png      # 放在 assets/media/hero1.jpg
              position: center
              size: cover
              filters:
                brightness: 0.85
          # link:
          #   url: /projects
          #   text: "Explore Projects"
    design:
      is_fullscreen: true      # 或者用 slide_height: "70vh"
      # slide_height: "80vh"
      auto_play: true
      interval_ms: 2000
      css_class: ""
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: ''
      # Show a call-to-action button under your biography? (optional)
      button:
        text: Download CV
        url: uploads/resume.pdf
      headings:
        about: ''
        education: ''
        interests: ''
    design:
      # Apply a gradient background
      css_class: hbx-bg-gradient
      # Avatar customization
      avatar:
        size: medium # Options: small (150px), medium (200px, default), large (320px), xl (400px), xxl (500px)
        shape: circle # Options: circle (default), square, rounded
  - block: portfolio-lite
    content:
      title: Our Projects
      # 聚合什么类型的内容（最常见是 project）
      page_type: projects
      # 定义过滤按钮（name 是按钮文本，filter 对应内容的 tag）
      buttons:
        - name: All
          filter: "*"
        - name: 5G
          filter: "5g"
        - name: UAV
          filter: "uav"
    design:
      view: card        # 也可 masonry / showcase 等，视版本而定
      columns: 3 
  - block: markdown
    content:
      title: '📚 My Research'
      subtitle: ''
      text: |-
        Use this area to speak to your mission. I'm a research scientist in the Moonshot team at DeepMind. I blog about machine learning, deep learning, and moonshots.

        I apply a range of qualitative and quantitative methods to comprehensively investigate the role of science and technology in the economy.

        Please reach out to collaborate 😃
    design:
      columns: '1'
  - block: slider-tw
    content:
      slides:
        - title: "1"
          content: "Pushing the frontier of **UAV + 5G** research."
          align: center     # left | center | right
          background:
            color: "#0b1020"
            gradient_start: "#0b1020"
            gradient_end: "#14204a"
            gradient_angle: 120
            image:
              filename: hero1.png      # 放在 assets/media/hero1.jpg
              position: center
              size: cover
              filters:
                brightness: 0.85
          link:
            url: /projects
            text: "Explore Projects"

        - title: "2"
          content: "Pushing the frontier of **UAV + 5G** research."
          align: center     # left | center | right
          background:
            color: "#0b1020"
            gradient_start: "#0b1020"
            gradient_end: "#14204a"
            gradient_angle: 120
            image:
              filename: hero2.png      # 放在 assets/media/hero1.jpg
              position: center
              size: cover
              filters:
                brightness: 0.85
          link:
            url: /projects
            text: "Explore Projects"
    design:
      is_fullscreen: true      # 或者用 slide_height: "70vh"
      # slide_height: "80vh"
      auto_play: true
      interval_ms: 5000
      css_class: ""
  - block: collection
    id: researches
    content:
      title: Recent Publications
      filters:
        folders:
          - researches
        exclude_featured: false
    design:
      view: card
      # columns: 2
  - block: collection
    id: papers
    content:
      title: Featured Publications
      filters:
        folders:
          - publications
        featured_only: true
    design:
      view: article-grid
      columns: 2
  - block: collection
    content:
      title: Recent Publications
      text: ''
      filters:
        folders:
          - publications
        exclude_featured: false
    design:
      view: citation
  - block: collection
    id: talks
    content:
      title: Recent & Upcoming Talks
      filters:
        folders:
          - events
    design:
      view: card
  - block: collection
    id: news
    content:
      title: Recent News
      subtitle: ''
      text: ''
      # Page type to display. E.g. post, talk, publication...
      page_type: blog
      # Choose how many pages you would like to display (0 = all pages)
      count: 5
      # Filter on criteria
      filters:
        author: ''
        category: ''
        tag: ''
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ''
      # Choose how many pages you would like to offset by
      offset: 0
      # Page order: descending (desc) or ascending (asc) date.
      order: desc
    design:
      # Choose a layout view
      view: card
      # Reduce spacing
      spacing:
        padding: [0, 0, 0, 0]
  - block: cta-card
    content:
      title: 👉 Build your own academic website like this
      text: |-
        This site is generated by Hugo Blox Builder - the FREE, Hugo-based open source website builder trusted by 250,000+ academics like you.

        <a class="github-button" href="https://github.com/HugoBlox/hugo-blox-builder" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star HugoBlox/hugo-blox-builder on GitHub">Star</a>

        Easily build anything with blocks - no-code required!

        From landing pages, second brains, and courses to academic resumés, conferences, and tech blogs.
      button:
        text: Get Started
        url: https://hugoblox.com/templates/
    design:
      card:
        # Card background color (CSS class)
        css_class: 'bg-primary-300 dark:bg-primary-700'
        css_style: ''
---
