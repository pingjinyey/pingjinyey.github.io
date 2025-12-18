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
  - block: research-overview
    id: researches
    content:
      title: Key Research Directions
      subtitle: "Pioneering the future of intelligent edge computing and 6G wireless systems through hardware-software co-design."
      
      items:
        # 方向一：AI 芯片
        - title: "AI Chips & Neural Processors"
          text: "Energy-efficient Domain-Specific Architectures (DSA) featuring heterogeneous RISC-V + NPU designs and full-stack compilation support for edge intelligence."
          # 请确保图片放在 assets/media/research/ 下，或者根据实际路径修改
          image: "featured_ai_chip.png" 
          # 链接到刚才创建的子页面路径
          link: "/researches/ai-chips/"

        # 方向二：无线通信
        - title: "Wireless Communication Systems"
          text: "Advanced baseband SoC design for 5G/B5G, V2X vehicular networks, and specialized industrial applications, focusing on reliability and low latency."
          image: "featured_wireless.png"
          link: "/researches/wireless-systems/"

        # 方向三：通信-AI 融合
        - title: "Comm-AI Fusion & ISAC"
          text: "Architecting 6G native AI systems with Integrated Sensing and Communication (ISAC) and semantic transmission capabilities for autonomous agents."
          image: "featured_fusion.png"
          link: "/researches/comm-ai-fusion/"

    design:
      columns: 3 # 可选项: 2, 3, 4。 设置为 3 表示一次看 3 个，超出的部分通过滑动查看。
      # 浅灰色背景，区分于上下的白色区块
      css_class: "bg-gray-50 dark:bg-gray-900"
  # - block: portfolio-lite
  #   content:
  #     offset: 0
  #     count: 0
  #     title: PROJECT
  #     # page_type: projects
  #     filters:
  #       folders:
  #         - researches
  #       exclude_featured: false
  #     tag_param: "tags"
  #     buttons:
  #       - name: All
  #         filter: "*"
  #       - name: 5G
  #         filter: "5g"
  #       - name: UAV
  #         filter: "uav"
  #   design:
  #     view: card        # card / article-grid / date-title-summary
  #     columns: 3 
  #     fill_image: false
  #     show_summary: true
  #     show_date: true
  #     show_read_time: false
  #     show_read_more: false
  - block: portfolio-lite
    content:
      offset: 0
      count: 0
      title: Events & News
      filters:
        folders:
          - events
        exclude_featured: false
      tag_param: "publication_type"
      buttons:
        - name: All
          filter: "*"
        - name: Team Building
          filter: "Team Building"
    design:
      columns: 3 
      fill_image: true
      show_summary: true
      show_date: true
      show_read_time: true
      show_read_more: true
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
