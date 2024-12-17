---
title: "PARC"
description: "I wrote a data-driven cover generator that applies PARC's visual system to an ever-growing set of publications. The generator lives as a macOS application and serves as an in-house development assistant."
layout: "layouts/projectBackC.njk"
topTextModule:
  cols:
    - src: "The Partnership for the Assessment of Risk from Chemicals (P-A-R-C) aims to develop next-generation chemical risk assessment to protect human health and the environment through new data, methods, and tools."
    - src: "PARC publishes a monthly newsletter called PARC Science Digest for the scientific community and other stakeholders. The newsletter shares a collection of scientific, peer-reviewed work that PARC has been involved with over the previous month. As an extension of their work on PARC’s identity redesign, RNDR designed a visual system for treating the covers of these works."
    - src: "The app accepts a CSV file via file drop that contains meta-data for each publication in the set, and for each cover maps the number of authors to a specified range of stroke weights, number of shapes, and the diameter of each shape. "
    - src: "The number of background columns and their colors are determined by the number and grouping of work packages that have contributed to the publication. Other parameters such as shape position are computed randomly at runtime."
modules:
  - name: ""
    components:
      - type: imageTile
        data:
          rows:
            - images:
                - src: "assets/projects/main/parc/parc-full.mp4"
                  alt: "Image 1"
                - src: "assets/projects/main/parc/parc-cover.mp4"
                  alt: "Image 2"
  - name: ""
    components:
      - type: imageTile
        data:
          rows:
            - images:
                - src: "assets/projects/main/parc/parc-vertical.mp4"
                  alt: "Image 1"
                - src: "assets/projects/main/parc/parc-square.mp4"
                  alt: "Image 2"
      - type: text
        data:
          headline: "Project 1 Headline"
          cols:
            - src: "There are two modes. The user selects either vertical (static cover) mode or square (animated video) mode, and the app begins to export frames to the downloads folder."
            - src: "Since the intent was to maximize the range of possible 
            covers, every iteration is unique, including vertical covers when compared to their square cover partners."
---

---
