---
title: huzeyu
type: landing

# Name pronunciation (optional)
name_pronunciation: ''

# Full name (for SEO)
first_name: zeyu
last_name: hu

weight: 3

# Pronouns (optional)
# pronouns: he/him

# Status emoji
# status:
#   icon: 🚀

# Is this the primary user of the site?
superuser: false

# Highlight the author in author lists? (true/false)
highlight_name: true

role: Experimenter

# bio: Research interests include machine learning and computational biology.

organizations:
  - name:  Shanghai University 
    url: https://www.shu.edu.cn/
# Social network links
# Need to use another icon? Simply download the SVG icon to your `assets/media/icons/` folder.
profiles:
  - icon: at-symbol
    url: 'mailto:alex.johnson@meta.com'
    label: E-mail Me
  # - icon: brands/x
  #   url: https://twitter.com/AlexAIResearch
  # - icon: brands/github
  #   url: https://github.com/alexjohnsonai
  # - icon: brands/linkedin
  #   url: https://www.linkedin.com/in/alexjohnsonai/
  - icon: academicons/google-scholar
    url: https://scholar.google.com.hk/citations?user=DNgq9FoAAAAJ&hl=zh-CN&oi=ao
  # - icon: academicons/orcid
  #   url: https://orcid.org/0000-0002-1825-0097
interests:
  - Machine Learning
  - Computational Biology
  - Data Science
    
education:
  - area: PhD Computer Science (AI Focus)
    institution: Stanford University
    icon: ""
    date_start: 2015-09-01
    date_end: 2019-06-30
    summary: |
      Thesis on _Scaling Laws for Neural Language Models_. Supervised by Prof. Andrew Ng. Published 5 papers in NeurIPS and ICML, with 2 best paper awards.
    button:
      text: 'Read Thesis'
      url: 'https://example.com/thesis.pdf'
  - area: MS Computer Science
    institution: Carnegie Mellon University
    icon: ""
    date_start: 2013-09-01
    date_end: 2015-05-31
    summary: |
      GPA: 4.0/4.0

      Specialized in machine learning and robotics.
  - area: BS Computer Science
    institution: MIT
    icon: ""
    date_start: 2009-09-01
    date_end: 2013-05-31
    summary: |
      GPA: 3.9/4.0

      Minored in Mathematics. President of AI Club.
    
work:
  - position: Senior AI Research Scientist
    company_name: Meta AI
    company_url: 'https://ai.meta.com/'
    icon: ''
    date_start: 2020-01-01
    date_end: ''
    summary: |2-
      Leading research on multimodal AI systems. Contributed to Llama 2 and other open-source models. 50+ citations in 3 years.
  - position: AI Research Intern
    company_name: OpenAI
    company_url: 'https://openai.com/'
    icon: ''
    date_start: 2019-06-01
    date_end: 2019-12-31
    summary: |
      Worked on GPT-3 scaling. Co-authored paper on prompt engineering.

# Skills
# Add your own SVG icons to `assets/media/icons/`
skills:
  - name: Technical Skills
    items:
      - name: Python & PyTorch
        description: ''
        percent: 95
        icon: code-bracket
      - name: Machine Learning
        description: ''
        percent: 100
        icon: chart-bar
      - name: Cloud Computing (AWS/GCP)
        description: ''
        percent: 85
        icon: cloud
  - name: Hobbies
    color: '#eeac02'
    color_border: '#f0bf23'
    items:
      - name: Hiking in the Rockies
        description: ''
        percent: 80
        icon: person-simple-walk
      - name: Building Custom PCs
        description: ''
        percent: 90
        icon: cpu-chip
      - name: Sci-Fi Reading
        description: ''
        percent: 70
        icon: book-open

languages:
  - name: English
    percent: 100
  - name: Spanish
    percent: 50

# Awards.
#   Add/remove as many awards below as you like.
#   Only `title`, `awarder`, and `date` are required.
#   Begin multi-line `summary` with YAML's `|` or `|2-` multi-line prefix and indent 2 spaces below.
awards:
  - title: Best Paper Award
    url: https://neurips.cc/
    date: '2022-12-01'
    awarder: NeurIPS
    icon: hero/trophy
    summary: |
      Awarded for groundbreaking work on efficient training of large models.
  - title: AI Innovation Grant
    url: https://www.nsf.gov/
    date: '2021-06-15'
    awarder: National Science Foundation
    icon: hero/currency-dollar
    summary: |
      $500,000 grant for research in ethical AI development.
  - title: Outstanding PhD Thesis
    url: https://www.stanford.edu/
    date: '2019-06-30'
    awarder: Stanford University
    icon: hero/academic-cap
    summary: |
      Recognized for contributions to scaling laws in deep learning.

    
social:
  - icon: envelope
    icon_pack: fas
    link: 'mailto:jane@example.edu'
  - icon: twitter
    icon_pack: fab
    link: https://twitter.com/janedoe
  - icon: github
    icon_pack: fab
    link: https://github.com/janedoe
    
user_groups:
  - Teachers

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: huzeyu
      text: ''
      # Show a call-to-action button under your biography? (optional)
      # button:
      #   text: Download CV
      #   url: /uploads/resume.pdf
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
  - block: resume-awards
    content:
      username: huzeyu
      title: "My Section Title"
      text: "This is sample text content for the section."
    design:
      background:
        color: ""
        # gradient_start: "#4f46e5"
        # gradient_end: "#7c3aed"
        # text_color_light: true
      # spacing:
      #   padding: ["6", "6", "6", "6"]
      # columns: "1"
  # - block: resume-experience
  #   content:
  #     username: huzeyu
  #     title: "???"
  #     # items:
  #     #   - title: "Senior Developer"
  #     #     company: "Tech Company"
  #     #     location: "San Francisco, CA"
  #     #     date_start: "2020-01-01"
  #     #     date_end: ""
  #     #     description: |
  #     #       * Led development of key features
  #     #       * Mentored junior developers
  #     #       * Improved system performance by 40%
  #     #   - title: "Software Engineer"
  #     #     company: "Startup Inc"
  #     #     location: "New York, NY"
  #     #     date_start: "2018-06-01"
  #     #     date_end: "2019-12-31"
  #     #     description: "Developed web applications using modern technologies"
  #   design:
  #     columns: "1"
---

Full biography content here...
