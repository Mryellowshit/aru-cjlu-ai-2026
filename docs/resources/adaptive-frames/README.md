# Adaptive Frames for Hybrid Intelligence

This folder contains a complete paper and an executable teaching simulation that
revisits Marvin Minsky's frame theory through Semantic Data Technologies.

## Files

- `main.tex` — full Overleaf-compatible manuscript.
- `references.bib` — bibliography with DOI or stable standards links.
- `adaptive_frames_colab.ipynb` — documented Google Colab simulation.
- `movies.owl` — example ontology that can be loaded by the notebook.
- `Adaptive_Frames_for_Hybrid_Intelligence.pdf` — compiled manuscript.

## Compile the paper

Upload `main.tex` and `references.bib` to Overleaf, set `main.tex` as the main
document, and compile with pdfLaTeX. Locally, run:

```bash
latexmk -pdf main.tex
```

## Run the notebook

Upload `adaptive_frames_colab.ipynb` to Google Colab and choose **Runtime → Run
all**. The notebook creates a small example graph by default. It also includes an
optional upload cell for using `movies.owl`.

The notebook exports a repaired graph, validation reports, provenance records,
CSV results and diagrams. All semantic reclassification is presented as a
human-confirmed teaching step rather than a silent automated correction.
