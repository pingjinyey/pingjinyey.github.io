---
title: ''
date: 2025-10-24
type: landing

design:
  spacing: '6rem'

sections:
  - block: slider-tw
    content:
      slides:
        - background:
            image:
              filename: team1.jpg
              position: center
              size: cover
        - background:
            image:
              filename: team2.jpg
              position: center
              size: cover
        - background:
            image:
              filename: team3.jpg
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
          title: "NIULAB"
          subtitle: "Network Intelligence & Ubiquitous Linkage, Tsinghua University"
          description: >
            NIULAB focuses on network intelligence, ubiquitous connectivity,
            and broadband wireless systems, advancing fundamental theory
            and real-world applications for 6G and beyond.

  - block: research-overview
    id: researches
    content:
      title: Research Themes
      subtitle: "Advancing Network Intelligence for 6G and Beyond"
      items:
        - title: "Edge Intelligence"
          text: "Bringing AI capabilities to the network edge through efficient inference, federated learning, and cloud-edge-end collaboration for intelligent wireless systems."
          image: "team1.jpg"
          link: "/researches/edge-intelligence/"

        - title: "Vehicular & Autonomous Systems"
          text: "Enabling cooperative autonomous driving through collaborative perception, V2X communications, and intelligent vehicular networks."
          image: "team2.jpg"
          link: "/researches/vehicular-systems/"

        - title: "Low-Altitude Intelligent Networks"
          text: "Designing cellular-connected drone networks with intelligent coverage, mobility management, and UAV-assisted communication."
          image: "team3.jpg"
          link: "/researches/low-altitude-networks/"

        - title: "AI-Native Networking"
          text: "Architecting next-generation networks with native AI capabilities for autonomous network management and intelligent resource optimization."
          image: "team1.jpg"
          link: "/researches/ai-native-networking/"

        - title: "Green Wireless Systems"
          text: "Developing energy-efficient wireless communication technologies and green edge intelligence for sustainable network evolution."
          image: "team2.jpg"
          link: "/researches/green-wireless/"

    design:
      columns: 3
      fit_image: true
      css_class: "bg-gray-50 dark:bg-gray-900"

  - block: team-compact
    id: people
    content:
      title: People
      subtitle: "Our team of researchers driving innovation in network intelligence"
      user_groups:
        - Faculties
        - Ph.D. Students
        - Master Students
        - Undergraduate Students
      sort_by: 'Params.weight'
      sort_ascending: true
    design:
      show_social: false

  - block: pub-collection
    id: publications
    content:
      title: Selected Publications
      subtitle: "Representative journal and conference papers from our lab"
      filters:
        author: ""
        featured: true
        show_toolbar: false
    design:
      view: pub-item
      sort_order: "type_year"

  - block: contact-info
    id: contact
    content:
      title: Contact & Notes
      subtitle: "Get in touch with our lab"
      visit_title: "Visit Us"
      address:
        lines:
          - "Room 9-101, FIT Building"
          - "Department of Electronic Engineering"
          - "Tsinghua University, Beijing 100084, China"
      connect_title: "Connect"
      email: "niuzhs@tsinghua.edu.cn"
      prospective:
        title: "Join Our Lab"
        text: "We are always looking for talented students and researchers. Visit our opportunities page for more information."
        button:
          text: "View Opportunities"
          url: "/opportunities/"
      map_embed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.0!2d116.3168!3d40.0036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sFIT+Building%2C+Tsinghua+University!5e0!3m2!1sen!2scn!4v1700000000000" width="100%" height="300" style="border:0;" allowfullscreen loading="lazy"></iframe>'
    design:
      css_class: "bg-gray-50 dark:bg-gray-900"

---
