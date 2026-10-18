window.MODULES = {
  sdt: {
    title: "Semantic Data Technologies",
    code: "SDT",
    strapline: "Make data meaningful, connected and machine-understandable.",
    summary: "This module introduces the ideas and tools used to describe meaning explicitly, connect information across systems and construct trustworthy knowledge graphs.",
    tools: "WebProtégé, Protégé Desktop, RDFLib, SPARQL, SHACL and Google Colab",
    outcomes: ["Model real-world domains as ontologies", "Represent linked information using RDF and RDFS", "Create and query knowledge graphs with SPARQL", "Use OWL reasoning and SHACL validation appropriately", "Evaluate provenance, quality and responsible use"],
    weeks: [
      ["1", "From the Internet to the Semantic Web", "Internet, Web, HTML, XML and the motivation for machine-readable meaning", "History + concept map"],
      ["2", "XML and Structured Data", "Elements, attributes, namespaces, XML Schema and the limits of syntax alone", "XML lab"],
      ["3", "RDF: Data as Triples", "Subjects, predicates, objects, IRIs, literals and graph visualisation", "CSV-to-RDF"],
      ["4", "RDFS and Shared Vocabularies", "Classes, subclasses, properties, domains, ranges and lightweight inference", "Schema design"],
      ["5", "Ontology Engineering", "Competency questions, scope, reuse, top-down and bottom-up development", "Domain workshop"],
      ["6", "OWL and Description Logic", "Restrictions, equivalence, disjointness and the open-world assumption", "Reasoning lab"],
      ["7", "Protégé and WebProtégé", "Collaborative ontology creation, individuals, annotations and reasoners", "WebProtégé build"],
      ["8", "SPARQL Querying", "SELECT, FILTER, OPTIONAL, aggregation, paths and federated queries", "Query challenge"],
      ["9", "Linked Data and Knowledge Graphs", "Publishing, linking, identity, schema alignment and graph applications", "Graph integration"],
      ["10", "SHACL and Data Quality", "Shapes, constraints, reports and the distinction between validation and reasoning", "Quality dashboard"],
      ["11", "Knowledge-Graph Construction", "Extraction, mapping, entity resolution, provenance and maintenance", "Pipeline lab"],
      ["12", "Neurosymbolic AI and Course Synthesis", "Knowledge graphs with machine learning, LLMs, agents and logical guardrails", "Project showcase"]
    ]
  },
  aml: {
    title: "Advanced Machine Learning",
    code: "AML",
    strapline: "Move from fitting models to designing reliable learning systems.",
    summary: "This module develops advanced modelling, experimental and interpretive skills, with emphasis on selecting methods for the problem rather than applying algorithms mechanically.",
    tools: "Python, NumPy, pandas, scikit-learn, XGBoost, SHAP and Jupyter/Colab",
    outcomes: ["Design robust machine-learning experiments", "Compare linear, kernel, ensemble and probabilistic methods", "Handle dimensionality and unstructured relationships", "Interpret uncertainty and model behaviour", "Communicate limitations and deployment risks"],
    weeks: [
      ["1", "Learning Problems and Experimental Design", "Tasks, variables, baselines, leakage and reproducible workflows", "Baseline notebook"],
      ["2", "Representation and Data Preparation", "Missingness, encoding, scaling, imbalance and feature construction", "Pipeline lab"],
      ["3", "Regularised Linear Models", "Bias–variance trade-off, L1/L2 penalties and model selection", "Derivation + code"],
      ["4", "Kernel Methods and Support Vector Machines", "Margins, kernels, dual intuition and hyperparameter search", "SVM lab"],
      ["5", "Tree Ensembles and Boosting", "Random forests, gradient boosting, XGBoost and feature importance", "Benchmark study"],
      ["6", "Unsupervised Learning", "Clustering, mixture models, validation and interpreting latent groups", "Clustering challenge"],
      ["7", "Dimensionality Reduction", "PCA, manifold learning and visualisation without overclaiming", "Embedding lab"],
      ["8", "Probabilistic Machine Learning", "Likelihood, Bayesian reasoning, calibration and uncertainty", "Calibration lab"],
      ["9", "Graph-Based Machine Learning", "Graph representations, node features, link prediction and message passing", "Graph notebook"],
      ["10", "Explainability and Responsible ML", "Global/local explanations, fairness, robustness and documentation", "Model audit"],
      ["11", "Deployment and Monitoring", "Distribution shift, drift, reproducibility and human oversight", "Deployment plan"],
      ["12", "Research-Style Evaluation", "Ablation, statistical comparison, reporting and project synthesis", "Project showcase"]
    ]
  },
  dl: {
    title: "Neural Networks and Deep Learning",
    code: "DL",
    strapline: "Understand what deep networks learn, how they learn and when to trust them.",
    summary: "This module builds neural networks from their mathematical foundations and progresses to contemporary architectures for images, sequences, graphs and generative modelling.",
    tools: "Python, PyTorch, torchvision, Hugging Face and Google Colab",
    outcomes: ["Derive and implement forward and backward propagation", "Train stable neural networks using modern optimisation", "Select architectures for images, sequences and graphs", "Use transfer learning and generative methods", "Evaluate robustness, explainability and computational cost"],
    weeks: [
      ["1", "From Perceptrons to Neural Networks", "Linear units, activations, multilayer networks and representation learning", "Build a neuron"],
      ["2", "Forward Propagation and Loss Functions", "Tensor shapes, logits, regression/classification losses and computation graphs", "PyTorch basics"],
      ["3", "Backpropagation Step by Step", "Chain rule, gradients, automatic differentiation and gradient checking", "Manual derivation"],
      ["4", "Optimisation and Regularisation", "SGD, momentum, Adam, schedules, weight decay, dropout and normalisation", "Training clinic"],
      ["5", "Convolutional Neural Networks", "Convolution, receptive fields, pooling and image-classification design", "CNN lab"],
      ["6", "Transfer Learning", "Pretraining, frozen features, fine-tuning and domain shift", "Image project"],
      ["7", "Sequence Models", "RNNs, LSTMs, gated memory and sequence learning", "Sequence lab"],
      ["8", "Attention and Transformers", "Queries, keys, values, self-attention, position and encoder/decoder design", "Attention notebook"],
      ["9", "Autoencoders and Generative Models", "Latent spaces, VAEs, GANs and diffusion-model intuition", "Generation lab"],
      ["10", "Graph Neural Networks", "Message passing, aggregation, node classification and graph-level tasks", "GNN lab"],
      ["11", "Interpretable and Robust Deep Learning", "Saliency, adversarial failure, uncertainty and responsible evaluation", "Network audit"],
      ["12", "Efficient Deployment and Synthesis", "Compression, inference, monitoring and communicating experimental evidence", "Project showcase"]
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('[data-module]');
  if (!root) return;
  const module = window.MODULES[root.dataset.module];
  if (!module) return;
  document.title = `${module.title} | ARU × CJLU`;
  document.querySelector('[data-module-code]').textContent = module.code;
  document.querySelector('[data-module-title]').textContent = module.title;
  document.querySelector('[data-module-strapline]').textContent = module.strapline;
  document.querySelector('[data-module-summary]').textContent = module.summary;
  document.querySelector('[data-module-tools]').textContent = module.tools;
  document.querySelector('[data-module-outcomes]').innerHTML = module.outcomes.map(item => `<li>${item}</li>`).join('');
  document.querySelector('[data-module-weeks]').innerHTML = module.weeks.map(week => `
    <tr><td>${week[0]}</td><td><strong>${week[1]}</strong><br>${week[2]}</td><td><span class="tag">${week[3]}</span></td></tr>`).join('');
});
