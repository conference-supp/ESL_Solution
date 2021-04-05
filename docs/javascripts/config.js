window.MathJax = {
    loader: {load: ['[tex]/boldsymbol']},
    tex: {
      packages: {'[+]': ['boldsymbol']},
      inlineMath: [["\\(", "\\)"]],
      displayMath: [["\\[", "\\]"]],
      processEscapes: true,
      processEnvironments: true,
      tags: 'ams',
      macros: {
        bb: ["{\\textbf #1}", 1],
        bX: "\\textbf{X}",
        bx: "\\textbf{x}",
        bY: "\\textbf{Y}",
        by: "\\textbf{y}",
        non: "\\nonumber",
        ra: "\\rightarrow",
        bI: "\\textbf{I}",
        bB: "\\textbf{B}",
        rl: "\\rangle",
        bm: ["\\boldsymbol #1", 1]
      }
    },
    options: {
      ignoreHtmlClass: ".*|",
      processHtmlClass: "arithmatex"
    }
  };